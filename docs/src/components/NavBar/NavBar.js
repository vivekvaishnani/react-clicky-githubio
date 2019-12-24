import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <ul className="nav-bar">
    <li className="navbar-li">
    <a className="a1" >Clicky Game</a></li>
    <li className="navbar-header">Click an image to begin!</li>
    <li className="navbar-li">CurrentScore:{props.score}</li>
    <li className="navbar-li">Top Score:{props.topScore}</li>
   </ul>
);

export default NavBar;
