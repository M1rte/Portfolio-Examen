// src/Components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Over mij</a></li>
        <li><a href="/contact">Contacten</a></li>
        <li><a href="/projects">Projecten</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer">Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
