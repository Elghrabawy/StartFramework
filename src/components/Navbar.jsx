import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import '../index.css'
import Portfolio from './../pages/Portfolio';

export default function Navbar() {
    const [onTop, setOnTop] = useState(true);

    addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        setOnTop(scrollY < 40);
    });
    
    return (
    <>
      <nav className={`bg-second navbar navbar-expand-lg fixed-top transition ${onTop ? "py-4" : "py-2"}`}>
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fs-6" aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fs-6" aria-current="page" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fs-6" aria-current="page" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fs-6" aria-current="page" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
