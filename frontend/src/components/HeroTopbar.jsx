import React from "react";
import logo from "../assets/logo.jpg";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroTopbar() {
  return (
    <div className="hero-topbar">
      <img src={logo} alt="Logo" className="hero-logo" />

      <nav className="hero-nav-links">
        <Link to="/" className="hero-nav-link">
          Hem
        </Link>
        <Link to="/about" className="hero-nav-link">
          Om oss
        </Link>
        <Link to="/freelancer" className="hero-nav-link">
          Våra Frilansare
        </Link>
        <Link to="/contact" className="hero-nav-link">
          Kontakt
        </Link>
      </nav>

      <Menu className="hero-menu-icon" />
    </div>
  );
}
