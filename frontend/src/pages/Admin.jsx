
import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

function Admin() {

  const [flights, setFlights] = useState([]);

  const [editingFlight, setEditingFlight] =
    useState(null);

  const [formData, setFormData] = useState({
    flightNumber: "",
    airline: "",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    arrivalDate: "",
    availableSeats: "",
    price: "",
    flightClass: "",
    image: "",
  });

  // Fetch Flights

  const fetchFlights = async () => {

    try {

      const response =
        await API.get("/flights");

      setFlights(response.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {

    fetchFlights();

  }, []);

  // Handle Form Change

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Flight

  const addFlight = async (e) => {

    e.preventDefault();

    try {

      await API.post("/flights", formData);

      toast.success("Flight Added ✈️");

      fetchFlights();

      setFormData({
        flightNumber: "",
        airline: "",
        departureCity: "",
        arrivalCity: "",
        departureDate: "",
        arrivalDate: "",
        availableSeats: "",
        price: "",
        flightClass: "",
        image: "",
      });

    } catch (err) {

      console.log(err);

      toast.error("Failed to add flight");
    }
  };

  // Delete Flight

  const deleteFlight = async (id) => {

    try {

      await API.delete(`/flights/${id}`);

      toast.success("Flight Deleted");

      fetchFlights();

    } catch (err) {

      console.log(err);

      toast.error("Delete Failed");
    }
  };

  // Update Flight

  const updateFlight = async (e) => {

    e.preventDefault();

    try {

      await API.put(
        `/flights/${editingFlight._id}`,
        editingFlight
      );

      toast.success("Flight Updated ✈️");

      setEditingFlight(null);

      fetchFlights();

    } catch (err) {

      console.log(err);

      toast.error("Update Failed");
    }
  };

  return (

    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5">

        {/* Heading */}

        <h1 className="text-6xl font-bold text-center text-blue-600 mb-12">
          Admin Dashboard
        </h1>

        {/* Add Flight Form */}

        <form
          onSubmit={addFlight}
          className="bg-white p-10 rounded-3xl shadow-xl grid md:grid-cols-2 gap-6 mb-14"
        >

          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            value={formData.flightNumber}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="airline"
            placeholder="Airline"
            value={formData.airline}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="departureCity"
            placeholder="Departure City"
            value={formData.departureCity}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="arrivalCity"
            placeholder="Arrival City"
            value={formData.arrivalCity}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="datetime-local"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="datetime-local"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="number"
            name="availableSeats"
            placeholder="Available Seats"
            value={formData.availableSeats}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <select
            name="flightClass"
            value={formData.flightClass}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
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
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-semibold"
          >
            Add Flight
          </button>

        </form>

        {/* Edit Flight Modal */}

        {editingFlight && (

          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-10 rounded-3xl w-full max-w-2xl">

              <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
                Update Flight
              </h2>

              <form
                onSubmit={updateFlight}
                className="grid md:grid-cols-2 gap-5"
              >

                <input
                  type="text"
                  value={editingFlight.airline}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      airline: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  value={editingFlight.image}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      image: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  value={editingFlight.departureCity}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      departureCity: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  value={editingFlight.arrivalCity}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      arrivalCity: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="number"
                  value={editingFlight.price}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      price: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="number"
                  value={editingFlight.availableSeats}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      availableSeats: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <select
                  value={editingFlight.flightClass}
                  onChange={(e) =>
                    setEditingFlight({
                      ...editingFlight,
                      flightClass: e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                >

                  <option value="Economy">
                    Economy
                  </option>

                  <option value="Business">
                    Business
                  </option>

                </select>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl"
                >
                  Update Flight
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setEditingFlight(null)
                  }
                  className="bg-gray-400 hover:bg-gray-500 text-white py-4 rounded-2xl"
                >
                  Cancel
                </button>

              </form>

            </div>

          </div>

        )}

        {/* Flights Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {flights.map((flight) => (

            <div
              key={flight._id}
              className="bg-white p-7 rounded-3xl shadow-lg flex flex-col hover:shadow-2xl transition duration-300"
            >

              {/* Flight Image */}

              <img
                src={flight.image}
                alt={flight.airline}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80";
                }}
                className="w-full h-52 object-cover rounded-2xl mb-5"
              />

              {/* Flight Details */}

              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {flight.airline}
              </h2>

              <p className="text-2xl mb-5 text-gray-700">
                {flight.departureCity} →
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

              <h3 className="text-5xl font-bold text-blue-600 my-6">
                ₹{flight.price}
              </h3>

              {/* Buttons */}

              <button
                onClick={() =>
                  setEditingFlight(flight)
                }
                className="w-full mb-3 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-2xl"
              >
                Edit Flight
              </button>

              <button
                onClick={() =>
                  deleteFlight(flight._id)
                }
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl"
              >
                Delete Flight
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Admin;