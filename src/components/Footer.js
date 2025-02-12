import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure you have this CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="mailto:tsahu8749@gmail.com" className="icon"><FaEnvelope /></a>

        <a href="https://github.com/Tsahu874" className="icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/tanishka-sahu/" className="icon"><FaLinkedin /></a>

      </div>
      <p>© 2025  All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;