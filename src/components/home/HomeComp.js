import React, { Component } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import "./home.css";
import logo from "../assets/logo.png";
import star from "../assets/star.png";

export default class home extends Component {
  render() {
    return (
      <section id="home">
        <header className="Homee">
          <div class="area">
            <div className="mainimg">
              <img alt="lawaimg" className="lawaimg" src={star} />

              <img
                alt="logo"
                src={logo}
                style={{ width: 250, marginTop: -7 }}
              />
            </div>
            <p className="largetext">LAWA</p>
            <p className="smalltext">Front-end developer</p>

            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </header>
      </section>
    );
  }
}
