import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const linkStyle={
    fontWeight:"bold",
    textDecoration:"none",
    color:"white"
  }

  const responsive_Menu=()=>{
    var e=document.getElementById('NavResponsive');
    if(e.className==='navbar'){
      e.className+=' responsive';
    }
    else{
      e.className='navbar';
    }
  }
  return (
    
    <div>
      <nav>
      <div className="Nav-Hidden"onClick={responsive_Menu}>
        <div id="bar1"className="bar"></div>
        <div id="bar2"className="bar"></div>
        <div id="bar3"className="bar"></div>
      </div>
        <div className="logo">
          <h1>React projects</h1>
        </div>
        <div className="navbar"id="NavResponsive">
          <ul>
            <li>
              <Link to="/"style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/Counterclick"style={linkStyle}>Counterclick</Link>
            </li>
            <li>
              <Link to="/Clock"style={linkStyle}>Clock</Link>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
};
