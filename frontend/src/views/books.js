import React, { Component } from "react";
import Navbar from "./navbar";

class Book extends Component {
  constructor() {
    super();
    this.state = {
      books: async () => {
        return await fetch("/books");
      },
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        {window.localStorage.authenticated ? (
          <div>{this.bookRender}</div>
        ) : (
          <div>{(window.location.href = "/signup")}</div>
        )}
      </div>
    );
  }
}

export default Book;
