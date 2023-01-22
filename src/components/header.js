import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <h2 className="title">SPORTSHOP</h2>
        <NavLink to="/home" className="navbar">
          Home
        </NavLink>
        <NavLink to="/explore" className="navbar">
          Explore
        </NavLink>
        <NavLink to="/apparel" className="navbar">
          Apparel
        </NavLink>
      </div>
    </div>
  );
}
