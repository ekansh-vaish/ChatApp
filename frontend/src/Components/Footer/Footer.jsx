import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ChatApp All rights reserved.</p>
      <div className="footer-links">
       <b> <a href="/about">About</a></b>
        <b><a href="/contact">Contact</a></b>
        <b><a href="/privacypolicy">Privacy Policy</a></b>
      </div>
    </footer>
  );
}

export default Footer;
