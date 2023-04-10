import React, { Component } from "react";
import Navbar from "./navbar";

class addBook extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="addBookForm">
          <div className="form-control">
            <label htmlFor="fileUpload">Upload book or any pdf</label>
            <input name="fileUpload" type="file"></input>
          </div>
          <button className="btn btn-dark">Add</button>
        </div>
      </div>
    );
  }
}

export default addBook;
