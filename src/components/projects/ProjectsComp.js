import React, { Component } from "react";
import "./projects.css";
import { FaLink } from "react-icons/fa";
import noproject from "../assets/noproject.png"
export default class projects extends Component {
  render() {
    return (
      <section id="Projects">
        <header>
          <div className="projectss">
            <p className="largeprojectsstext">My Projects</p>
            <div className="projectboxs">
              <div className="projectcard-1">  
              <p className="projecttitle">My portfolio</p>
              <p className="projectinfo">A simple portfolio for myself </p>

                <div className="previewlink">
                  <a
                    className="projectlink"
                    href="https://www.didar.dev"
                  >
                    {" "}
                    <FaLink />
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        </header>
      </section>
    );
  }
}
