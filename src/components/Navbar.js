import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";


const Navbar = () => {
  return (
    <nav className="navbar">
      
     <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div> 
      
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
