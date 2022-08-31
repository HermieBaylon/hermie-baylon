import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setNavMenu(!navMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="header">
      {(navMenu || screenWidth > 500) && (
        <ul className="navbar">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contact Me</Link>
          </li>
          {/* <li className="item-resume">
            <Link to="HermieBaylonResume2022.pdf">My Resume</Link>
          </li> */}
        </ul>
      )}
      {!navMenu && (
        <ul className="navbar">
          <li></li>
        </ul>
      )}
      <GiHamburgerMenu
        onClick={toggleMenu}
        className="hamburger"
      ></GiHamburgerMenu>
    </nav>
  );
}
