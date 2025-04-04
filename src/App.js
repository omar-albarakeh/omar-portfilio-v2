import React from "react";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
    </div>
  );
}

export default App;
