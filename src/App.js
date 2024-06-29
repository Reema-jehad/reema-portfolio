import "./App.css";
import React from "react";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
// import Projects from "./components/Projects/projects";
import Project from "./components/Project/project";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
