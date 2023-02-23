import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="left-header">
      <nav className="navigation">
        <span>Servy Page</span>
      </nav>
    </div>
    <div className="right-header">
      <li>
        <NavLink to="/">Servy</NavLink>
      </li>
      <li>
        <NavLink to="form">Form</NavLink>
      </li>
    </div>
  </header>
);
export default Header;
