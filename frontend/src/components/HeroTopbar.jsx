import React from "react";
import logo from "../assets/logo.jpg";
import { Menu } from "lucide-react";

export default function HeroTopbar() {
  return (
    <div className="hero-topbar">
      <img src={logo} alt="Logo" className="hero-logo" />
      <Menu className="hero-menu-icon" />
    </div>
  );
}
