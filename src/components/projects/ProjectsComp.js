import React, { Component } from "react";
import "./projects.css";
import { FaLink } from "react-icons/fa";

export default class projects extends Component {
  render() {
    return (
      <section id="Projects">
        <header>
          <div className="projectss">
            <p className="largeprojectsstext">My Projects</p>
            <div className="projectboxs">
              <div className="myprojects">
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
              <div className="myprojects">
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
              <div className="myprojects">
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
              <div className="myprojects">
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
              <div className="myprojects">
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
              <div className="myprojects">
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
              <div className="myprojects">
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
