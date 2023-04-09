import React, { Component } from "react";
import Navbar from "./navbar.js";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="slogan">
          <div className="sloganInner">
            <div>
              <p className="sloganFont-1">Share Your Knowlege</p>
            </div>
            <div>
              <p className="sloganFont-2">
                Join Our Community and Help us to create a
                <br /> new world
              </p>
            </div>
            <div>
              <button className="joinBtn">Join Us</button>
            </div>
          </div>
          <div>
            <img
              className="bookImg"
              src="https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
              alt="book"
            />
          </div>
        </section>
        <section className="row">
          <p className="rowFont-1">What You'll get</p>
          <div className="col-sm-12 col-lg-4 col-md-6 about">
            <h1>Store</h1>
            <p className="about-font">
              Store Books and Notes that you need and access any where you want
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6 about">
            <h1>Bookmark</h1>
            <p className="about-font">
              Add books to your favourites for easy access
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6 about">
            <h1>Share</h1>
            <p className="about-font">Share Books or notes with your friends</p>
          </div>
        </section>

        <section className="details">
          <div>
            <img
              className="Logo"
              src="https://www.nicepng.com/png/full/8-83223_emoji-book-png.png"
              alt="book"
            />
            <p className="navbar-brand"> BookNology</p>
          </div>
          <div className="detailsChild">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/support">
              Support
            </NavLink>
            <NavLink className="nav-link" to="/faq">
              FAQ
            </NavLink>
          </div>
          <div className="detailsChild">
            <NavLink className="nav-link" to="/">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/books">
              My Books
            </NavLink>
          </div>
          <div className="detailsChild">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/support">
              Support
            </NavLink>
            <NavLink className="nav-link" to="/faq">
              FAQ
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
