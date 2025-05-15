import logo from "../assets/logo.jpg"; 
import { Menu, Search, Mic, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="min-h-screen bg-[#b3c4c5] text-white px-5 py-9 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-2">
        <img src={logo} alt="Logo" className="h-30 rounded-full" />
        <Menu className="text-black h-10 w-15" />
      </div>

      {/* Hero Text */}
      <div className="text-center mb-9">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-white">
          NORDIC <br /> FREELANCE COLLECTIVE
        </h1>
      </div>

      {/* Knapp */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-6 py-3 rounded-full border border-black bg-white text-black font-semibold">
          LOG IN
        </button>
        <button className="px-6 py-3 rounded-full border border-black bg-black text-white font-semibold">
          JOIN US
        </button>
      </div>

      {/* Sökruta */}
      <div className="flex justify-center items-center bg-white rounded-full px-4 py-2 border border-black mb-4 w-full max-w-md mx-auto">
        <Search className="text-black mr-2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for any services..."
          className="flex-grow text-black bg-transparent outline-none placeholder-gray-500"
        />
        <Mic className="text-black w-5 h-5 mx-2" />
        <ArrowRight className="text-black w-5 h-5" />
      </div>

    </div>
  );
}

export default Hero;