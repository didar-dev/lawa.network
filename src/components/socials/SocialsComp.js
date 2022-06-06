import React, { Component } from "react";
import "./socials.css";
import { FaGithub , FaFacebook , FaInstagram , FaSnapchat , FaDiscord } from "react-icons/fa";

export default class socials extends Component {
  render() {
    return (
      <section id="socials">
        <header>
          <div className="socials">
            <p className="iconsbackcirclepadding">
              <a  className="socialsiconback" href="https://github.com/didar-dev"> <FaGithub /></a>
            </p>
            <p className="iconsbackcirclepadding">
              <a  className="socialsiconback" href="https://www.facebook.com/DidarDotdev/"> <FaFacebook /></a>
            </p>
            <p className="iconsbackcirclepadding">
              <a  className="socialsiconback" href="https://www.instagram.com/didar.dev/"> <FaInstagram /></a>
            </p>
            <p className="iconsbackcirclepadding">
              <a  className="socialsiconback" href="https://www.snapchat.com/add/didar.dev"> <FaSnapchat /></a>
            </p>
            <p className="iconsbackcirclepadding">
              <a  className="socialsiconback" href="https://discord.gg/npW3Whn3b6"> <FaDiscord /></a>
            </p>
       
          </div>



        </header>
      </section>
    );
  }
}
