import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function HeroTopbar() {
  return (
    <div className="hero-topbar">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="hero-logo" />
      </div>

      {/* Mitten: Navigering */}
      <div className="hero-nav-wrapper">
        <nav className="hero-nav-links">
          <Link to="/" className="hero-nav-link">Hem</Link>
          <Link to="/about" className="hero-nav-link">Om oss</Link>
          <Link to="/freelancer" className="hero-nav-link">Våra frilansare</Link>
          <Link to="/contact" className="hero-nav-link">Kontakt</Link>
        </nav>
      </div>
    </div>
  );
}
