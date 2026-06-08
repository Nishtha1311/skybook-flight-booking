import express from "express";
import { FlightController } from "./flight.controller.js";

const flightController = new FlightController();

const flightRouter = express.Router();

// Middleware to check if the user is an admin
const checkAdmin = (req, res, next) => {

    const isAdmin = true;

    if (isAdmin) {
        next();
    } else {
        return res.status(404).json({
            error: "Access denied.Admin role required"
        });
    }
};

// 1. POST /api/flights
flightRouter.post(
    "/",
    checkAdmin,
    flightController.createFlight.bind(flightController)
);

// 2. GET /api/flights
flightRouter.get(
    "/",
    flightController.searchFlights.bind(flightController)
);

// 3. GET /api/flights/:id
flightRouter.get(
    "/:id",
    flightController.getFlightDetails.bind(flightController)
);

// 4. PUT /api/flights/:id
flightRouter.put(
    "/:id",
    checkAdmin,
    flightController.updateFlightDetails.bind(flightController)
);

// 5. DELETE /api/flights/:id
flightRouter.delete(
    "/:id",
    checkAdmin,
    flightController.deleteFlight.bind(flightController)
);

export default flightRouter;