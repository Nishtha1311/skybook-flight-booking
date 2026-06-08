import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingModal({ flight, closeModal }) {

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleBooking = (e) => {

    e.preventDefault();

    const passengerList = [
      {
        name,
        age,
      },
    ];

    navigate("/payment", {
      state: {
        flight,
        passengerList,
      },
    });

    closeModal();
  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white p-8 rounded-3xl w-[400px]">

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Book Flight
        </h2>

        <input
          type="text"
          placeholder="Passenger Name"
          className="w-full border p-4 rounded-xl mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Passenger Age"
          className="w-full border p-4 rounded-xl mb-6"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
        >
          Proceed To Payment
        </button>

        <button
          onClick={closeModal}
          className="w-full mt-3 border py-3 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default BookingModal;