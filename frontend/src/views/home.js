import React, { Component } from "react";
import Navbar from "./navbar.js";

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
        </section>

        <section className="row">
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
      </div>
    );
  }
}

export default Home;
