import React from "react";
import logo from "../assets/logo.jpg";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroTopbar() {
  return (
    <div className="hero-topbar">
      <img src={logo} alt="Logo" className="hero-logo" />

      <nav className="hero-nav-links">
        <Link to="/about" className="hero-nav-link">Om oss</Link>
        <Link to="/services" className="hero-nav-link">Våra tjänster</Link>
        <Link to="/services" className="hero-nav-link">Våra tjänster</Link>
        <Link to="/contact" className="hero-nav-link">Kontakt</Link>
      </nav>

      <Menu className="hero-menu-icon" />
    </div>
  );
}
