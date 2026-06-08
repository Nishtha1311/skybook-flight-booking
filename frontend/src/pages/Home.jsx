import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-5xl font-bold text-blue-700">
          SkyBook ✈️
        </h1>

        <div className="flex gap-6">

          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Register
          </button>

        </div>

      </nav>

      {/* Hero Section */}

      <div className="flex flex-col items-center justify-center text-center mt-24 px-5">

        <h1 className="text-8xl font-extrabold text-blue-700 mb-8">
          Fly Beyond Limits ✈️
        </h1>

        <p className="text-2xl text-gray-700 max-w-3xl mb-12">
          Discover affordable domestic and international flights
          with comfort, luxury and seamless booking experience.
        </p>

        <button
          onClick={() => navigate("/flights")}
          className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-5 rounded-3xl text-2xl font-bold shadow-2xl transition duration-300"
        >
          Explore Flights
        </button>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-10 px-10 mt-28 pb-20">

        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Affordable Prices
          </h2>

          <p className="text-lg text-gray-600">
            Get the best flight deals with unbeatable pricing.
          </p>

        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Easy Booking
          </h2>

          <p className="text-lg text-gray-600">
            Book flights instantly with our seamless experience.
          </p>

        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Secure Payments
          </h2>

          <p className="text-lg text-gray-600">
            Your bookings and transactions are completely secure.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;