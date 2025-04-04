import React from "react";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Project";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
