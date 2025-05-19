import React from "react";
import { useState } from "react";
import "../../styles/navbar.css"; // Om du använder CSS med @apply
import logo from "../../../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Vänster: Länkar */}
      <div className="nav-left hidden md:flex">
        <ul className="nav-links">
          <li><a href="#">Hem</a></li>
          <li><a href="#">Alla Frilansare</a></li>
          <li><a href="#">Recensioner</a></li>
        </ul>
      </div>

      {/* Mitten: Logotyp */}
      <div className="nav-center">
        <img src={logo} alt="Logotyp" className="nav-logo" />
      </div>

      {/* Höger: Om oss */}
      <div className="nav-right hidden md:flex">
        <ul className="nav-links justify-end">
          <li><a href="#">Om oss</a></li>
        </ul>
      </div>

      {/* Mobilmeny-knapp */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger md:hidden">
        <span className="text-white text-2xl">&#9776;</span>
      </button>

      {/* Mobilmeny */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          <ul className="flex flex-col space-y-4 text-center mt-4">
            <li><a href="#">Hem</a></li>
            <li><a href="#">Alla Frilansare</a></li>
            <li><a href="#">Recensioner</a></li>
            <li><a href="#">Om oss</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
