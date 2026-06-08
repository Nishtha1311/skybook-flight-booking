import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function Profile() {

  const [bookings, setBookings] = useState([]);

  const username = localStorage.getItem("username");

  const fetchBookings = async () => {

    try {

      const response = await API.get("/bookings");

      setBookings(response.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (

    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-5">

        <h1 className="text-6xl font-bold text-center text-blue-600 mb-12">
          My Profile
        </h1>

        {/* Profile Card */}

        <div className="bg-white shadow-2xl rounded-3xl p-10 mb-10">

          <div className="flex items-center gap-8">

            {/* Avatar */}

            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">

              {username?.charAt(0).toUpperCase()}

            </div>

            {/* User Details */}

            <div>

              <h2 className="text-4xl font-bold text-gray-800 mb-3">
                {username}
              </h2>

              <p className="text-2xl text-gray-600">
                Welcome to SkyBook ✈️
              </p>

            </div>

          </div>

        </div>

        {/* Stats Section */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white shadow-xl rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-5">
              Total Bookings
            </h2>

            <h3 className="text-6xl font-bold text-gray-800">
              {bookings.length}
            </h3>

          </div>

          <div className="bg-white shadow-xl rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-5">
              Account Status
            </h2>

            <h3 className="text-4xl font-bold text-green-600">
              Active
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;