import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Register extends Component {
  constructor(props) {
    super(props);
    //this.Cookie = new CookieHandler();
    this.state={
      name:''
    }
  }

  render() {
    console.log(this.state.dateOfBirth);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <span>Block Chain</span>
        </header>
        <Paper className="form">
          <span style={{fontSize: '32px', fontWeight: '700'}}>Register</span>
          <div className="form-item">
            <span className="title-name">
              Name
            </span>
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              onChange={(e)=>this.setState({name: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Email Address
            </span>
            <TextField
              id="email"
              label="Email Address"
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Reference ID
            </span>
            <TextField
              id="referenceId"
              label="Reference ID"
              value={this.state.referenceId}
              onChange={(e)=>this.setState({referenceId: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Mobile Number
            </span>
            <TextField
              id="mobileNumber"
              label="Mobile Number"
              value={this.state.mobileNumber}
              onChange={(e)=>this.setState({mobileNumber: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              TEZ Number
            </span>
            <TextField
              id="tezNumber"
              label="TEZ Number"
              value={this.state.tezNumber}
              onChange={(e)=>this.setState({tezNumber: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              PAYTM Number
            </span>
            <TextField
              id="paytmumber"
              label="PAYTM Number"
              value={this.state.paytmumber}
              onChange={(e)=>this.setState({paytmumber: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Date Of Birth
            </span>
            <TextField
              id="dateOfBirth"
              label="Date Of Birth"
              type="date"
              value={this.state.dateOfBirth}
              onChange={(e)=>this.setState({dateOfBirth: e.target.value})}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Bank Holder Name
            </span>
            <TextField
              id="bankHolderName"
              label="Bank Holder Name"
              value={this.state.bankHolderName}
              onChange={(e)=>this.setState({bankHolderName: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Bank Name
            </span>
            <TextField
              id="bankName"
              label="Bank Name"
              value={this.state.bankName}
              onChange={(e)=>this.setState({bankName: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              IFSC Code
            </span>
            <TextField
              id="ifscCode"
              label="IFSC Code"
              value={this.state.ifscCode}
              onChange={(e)=>this.setState({ifscCode: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <span className="title-name">
              Branch Name
            </span>
            <TextField
              id="branchName"
              label="Branch Name"
              value={this.state.branchName}
              onChange={(e)=>this.setState({branchName: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <br />
          <Button variant="contained" color="primary" style={{display: 'block', textTransform: 'capitalize'}}>
            Submit
          </Button>
        </Paper>
      </div>
    );
  }
}
