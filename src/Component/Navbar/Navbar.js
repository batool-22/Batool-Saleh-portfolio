import React from "react";
import "./navbar.css";

const Navbar = () => {
  const handleClick = () => {
    const navbarSection = document.querySelector(".navbar-section");
    const sections = document.querySelectorAll("section");

    if (navbarSection) {
      navbarSection.classList.toggle("open");
    } else {
      console.error("Element .navbar-section not found");
    }

    if (sections.length > 0) {
      sections.forEach((section) => section.classList.toggle("open"));
    } else {
      console.error("No section elements found");
    }
  };

  return (
    <div className="navbar-section" onClick={handleClick}>
      <ul className="nav">
        <li>
          <a href="#home" className="active">
            <i></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i></i>About
          </a>
        </li>
        <li>
          <a href="#projects">
            <i></i>Projects
          </a>
        </li>
        <li>
          <a href="#tools">
            <i></i>Tools
          </a>
        </li>
        <li>
          <a href="#contact">
            <i></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
