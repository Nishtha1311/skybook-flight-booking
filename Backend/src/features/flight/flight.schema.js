import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({

    flightNumber: {
        type: String,
        required: true,
    },

    airline: {
        type: String,
        required: true,
    },

    departureCity: {
        type: String,
        required: true,
    },

    arrivalCity: {
        type: String,
        required: true,
    },

    departureDate: {
        type: Date,
        required: true,
    },

    arrivalDate: {
        type: Date,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    availableSeats: {
        type: Number,
        required: true,
    },

    flightClass: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

});

export const FlightModel = mongoose.model(
    "Flight",
    flightSchema
);