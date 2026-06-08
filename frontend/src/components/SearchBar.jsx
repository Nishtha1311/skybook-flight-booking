function SearchBar({
  departureCity,
  setDepartureCity,
  arrivalCity,
  setArrivalCity,
  flightClass,
  setFlightClass,
  searchFlights,
}) {

  return (

    <div className="bg-white p-8 rounded-3xl shadow-xl mb-10">

      <div className="grid grid-cols-4 gap-5">

        <input
          type="text"
          placeholder="Departure City"
          value={departureCity}
          onChange={(e) =>
            setDepartureCity(e.target.value)
          }
          className="p-4 border rounded-2xl outline-none"
        />

        <input
          type="text"
          placeholder="Arrival City"
          value={arrivalCity}
          onChange={(e) =>
            setArrivalCity(e.target.value)
          }
          className="p-4 border rounded-2xl outline-none"
        />

        <select
          value={flightClass}
          onChange={(e) =>
            setFlightClass(e.target.value)
          }
          className="p-4 border rounded-2xl outline-none"
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
          onClick={searchFlights}
          className="bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
        >
          Search Flights
        </button>

      </div>

    </div>

  );
}

export default SearchBar;