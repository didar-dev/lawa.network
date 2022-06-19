import React, { Component } from "react";
import Data from "./projects.json";
import { Card, Button } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
export default class projects extends Component {
  render() {
    return (
      <section id="Projects">
        <div className="projectss">
          <p className="largeprojectsstext">My Projects</p>

          <div className="cardscointaiiner">
            {Data.map((post) => {
              return (
                <div className="carde" style={{ width: "30rem", margin: 20 }}>
                  <img className="projimg" src={post.image} />

                  <Card.Body>
                    <h5 className="projecttitle">{post.Project_name}</h5>
                    <p className="aboutprojecttext">{post.aboutproject}</p>

                    <a href={post.link} className="pgithublink">
                      <FaLink />
                    </a>
                  </Card.Body>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
