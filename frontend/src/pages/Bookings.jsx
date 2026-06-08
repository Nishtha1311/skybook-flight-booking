import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  const navigate=useNavigate();




  const fetchBookings = async () => {

    try {

      const response = await API.get("/bookings");

      setBookings(response.data);

    } catch (err) {
      console.log(err);
    }
  };

  const cancelBooking = async (id) => {

    try {

      await API.delete(`/bookings/${id}/cancel`);

      alert("Booking Cancelled");

      fetchBookings();

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  fetchBookings();

}, []);

  return (

    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5">

        <h1 className="text-6xl font-bold text-center text-blue-600 mb-12">
          My Bookings
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {bookings.length > 0 ? (

            bookings.map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-3xl shadow-lg p-7"
              >

                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  Booking Details
                </h2>

                <p className="text-lg mb-2">
                  Flight ID:
                  <span className="font-semibold">
                    {" "}
                    {booking.flightId}
                  </span>
                </p>

                <div className="mt-4">

                  <h3 className="text-2xl font-semibold mb-3">
                    Passengers
                  </h3>

                  {booking.passengerList.map((passenger, index) => (

                    <div
                      key={index}
                      className="bg-gray-100 p-4 rounded-xl mb-3"
                    >

                      <p>Name: {passenger.name}</p>

                      <p>Age: {passenger.age}</p>

                    </div>

                  ))}

                </div>

                <button
                  onClick={() => cancelBooking(booking._id)}
                  className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl text-lg font-semibold"
                >
                  Cancel Booking
                </button>

              </div>

            ))

          ) : (

            <p className="text-3xl text-center text-gray-500 col-span-full">
              No Bookings Found
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Bookings;