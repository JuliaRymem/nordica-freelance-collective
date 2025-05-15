import logo from "../assets/logo.jpg";

function Hero() {
  return (
    <div className="min-h-screen bg-[#b3c4c5] text-white px-6 py-4 font-sans">
      {/* Top Bar */}
      <div className="flex items-center mb-1">
        <img src={logo} alt="Logo" className="h-25 rounded-full" />
      </div>

      {/* Hero-text */}
      <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        Nordica <br /> Freelance Collective
      </h1>



{/* Sökruta */}
<div className="flex justify-center">
  <input
    type="text"
    placeholder="Search for any services..."
    className="px-6 py-3 w-full max-w-md rounded-lg border border-black text-[#b3c4c5] placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b3c4c5]"
  />
  <button className="ml-2 px-6 py-3 bg-white text-[#b3c4c5] rounded-lg text-sm hover:bg-gray-100 transition border border-black">
    Search
  </button>
</div>


    </div>
  );
}

export default Hero;
