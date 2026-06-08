import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const username = localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("username");

   toast.success("Logged out successfully");

    navigate("/login");
  };

  return (

    <nav className="bg-white shadow-lg px-8 py-5 flex justify-between items-center">

      {/* Logo */}

      <h1 className="text-5xl font-bold text-blue-600">
        SkyBook
      </h1>

      {/* Navigation Links */}

      <div className="flex gap-10 items-center text-2xl font-medium">

        <Link
          to="/"
          className="hover:text-blue-600 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/flights"
          className="hover:text-blue-600 transition duration-300"
        >
          Flights
        </Link>

        <Link
          to="/bookings"
          className="hover:text-blue-600 transition duration-300"
        >
          Bookings
        </Link>

        <Link
  to="/profile"
  className="hover:text-blue-600 transition duration-300"
>
  Profile
</Link>

        {/* If Logged In */}

        {token ? (

          <div className="flex items-center gap-5">

            <p className="text-blue-600 font-semibold text-xl">
              Hi, {username}
            </p>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl transition duration-300"
            >
              Logout
            </button>

          </div>

        ) : (

          /* If Not Logged In */

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition duration-300"
          >
            Login
          </Link>

        )}

      </div>

    </nav>
  );
}

export default Navbar;