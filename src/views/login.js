import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth,
    };
  }
  showPassword = () => {
    const type = document.getElementById("password").type;
    document.getElementById("password").type =
      type === "password" ? "text" : "password";
  };

  render() {
    return (
      <div className="Login">
        <div className="formInput">
          <div className="formElements">
            <p className="font">Welcome Back</p>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                className="form-control"
                placeholder="E-mail"
                type="mail"
                name="mail"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                placeholder="password"
                type="password"
                name="password"
                id="password"
              ></input>
            </div>
            <div className="checkBox">
              <input
                name="show"
                type="checkbox"
                className="form-check-input"
                onChange={this.showPassword}
              ></input>
              <label htnmlFor="show" className="form-check-label">
                Show password
              </label>
            </div>
            <br />
            <NavLink className="Link" to="/signup">
              Register instead
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
