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
    const type = document.getElementById("pass").type;
    document.getElementById("pass").type =
      type === "password" ? "text" : "password";
    document.getElementById("cpass").type =
      type === "password" ? "text" : "password";
  };
  render() {
    return (
      <div className="Login">
        <div className="formInput">
          <div className="formElements">
            <p className="font">Hi...There</p>
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
                id="pass"
                name="password"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-control"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                id="cpass"
              ></input>
            </div>
            <div className="checkBox">
              <input
                name="show"
                type="checkbox"
                className="form-check-input password"
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
