import React, {useState} from 'react';
import './Navbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const toggleNavbar = () => {
    const navbarNav = document.querySelector("#navbarNav");
    navbarNav.classList.toggle("show");

    const navbarCollapse = document.querySelector('.collapse.navbar-collapse');
    const dropdownMenu = navbarCollapse.querySelector('.dropdown-menu');
    const navLinks = navbarCollapse.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach((navLink) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = navLink.href;
        anchor.className = 'dropdown-item';
        anchor.textContent = navLink.textContent;
        listItem.appendChild(anchor);
        dropdownMenu.appendChild(listItem);
    });
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100 bg-light background-color: #CCCCCC">
      <div className="container-fluid">
    <div className="logo navbar-brand">Wellness Chick</div>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"    
          id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noreferrer">Linkedin</a>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com" className="nav-link" target="_blank" rel="noreferrer">Twitter</a>
            </li>
          </ul>
          <ul className="dropdown-menu"></ul>
      </div>
    </div>
</nav>

  );
};

export default Navbar;