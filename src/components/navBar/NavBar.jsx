import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
