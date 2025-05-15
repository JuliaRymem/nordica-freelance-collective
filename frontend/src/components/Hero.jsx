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
      <h1
  className="text-2xl md:text-4xl font-bold leading-snug text-white text-center mb-6"
  style={{ textShadow: "5px 3px 10px rgba(0,0,0,0.7)" }}
>
  NORDIC <br /> FREELANCE COLLECTIVE
</h1>

      {/* Knapp */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-6 py-3 rounded-full border border-black bg-white hover:bg-amber-50 text-black font-semibold">
          LOG IN
        </button>
        <button className="px-6 py-3 rounded-full border border-black bg-black hover:bg-black-200 text-white font-semibold">
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


      {/* Trusted Freelancers-sektion */}
      <div className="bg-white rounded-xl p-4 max-w-xs mx-auto flex items-center justify-between border border-black">
        <div>
          <p className="text-black text-sm font-light">Trusted Freelancers</p>
        </div>
        <div className="flex space-x-1">
          <span className="text-yellow-500 text-sm">⭐️⭐️⭐️⭐️⭐️</span>
        </div>
        <div className="flex -space-x-3">
          <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-white" />
          <div className="w-6 h-6 bg-blue-300 rounded-full border-2 border-white" />
          <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-white" />
          <div className="w-6 h-6 bg-purple-300 rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
}

export default Hero;