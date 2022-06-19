import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Togletheme from "../themetoggle/Themetoggle";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styled from "styled-components";

export default class navbar extends Component {
  render() {
    const Image = styled(motion.img)`
      position: absolute;
      width: 60%;
    `;
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
                <p className="nameontop"> Didar Abdulkhaliq</p>
              </Navbar.Brand>
              <Navbar.Toggle
                className="navbarbtnonmob"
                aria-controls="responsive-navbar-nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbtn">
                  <Nav.Link>
                    <Link
                      className="thebtn"
                      to="home"
                      smooth="true"
                      duration={1}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="thebtn"
                      to="Projects"
                      smooth="true"
                      duration={1}
                    >
                      Projects
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="thebtn"
                      to="about"
                      smooth="true"
                      duration={1}
                    >
                      About
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Togletheme />
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
