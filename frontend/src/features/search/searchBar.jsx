import { useState } from "react";
import { Search, Mic, ArrowRight } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
  <div className="searchBar">
    {/* Sökikon till vänster */}
    <Search className="iconLeft" />

    {/* Inputfältet */}
    <input
      className="bar"
      type="text"
      placeholder="Sök frilansare..."
      value={query}
      onChange={handleChange}
    />

    {/* Mic + Arrow till höger */}
    <div className="iconRight">
      <Mic className="micIcon" />
      <ArrowRight className="arrowRight" />
    </div>
  </div>
);
  
}