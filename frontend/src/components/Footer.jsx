import React from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[#e6eded] text-gray-700 mt-10 px-6 py-12 shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
      
      <p className="text-center text-xl text-gray-600">
  Kom i kontakt med oss
</p>
        {/* Sociala ikoner */}
        
        <div className="flex gap-15">
        <a
            href="#"
            aria-label="Email"
            className="hover:text-orange-800 transition-transform transform hover:scale-110"
          >
            <Mail size={40} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <Facebook size={40} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-transform transform hover:scale-110"
          >
          <Linkedin size={40} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <Instagram size={40} />
          </a>
        </div>

        {/* Footer-text */}
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 Nordica Freelance Collective
        </p>
      </div>
    </footer>
  );
};

export default Footer;
