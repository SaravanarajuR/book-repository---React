import React, { Component } from "react";

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
            <a href="www.google.com">Login Instead</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
