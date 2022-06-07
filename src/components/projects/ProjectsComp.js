import React, { Component } from "react";
import "./projects.css";
import { FaLink , FaGithub } from "react-icons/fa";
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
              <div className="projectcard-2">  
              <p className="projecttitle">Coming Soon</p>
              <p className="projectinfo">on the way!</p>

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
              


              <div className="seemoremygithub">  
              <p className="gotomygithubh">Go to my github to see my open source projects</p>

                <div className="githubpreviewlink">
                  <a
                    className="MyGithublink"
                    href="https://www.didar.dev"
                  >
                    {" "}
                    <FaGithub />
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
