import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Over mij</a></li>
          <li><a href="/contact">Contacten</a></li>
          <li><a href="/projects">Projecten</a></li>
        </ul>
      </div>

      <div className="footer-center">
        <h2 className="footer-logo">Mirte Wojciechowski</h2>
      </div>

      <div className="footer-right">
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          className="social-link"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
