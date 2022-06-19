import React, { Component } from "react";
import lawam from "../assets/lawam.jpg";
import { FaGraduationCap, FaHome, FaHeart } from "react-icons/fa";
import SocialsComp from "../socials/SocialsComp";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <header>
          <div className="aboutt">
            <p className="largefeaturestext">About</p>
            <div className="aboutconts">
              <div className="aboutcont">
                <div className="reallaboutme">
                  <h3>Didar Abdulkhaliq</h3>

                  <p>
                    I'm a full stack web developer, from Kurdistan,<br></br>{" "}
                    with a primary focus on React.{" "}
                  </p>
                  <SocialsComp></SocialsComp>
                </div>

                <div className="abotmetextlines">
                  <p className="abotmetexticonst">
                    <FaGraduationCap />{" "}
                  </p>
                  <p>Studies Computer Science at Gasha Institute</p>
                </div>

                <div className="abotmetextlines">
                  <p className="abotmetexticonst">
                    <FaHome />{" "}
                  </p>
                  <p>Lives in Irbil, Iraq</p>
                </div>
              </div>

              <div className="aboutcontimg">
                <img className="aboutimageshadow" src={lawam}></img>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
  }
}
