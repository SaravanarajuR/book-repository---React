import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      warning: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("/api");
    console.log(response);
  }
  handleChange = (evt) => {
    this.setState(() => {
      return { [evt.target.id]: evt.target.value };
    });
  };

  submit = (evt) => {
    evt.preventDefault();
    if (this.state.password.length < 8) {
      this.setState({ warning: "password should be atleast 8 characters" });
    } else {
      document.getElementById("submit").submit();
    }
  };

  showPassword = () => {
    const type = document.getElementById("password").type;
    document.getElementById("password").type =
      type === "password" ? "text" : "password";
  };

  render() {
    return (
      <div className="Login">
        <form action="/" method="POST">
          <div className="formInput">
            <div className="formElements">
              <p className="font">Welcome Back</p>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.mail}
                  className="form-control"
                  placeholder="E-mail"
                  type="mail"
                  name="mail"
                  id="mail"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="password"
                  type="password"
                  name="password"
                  id="password"
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
                  className="form-check-input"
                  onChange={this.showPassword}
                ></input>
                <label htmlFor="show" className="form-check-label">
                  Show password
                </label>
              </div>
              <div>
                <button
                  onClick={this.submit}
                  id="submit"
                  className="btn btn-light"
                >
                  Login
                </button>
              </div>
              <br />
              <NavLink className="Link" to="/signup">
                Register instead
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
