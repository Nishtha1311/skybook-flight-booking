import mongoose from "mongoose";

export const bookingSchema = new mongoose.Schema({

    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "flight",
        required: true
    },

    passengerList: {
        type: [{
            name: { type: String, required: true },
            age: { type: Number, required: true }
        }],
        required: true
    }

});