import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import toast from "react-hot-toast";

function Payment() {

  const location = useLocation();

  const navigate = useNavigate();

  const { flight, passengerList } = location.state;

  const [cardNumber, setCardNumber] = useState("");

  const [expiry, setExpiry] = useState("");

  const [cvv, setCvv] = useState("");

  const handlePayment = async (e) => {

    e.preventDefault();

    try {

      await API.post("/bookings", {
        flightId: flight._id,
        passengerList,
      });

      toast.success("Payment Successful ✈️");

      navigate("/bookings");

    } catch (err) {

      console.log(err);

      toast.error("Payment Failed");
    }
  };

  return (

    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-5">

        <div className="bg-white shadow-2xl rounded-3xl p-10">

          <h1 className="text-5xl font-bold text-center text-blue-600 mb-10">
            Payment
          </h1>

          {/* Flight Details */}

          <div className="bg-blue-50 p-6 rounded-2xl mb-10">

            <h2 className="text-3xl font-bold mb-4">
              {flight.airline}
            </h2>

            <p className="text-xl">
              {flight.departureCity} → {flight.arrivalCity}
            </p>

            <p className="text-xl mt-2">
              Total Passengers: {passengerList.length}
            </p>

            <h3 className="text-4xl font-bold text-blue-600 mt-5">
              ₹{flight.price * passengerList.length}
            </h3>

          </div>

          {/* Payment Form */}

          <form
            onSubmit={handlePayment}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border p-5 rounded-2xl text-xl"
              required
            />

            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="border p-5 rounded-2xl text-xl"
                required
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border p-5 rounded-2xl text-xl"
                required
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-2xl font-semibold"
            >
              Pay Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Payment;