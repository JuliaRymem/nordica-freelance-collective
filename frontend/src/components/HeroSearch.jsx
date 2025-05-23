import React from "react";
import { Search, Mic, ArrowRight } from "lucide-react";

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
    </div>
  );
}
