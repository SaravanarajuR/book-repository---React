import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Signup extends Component {
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
            <input
              className="form-control"
              placeholder="E-mail"
              type="mail"
            ></input>
            <input
              id="password"
              className="form-control"
              placeholder="Password"
              type="password"
            ></input>
            <div>
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
            <NavLink className="Link" to="/">
              Login instead
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
