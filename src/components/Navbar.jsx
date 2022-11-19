import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>React projects</h1>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Counterclick">Counterclick</Link>
            </li>
            <li>
              <Link to="/Clock">Clock</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
