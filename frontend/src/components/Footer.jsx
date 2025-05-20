import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#e6eded] text-gray-700 mt-48 px- py-12 shadow-inner">
      <div className="max-w-10xl mx-auto flex flex-col items-center space-y-6">

        <br />
        {/* Ikoner */}
        <div className="flex gap-10">
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-500 transition-transform transform hover:scale-110"
          >
            <Twitter size={40} />
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
<br />
        {/* Text */}
        <p className="text-center text-sm text-gray-500">
          &copy; 2025 Nordic Freelance Collective. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
