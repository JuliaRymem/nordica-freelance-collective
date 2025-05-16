import "./hero.css";
import logo from "../assets/logo.jpg";
import { Menu, Search, Mic, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="hero-container">
      {/* Top Bar */}
      <div className="hero-topbar">
        <img src={logo} alt="Logo" className="hero-logo" />
        <Menu className="hero-menu-icon" />
      </div>

      {/* Hero Text */}
      <h1 className="hero-heading">
        NORDIC <br /> FREELANCE COLLECTIVE
      </h1>

      {/* Knapp */}
      <div className="hero-buttons">
        <button className="btn-login">LOG IN</button>
        <button className="btn-join">JOIN US</button>
      </div>

      {/* Sökruta */}
      <div className="hero-search">
        <Search className="text-black mr-2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for any services..."
          className="search-input"
        />
        <Mic className="text-black w-5 h-5 mx-2" />
        <ArrowRight className="text-black w-5 h-5" />
      </div>

      <div className="popular-skills-wrapper">
  <p className="popular-skills-label">Popular search</p>
  <div className="popular-skills-list">
    <span className="popular-skill">web design</span>
    <span className="popular-skill">UI/UX design</span>
    <span className="popular-skill">databases</span>
    <span className="popular-skill">react</span>
  </div>
</div>

      {/* Trusted Freelancers - sektionen */}
      <div className="freelancer-card">
        <p className="freelancer-text">Trusted Freelancers</p>
        <div className="flex space-x-1">
          <span className="freelancer-stars">⭐️⭐️⭐️⭐️⭐️</span>
        </div>
        <div className="freelancer-avatars">
          <div className="avatar avatar-pink" />
          <div className="avatar avatar-blue" />
          <div className="avatar avatar-yellow" />
          <div className="avatar avatar-purple" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
