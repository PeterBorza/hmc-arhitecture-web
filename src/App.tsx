import React from "react";
import "./App.scss";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import hmc from "./images/HMC4000X6000.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <img className="logoPic" src={hmc} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="page1">Page1</Link>
          </li>
          <li>
            {" "}
            <Link to="page2">Page2</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
