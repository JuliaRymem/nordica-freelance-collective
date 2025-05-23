import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function HeroTopbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Hem" },
    { path: "/about", label: "Om oss" },
    { path: "/freelancer", label: "Våra frilansare" },
    { path: "#footer", label: "Kontakt", external: true } // Scrollfunktionen
  ];

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-20 h-24 sm:h-28 mb-30 relative">
      {/* Loggan */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          className="h-30 sm:h-40 mt-20 rounded-full shadow-lg transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Navigation desktop */}
      <nav className="hidden md:flex items-center space-x-5 mt-2">
        {navLinks.map((link, index) =>
          link.external ? (
            <a
              key={index}
              href={link.path}
              className="text-sm font-semibold px-4 py-2 rounded-full text-gray-800 hover:bg-white hover:text-amber-700 hover:shadow-md transition-all duration-200"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={index}
              to={link.path}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-white text-amber-700 shadow-md"
                  : "text-gray-800 hover:bg-white hover:text-amber-700 hover:shadow-md"
              }`}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      {/* Ikonen hamburgermenyn */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-8 h-8 text-gray-800 hover:text-amber-600" />
          ) : (
            <Menu className="w-30 mt-20 h-10 text-gray-800 hover:text-amber-600" />
          )}
        </button>
      </div>

      {/* Meny vid mobil */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-40 md:hidden">
          {navLinks.map((link, index) =>
            link.external ? (
              <a
                key={index}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold px-4 py-2 rounded-full text-gray-800 hover:bg-amber-100 transition"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition ${
                  isActive(link.path)
                    ? "bg-white text-amber-700 shadow-md"
                    : "text-gray-800 hover:bg-amber-100"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
