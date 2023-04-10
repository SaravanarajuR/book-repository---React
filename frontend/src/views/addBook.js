import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";

class addBook extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: async () => {
        await axios.get("/addbook").then((response) => response.authenticated);
      },
    };
  }
  render() {
    return (
      <div>
        {!this.state.authenticated ? (
          <div></div>
        ) : (
          <div>
            <Navbar />
            <div className="addBookForm">
              <div className="form-control">
                <label htmlFor="fileUpload">Upload book or any pdf</label>
                <input name="fileUpload" type="file"></input>
              </div>
              <button className="joinBtn">Add</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default addBook;
