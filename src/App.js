import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavbarComp from "./components/navbar/NavbarComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/about/AboutComp";
import PrijectsComp from "./components/projects/ProjectsComp";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";
import logo from "./components/assets/lawa.png";

function App() {
  const override = css`
    margin: 0 auto;
  `;
  let [color, setColor] = useState("#d0800a");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loadeer">
          {/* <img className="lawo" src={logo}></img> */}

          <GridLoader
            color={color}
            loading={loading}
            css={override}
            size={35}
          />
        </div>
      ) : (
        <>
          <NavbarComp></NavbarComp>
          <HomeComp></HomeComp>
          <PrijectsComp></PrijectsComp>
          <AboutComp></AboutComp>
        </>
      )}
    </div>
  );
}

export default App;
