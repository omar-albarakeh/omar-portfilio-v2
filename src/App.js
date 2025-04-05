import React from "react";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import { Contact } from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
