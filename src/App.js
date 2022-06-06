import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavbarComp from "./components/navbar/NavbarComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/about/AboutComp";
import PrijectsComp from "./components/projects/ProjectsComp";

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <HomeComp></HomeComp>
       <PrijectsComp></PrijectsComp>
      <AboutComp></AboutComp>
    </div>
  );
}

export default App;
