import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

import gitmLogo from "../images/GITM_Logo.jpg";
import sankalpLogo from "../images/TeamSankalp.png";
import alacticLogo from "../images/Alactic.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  // Scroll Function
  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMenuOpen(false);
  };


  // Smart Navigation (Scroll + Route)
  const handleNavClick = (id, path = "/") => {

    if (location.pathname === path) {

      // Already on page → scroll
      scrollToSection(id);

    } else {

      // Go to home first
      navigate(path);

      // Wait for render then scroll
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };


  return (
    <>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-desktop">


        {/* ===== LEFT LOGOS ===== */}
        <div
          className="nav-logos"
          onClick={() => handleNavClick("home")}
        >

          <img src={gitmLogo} alt="GITM" className="nav-logo gitm-logo" />

          <span className="logo-divider" />

          <img src={sankalpLogo} alt="Team Sankalp" className="nav-logo sankalp-logo" />

          <span className="logo-divider" />

          <img src={alacticLogo} alt="Alactic" className="nav-logo alactic-logo" />

        </div>


        {/* ===== CENTER LINKS (DESKTOP) ===== */}
        <div className="nav-links desktop-links">

          <span
            onClick={() => handleNavClick("home")}
            className="nav-link"
          >
            Home
          </span>

          <span
            onClick={() => handleNavClick("about")}
            className="nav-link"
          >
            About
          </span>

          <span
            onClick={() => handleNavClick("timeline")}
            className="nav-link"
          >
            Timeline
          </span>

          <span
            onClick={() => handleNavClick("team")}
            className="nav-link"
          >
            Team
          </span>

          <span
            onClick={() => handleNavClick("profile")}
            className="nav-link"
          >
            Themes
          </span>

        </div>


        {/* ===== RIGHT AREA ===== */}
        <div className="nav-right">

          <button className="sign-in-btn desktop-btn">
            Coming Soon
          </button>


          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>


      </nav>



      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <span onClick={() => handleNavClick("home")}>Home</span>

        <span onClick={() => handleNavClick("about")}>About</span>

        <span onClick={() => handleNavClick("timeline")}>Timeline</span>

        <span onClick={() => handleNavClick("team")}>Team</span>

        <span onClick={() => handleNavClick("profile")}>Themes</span>

        <button className="sign-in-btn mobile-btn">
          Coming Soon
        </button>

      </div>

    </>
  );
}

export default Navbar;
