import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>la-Boutique</h1>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink> */}
      </nav>
    </div>
  );
};

export default NavBar;
