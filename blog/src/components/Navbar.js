import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Inspire. Empower. Flourish</div>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>
        <a href="https://linkedin.com" className="navbar-link" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="https://twitter.com" className="navbar-link"  target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </nav>
  );
}

export default Navbar;