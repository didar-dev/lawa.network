import React, { Component } from "react";
import "./projects.css";
import wallpaper from "../assets/wallpaper.png";

export default class About extends Component {
  render() {
    return (
      <section id="Projects">
        <header>
          <div className="projectss">
            <p className="largeprojectsstext">My Projects</p>
            <div className="myprojects">
            <div className="projectboxs">
                <div class="pnamecs">This Website</div>
                <div class="pnamecsmall">This Website one of my projects that i designed </div>

            </div>
            <div className="projectboxs">
                <div class="pnamecs">Coming Project</div>
                <div class="pnamecsmall">im working on projects :D it will be here soon</div>

            </div>
            <div className="projectboxs">
                <div class="pnamecs">Coming Project</div>
                <div class="pnamecsmall">im working on projects :D it will be here soon</div>

            </div>
            <div className="projectboxs">
                <div class="pnamecs">Coming Project</div>
                <div class="pnamecsmall">im working on projects :D it will be here soon</div>

            </div>
  
            </div>
          </div>
        </header>
      </section>
    );
  }
}
