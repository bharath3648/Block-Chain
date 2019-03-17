import React from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";
import Paper from '@material-ui/core/Paper';
import _ from "lodash";
import Button from '@material-ui/core/Button';
import logo from '../logo.svg';

//import CookieHandler from './CookieHandler';
//import api from '../api/api';

const requestData = (pageSize, page, sorted, filtered, rawData) => {
  return new Promise((resolve, reject) => {
    // You can retrieve your data however you want, in this case, we will just use some local data.
    let filteredData = rawData;
    // You can use the filters in your request, but you are responsible for applying them.
    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter(row => {
          var reg = new RegExp(nextFilter.value,"i");;
          return !!((row[nextFilter.id] + "").match(reg));
        });
      }, filteredData);
    }
    // You can also use the sorting in your request, but again, you are responsible for applying it.
    const sortedData = _.orderBy(
      filteredData,
      sorted.map(sort => {
        return row => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map(d => (d.desc ? "desc" : "asc"))
    );

    // You must return an object containing the rows of the current page, and optionally the total pages number.
    const res = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    };
    // Here we'll simulate a server response with 500ms of delay.
    setTimeout(() => resolve(res), 1);
  });
};

export default class UsersList extends React.Component {
  constructor() { 
    super();
    //this.Cookie = new CookieHandler();
    this.state = {
      rawData:null,
      data: [],
      pages: null,
      loading: true,
      error:'',
      roles: []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.setState({ loading: true, fetchDataState: state });
    if(!!this.state.rawData) {
      requestData(
        state.pageSize,
        state.page,
        state.sorted,
        state.filtered,
        this.state.rawData
      ).then(res => {
        // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
        this.setState({
          data: res.rows,
          pages: res.pages,
          loading: false
        });
      });
    }
  }

  componentWillMount() {

    let array = [];
    for(var i=0; i< 20; i++){
      array.push({user_id: i+1,name: 'name'+i, email: 'email'+i, reference_id: 'reference_id'+i, mobile_number: 9876543210+i, tez_number: 9876543210+i, paytm_number: 9876543210+i, date_of_birth: 'Jan 30 1992' });
    }
    //console.log(array);
    this.setState({
      rawData: array,
      pages: Math.ceil(array / 10),
      loading: false,
    });
    /*
    if(!this.Cookie.isLoggedIn()) {
      this.props.history.replace('/login');
    }
    else {
      var userID = this.Cookie.getCookie('userID');
      if(!userID) { 
        this.props.history.replace('/login');
      }
      else {
        var idToken = this.Cookie.getIdTokenCookie();
        // Invoke get user details API
        api.getUserDetails(userID, idToken).then((response) => {
          if(response.status >= 200 && response.status < 300) {
            response.json().then((res) => {
              if(res.roles) {
                this.setState({
                  roles: res.roles
                })
                var userRoles = [];
                userRoles = res.roles;
                var administratorFlag = userRoles.indexOf("Administrator");
                var contentEditorFlag = userRoles.indexOf("Content Editor");
                var fieldManagerFlag = userRoles.indexOf("Field Manager");
                if(administratorFlag > -1 || contentEditorFlag > -1 || fieldManagerFlag > -1) {
                  // Invoke get products list API
                  api.getProductsList().then((response) => {
                    if(response.status >= 200 && response.status < 300) {
                      response.json().then((res) => {
                        if (res.products) {
                          this.setState({
                            rawData: res.products,
                            pages: Math.ceil(res.products / 10),
                            loading: false,
                          });
                          document.title = "Product List | Reviewtale";
                          this.fetchData(this.state.fetchDataState);
                        }
                        else {
                          this.setState({
                            error: "Something went wrong. Please contact site administrator"
                          });
                        }
                      });
                    }
                    else if (response.status === 607) {
                      this.props.history.replace('/logout');
                    }
                  });
                } 
                else {
                 this.props.history.replace('/profile');
                }
                this.Cookie.setIdTokenCookie(res.idtoken);
              }
            });
          }
        });
      }
    }*/
  }
  
  render() {
    const { data, pages, loading } = this.state;
    const style = {
      padding: "20px",
      background:"#dde8e8"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <span>Block Chain</span>
        </header>
        <div style={{padding: "10px"}}>
          <Paper style={style} zdepth={2}>
            <h2 id="headingList" style= {{color:"#5c6bc0",marginTop:'0px'}}><legend>Users List</legend></h2>
            <p style={{color:"red"}}>{this.state.error}</p>
            <ReactTable
              columns={[
                {
                  Header: "User ID",
                  accessor: "user_id",
                  id: "edit",
                  Cell: ({value}) => (<a style = {{textDecoration: 'none', color: '#0066c0'}} href={'/update-roles/' + btoa(value)}>{value}</a>),
                  //width: 75
                },
                {
                  Header: "Name",
                  accessor:"name",
                  width: 150
                },
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Reference ID",
                  accessor: "reference_id"
                },
                {
                  Header: "Mobile Number",
                  accessor: "mobile_number"
                },
                {
                  Header: "Date Of Birth ",
                  accessor: "date_of_birth"
                },
                {
                  Header: "Google Pay Number",
                  accessor: "tez_number",
                },
                {
                  Header: "PayTm Number",
                  accessor: "paytm_number",
                },
                {
                  Header: "Action",
                  accessor: "product_id",
                  sortable: false,
                  filterable:false,
                  Cell: row => {
                    return (
                      <div style={{textAlign: 'center', marginTop: '-10px', marginBottom: '-10px'}}>
                        <Button 
                          variant="contained"
                          color="primary"
                          style={{textTransform: 'capitalize'}} 
                          href={'/'}
                        >
                          Approve
                        </Button>
                      </div>
                    )
                  },
                },
              ]}
              manual
              data={data}
              pages={pages} // Display the total number of pages
              loading={loading} // Display the loading overlay when we need it
              onFetchData={this.fetchData} // Request new data when things change
              filterable
              defaultSorted={[
                {
                  id: "user_id"
                }
              ]}
              defaultPageSize={10}
              minRows={2}
              className="-striped -highlight"
            />
          </Paper><br />
        </div>
      </div>
    );
  }
}