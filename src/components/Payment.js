import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    //this.Cookie = new CookieHandler();
    this.state={
      image: '',
      file: '',
      imagePreviewUrl: '',
    };
    this._handleImageChange = this._handleImageChange.bind(this);
  }
  
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        image: reader.result,
        imagePreviewUrl: reader.result.replace(/^data:image\/\w+;base64,/, "")
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {image} = this.state;
    let $imagePreview = null;
    if (image) {
      $imagePreview = (<img src={image} alt = "" style = {{height: "150px", width: "150px"}} />);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <span>Block Chain</span>
        </header>
        <Paper className="form" style={{padding: '30px', margin: '20px'}}>
          <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <figure>
              <img src="http://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt = "" style = {{height: "150px", width: "150px", margin: '20px'}} />
              <figcaption>Pay with PAYTM</figcaption>
            </figure>
            <figure>
              <img src="http://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt = "" style = {{height: "150px", width: "150px", margin: '20px'}} />
              <figcaption>Pay with Google Pay</figcaption>
            </figure>
            <figure>
              <img src="http://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt = "" style = {{height: "150px", width: "150px", margin: '20px'}} />
              <figcaption>Pay with PhonePe</figcaption>
            </figure>
            <figure>
              <img src="http://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg" alt = "" style = {{height: "150px", width: "150px", margin: '20px'}} />
              <figcaption>Pay with BHIM UPI</figcaption>
            </figure>
          </div>
          <label>Upload transaction screenshot after done, or else your registration is not acceptable..</label> <br/>
          <Button label="Choose an Image" color="primary" >
            <input type="file" 
              accept=".png, .jpg, .jpeg, .PNG" 
              name="image" id="image" 
              onChange={this._handleImageChange} 
              margin="dense"
            />
          </Button>
          <div>
            {$imagePreview}
          </div>
          <br />
          <Button variant="contained" color="primary" style={{textTransform: 'capitalize'}}>
            Submit
          </Button>
        </Paper>
      </div>
    );
  }
}
