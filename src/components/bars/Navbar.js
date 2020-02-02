/** @format */

import React, { Component } from "react";
import "../../css/Navbar.css";
import IMG from "../../images/img1.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navbar-items">
          <h2>TransMonitor</h2>
        </div>

        <div className="navbar-items">
          <span>
            <i class="fas fa-search" />
          </span>
          <input placeholder="Search..." />
        </div>

        <div className="navbar-items">
          <div className="navbar-items-contents">Support</div>
          <div className="navbar-items-contents">FAQ</div>
          <div className="navbar-items-contents">
            <i class="far fa-bell bell" />
            <span className="bell-number">2</span>
          </div>
          <div>
            <div
              style={{ fontSize: "0.5em" }}
              className="navbar-items-contents">
              Hello
            </div>
            <div className="navbar-items-contents">Olarenwanju</div>
          </div>
          <div>
            <img className="img" src={IMG} alt="profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
