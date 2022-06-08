import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./css/global.css";

//Pages
import App from './App'; 
import GridLayout from "./gridlayout";


class Routers extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h1 style={{ textAlign: "center" }}>UI Home</h1>
          <Link to="/App">Login</Link>
          <Link to="/gridlayout">grid layout</Link>
        </nav>

        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/gridlayout" element={<GridLayout />} />
          
        </Routes>
      </Router>
    );
  }
}

export default Routers;