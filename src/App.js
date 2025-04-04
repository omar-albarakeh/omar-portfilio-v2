import React from "react";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div style={{ height: "2000px", paddingTop: "100px" }}>
        <h1>Welcome to My Website</h1>
      </div>
    </div>
  );
}

export default App;
