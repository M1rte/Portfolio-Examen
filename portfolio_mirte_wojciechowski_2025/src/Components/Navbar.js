import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="nav-logo">Mirte Wojciechowski</h2>
      </div>

      <div className="nav-right">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Over mij</a></li>
          <li><a href="/projects">Projecten</a></li>
          <li><a href="/evidence">Bewijsmaterialen</a></li>
          <li><a href="/contact">Contacten</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
