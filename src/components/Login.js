import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    //this.Cookie = new CookieHandler();
    this.state={
      userName:'',
      password: ''
    }
  }

  render() {
    console.log(this.state.dateOfBirth);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <span>Block Chain</span>
        </header>
        <Paper className="form" style={{padding: '30px', margin: '20px 30%'}}>
          <span style={{fontSize: '32px', fontWeight: '700'}}>Login</span>
          <div className="form-item">
            <TextField
              id="userName"
              label="User Name"
              value={this.state.userName}
              onChange={(e)=>this.setState({userName: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-item">
            <TextField
              id="password"
              label="Password"
              type= "password"
              value={this.state.password}
              onChange={(e)=>this.setState({password: e.target.value})}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <br />
          <Button variant="contained" color="primary" style={{textTransform: 'capitalize'}}>
            Submit
          </Button>&nbsp;&nbsp;
          <Button href="/" variant="contained" color="primary" style={{textTransform: 'capitalize'}}>
            Register
          </Button>
        </Paper>
      </div>
    );
  }
}
