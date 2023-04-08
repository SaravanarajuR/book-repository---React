import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pass: "",
      cpass: "",
      warning: "",
    };
  }

  handleChange = (evt) => {
    this.setState(() => {
      return { [evt.target.id]: evt.target.value };
    });
  };
  submitForm = (evt) => {
    evt.preventDefault();
    if (this.state.pass.length < 8) {
      this.setState({ warning: "password should be atleast 8 characters" });
    } else if (this.state.pass !== this.state.cpass) {
      this.setState({ warning: "Password don't match" });
    } else {
      axios.post("/signup", this.state).then((response) => {
        if (response.data.warning) {
          this.setState({ warning: response.data.warning });
        } else {
          window.location.href("/");
        }
      });
    }
  };
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
        <form method="POST" action="/signup">
          <div className="formInput">
            <div className="formElements">
              <p className="font">Hi...There</p>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  value={this.state.mail}
                  className="form-control"
                  placeholder="E-mail"
                  type="mail"
                  name="mail"
                  id="mail"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={this.state.pass}
                  className="form-control"
                  placeholder="password"
                  type="password"
                  id="pass"
                  name="password"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  value={this.state.cpass}
                  className="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  id="cpass"
                  onChange={this.handleChange}
                ></input>
              </div>
              {this.state.warning.length > 1 ? (
                <div className="warning">{this.state.warning}</div>
              ) : (
                ""
              )}

              <div className="checkBox">
                <input
                  name="show"
                  type="checkbox"
                  className="form-check-input password"
                  onChange={this.showPassword}
                ></input>
                <label htmlFor="show" className="form-check-label">
                  Show password
                </label>
              </div>
              <div>
                <button onClick={this.submitForm} className="btn btn-light">
                  Register
                </button>
              </div>
              <NavLink className="Link" to="/">
                Login instead
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
