import logo from "../assets/logo.jpg";

function Hero() {
  return (
    <div className="min-h-screen bg-[#b3c4c5] text-white flex flex-col items-center justify-center px-4 sm:px-8 py-12">
      {/* Logotyp */}
      <img
        src={logo}
        alt="Nordica Freelance Collective"
        className="h-24 rounded-xl shadow-lg mb-6"
      />

      {/* Hero-text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        Nordica Freelance Collective
      </h1>

      {/* Knappar */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        <button className="px-6 py-3 bg-white text-[#b3c4c5] rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
          Login
        </button>
        <button className="px-6 py-3 bg-white text-[#b3c4c5] rounded-lg text-sm sm:text-base hover:bg-gray-100 transition">
          Join us
        </button>
      </div>

    </div>
  );
}

export default Hero;
