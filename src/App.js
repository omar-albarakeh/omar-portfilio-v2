import React from "react";
import "./app.css";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LetsConnect from "./components/letsConnect";

function App() {
  return (
    <div>
      <MyNavbar />
      <LetsConnect />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default App;
