function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/15 backdrop-blur-lg p-12 rounded-3xl shadow-2xl w-[950px] border border-white/20">

        <h1 className="text-7xl font-extrabold text-white mb-6 leading-tight">
          Discover <br />
          Your Next Journey
        </h1>

        <p className="text-white text-xl mb-10">
          Book flights at the best prices with comfort and convenience
        </p>

        <div className="grid grid-cols-4 gap-5">

          <input
            type="text"
            placeholder="From"
            className="p-4 rounded-2xl bg-white text-black outline-none shadow-md"
          />

          <input
            type="text"
            placeholder="To"
            className="p-4 rounded-2xl bg-white text-black outline-none shadow-md"
          />

          <input
            type="date"
            className="p-4 rounded-2xl bg-white text-black outline-none shadow-md"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Search Flights
          </button>

        </div>

      </div>
    </div>
  );
}

export default HeroSection;