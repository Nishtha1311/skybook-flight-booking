import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import { useNavigate } from "react-router-dom";

function Flights() {

  const [flights, setFlights] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedFlight, setSelectedFlight] =
    useState(null);

  const [departureCity, setDepartureCity] =
    useState("");

  const [arrivalCity, setArrivalCity] =
    useState("");

  const [flightClass, setFlightClass] =
    useState("");

  const navigate = useNavigate();

  // Fetch Flights

  const fetchFlights = async () => {

    try {

      setLoading(true);

      let query = "";

      if (departureCity) {
        query += `departureCity=${departureCity}&`;
      }

      if (arrivalCity) {
        query += `arrivalCity=${arrivalCity}&`;
      }

      if (flightClass) {
        query += `flightClass=${flightClass}`;
      }

      const response =
        await API.get(`/flights?${query}`);

      setFlights(response.data);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);
    }
  };

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      navigate("/login");

      return;
    }

    fetchFlights();

  }, []);

  return (

    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5">

        {/* Heading */}

        <h1 className="text-6xl font-bold text-center text-blue-600 mb-12">
          Available Flights
        </h1>

        {/* Search Section */}

        <div className="bg-white shadow-xl rounded-3xl p-8 mb-12 flex flex-col md:flex-row gap-5">

          <input
            type="text"
            placeholder="Departure City"
            value={departureCity}
            onChange={(e) =>
              setDepartureCity(e.target.value)
            }
            className="flex-1 border p-5 rounded-2xl text-lg"
          />

          <input
            type="text"
            placeholder="Arrival City"
            value={arrivalCity}
            onChange={(e) =>
              setArrivalCity(e.target.value)
            }
            className="flex-1 border p-5 rounded-2xl text-lg"
          />

          <select
            value={flightClass}
            onChange={(e) =>
              setFlightClass(e.target.value)
            }
            className="flex-1 border p-5 rounded-2xl text-lg"
          >

            <option value="">
              Select Class
            </option>

            <option value="Economy">
              Economy
            </option>

            <option value="Business">
              Business
            </option>

          </select>

          <button
            onClick={fetchFlights}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold"
          >
            Search Flights
          </button>

        </div>

        {/* Loading */}

        {loading ? (

          <div className="flex justify-center items-center py-20">

            <h1 className="text-4xl font-bold text-blue-600 animate-pulse">
              Loading Flights...
            </h1>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {flights.length > 0 ? (

              flights.map((flight) => (

                <div
                  key={flight._id}
                  className="bg-white rounded-3xl shadow-lg p-7 hover:scale-105 hover:shadow-2xl transition duration-300"
                >

                  {/* Flight Image */}

                  <img
                    src={flight.image}
                    alt={flight.airline}
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="w-full h-56 object-cover rounded-2xl mb-5 shadow-md"
                  />

                  {/* Flight Details */}

                  <h2 className="text-4xl font-bold mb-4 text-gray-800">
                    {flight.airline}
                  </h2>

                  <p className="text-2xl mb-5 text-gray-700">
                    {flight.departureCity}
                    {" "}
                    →
                    {" "}
                    {flight.arrivalCity}
                  </p>

                  <div className="space-y-2 text-lg text-gray-600">

                    <p>
                      Flight No:
                      {" "}
                      {flight.flightNumber}
                    </p>

                    <p>
                      Departure:
                      {" "}
                      {new Date(
                        flight.departureDate
                      ).toLocaleString()}
                    </p>

                    <p>
                      Arrival:
                      {" "}
                      {new Date(
                        flight.arrivalDate
                      ).toLocaleString()}
                    </p>

                    <p>
                      Seats:
                      {" "}
                      {flight.availableSeats}
                    </p>

                    <p>
                      Class:
                      {" "}
                      {flight.flightClass}
                    </p>

                  </div>

                  {/* Price */}

                  <h3 className="text-5xl font-bold text-blue-600 my-6">
                    ₹{flight.price}
                  </h3>

                  {/* Buttons */}

                  {flight.availableSeats > 0 ? (

                    <button
                      onClick={() =>
                        setSelectedFlight(flight)
                      }
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold"
                    >
                      Book Now
                    </button>

                  ) : (

                    <button
                      disabled
                      className="w-full bg-gray-400 text-white py-4 rounded-2xl text-xl font-semibold cursor-not-allowed"
                    >
                      Sold Out
                    </button>

                  )}

                </div>

              ))

            ) : (

              <p className="text-center text-3xl text-gray-500 col-span-full">
                No Flights Available
              </p>

            )}

          </div>

        )}

      </div>

      {/* Booking Modal */}

      {selectedFlight && (

        <BookingModal
          flight={selectedFlight}
          closeModal={() =>
            setSelectedFlight(null)
          }
        />

      )}

    </div>
  );
}

export default Flights;