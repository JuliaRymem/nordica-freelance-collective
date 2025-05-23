import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/freelancer");
  };

  return (
    <div>
      <div className="hero-search">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Vad söker du efter?..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ArrowRight className="search-icon cursor-pointer" onClick={handleSearch} />
      </div>
    </div>
  );
}
