import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  render() {
    return (
      <div>
        <h4 className="m-2 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row m-2">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange = {
              (e) => {
                this.setState({email: e.target.value});
              }
            }
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row m-2">
          <label className="col-lg-4">Password:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.password}
            onChange = {
              (e) => {
                this.setState({password: e.target.value});
              }
            }
          />
        </div>
        {/* Password ends */}

        <div className="m-2">
          {this.state.message}
          <br />
          <button className="btn btn-primary mx-1 my-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    )
  } // end of render

  onLoginClick = async() => {
    console.log(this.state);

    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      {method: "GET"}
    );
    let body = await response.json();
    console.log(body);

    if (body.length > 0) {
      console.log(body);
      this.setState({
        message: <span className="text-success">Successfully logged-in!</span>
      });
    } else {
      this.setState({
        message: <span className="text-danger">Invalid login, please try again!</span>
      });
    }
  }
}
