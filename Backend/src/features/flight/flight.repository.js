
import { FlightModel } from "./flight.schema.js";

class FlightRepository {

    async create(flightData) {

        const flight = new FlightModel(flightData);

        return await flight.save();
    }

    async findFlight(searchCriteria) {

        return await FlightModel.find(searchCriteria);
    }

    async findFlightById(id) {

        return await FlightModel.findById(id);
    }

    // Update flight details
    async findFlightAndUpdate(id, updateData) {

        return await FlightModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );
    }

    // Delete flight
    async deleteFlight(id) {

        return await FlightModel.findByIdAndDelete(id);
    }

    // Pagination and sorting
    async findWithPagination(
        searchCriteria,
        page,
        limit,
        sortOptions
    ) {

        const skip = (page - 1) * limit;

        return await FlightModel.find(searchCriteria)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
    }

    // Count flights
    async countFlights(searchCriteria) {

        return await FlightModel.countDocuments(searchCriteria);
    }
}

export default FlightRepository;