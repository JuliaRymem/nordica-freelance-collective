import React from "react";
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Om Oss",
    description: "Lär känna vårt team och vår vision.",
    path: "/about",
  },
  {
    title: "Tjänster",
    description: "Utforska alla tjänster vi erbjuder.",
    path: "/services",
  },
  {
    title: "Kontakt",
    description: "Kom i kontakt med oss för frågor och support.",
    path: "/contact",
  },
];

export default function PageLinks() {
  const navigate = useNavigate();

  return (
    <div className="links-section">
      {links.map(({ title, description, path }, idx) => (
        <div
          key={idx}
          className="link-card"
          onClick={() => navigate(path)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate(path)}
        >
          <h3 className="link-title">{title}</h3>
          <p className="link-description">{description}</p>
        </div>
      ))}
    </div>
  );
}
