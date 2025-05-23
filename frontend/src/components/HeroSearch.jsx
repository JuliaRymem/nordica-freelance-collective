import React from "react";
import { Search, Mic, ArrowRight } from "lucide-react";

const popularSearches = [
  "Webbdesign",
  "UI/UX-design",
  "SEO",
  "React",
  "Marknadsföring",
  "Copywriting",
];

export default function HeroSearch() {
  return (
    <div>
      <div className="hero-search">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Vad söker du efter?..."
          className="search-input"
        />
        <Mic className="search-icon mx-2" />
        <ArrowRight className="search-icon" />
      </div>

      {/* Populära sökningar */}
      <div className="popular-skills-wrapper">
        <p className="popular-skills-label">Populära sökningar</p>
        <div className="popular-skills-list">
          {popularSearches.map((skill, idx) => (
            <span key={idx} className="popular-skill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
