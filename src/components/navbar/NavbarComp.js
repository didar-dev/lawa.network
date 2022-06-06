import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

export default class navbar extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar
            className="navbarcss"
            fixed="top"
            collapseOnSelect
            expand="lg"
          >
            <Container>
              <Navbar.Brand>
                <a>
                  <Link to="home" smooth="true" duration={1}>
                    <img
                      alt="logo"
                      src={logo}
                      style={{ width: 60, marginTop: -7 }}
                    />
                  </Link>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbtn">
                  <Nav.Link>
                    <Link to="home" smooth="true" duration={1}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="Projects" smooth="true" duration={1}>
                    Projects
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="about" smooth="true" duration={1}>
                      About
                    </Link>
                  </Nav.Link>
              
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
