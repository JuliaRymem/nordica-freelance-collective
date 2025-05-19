import React from "react";
import { Search, Mic, ArrowRight } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="hero-search">
      <Search className="text-black mr-2 w-5 h-5" />
      <input
        type="text"
        placeholder="Vad söker du efter?..."
        className="search-input"
      />
      <Mic className="text-black w-5 h-5 mx-2" />
      <ArrowRight className="text-black w-5 h-5" />
    </div>
  );
}
