import express from "express";
import BookingController from "./booking.controller.js";

const bookingController = new BookingController();

const bookingRouter = express.Router();

bookingRouter.post(
  "/",
  bookingController.createBooking.bind(bookingController)
);

bookingRouter.get(
  "/",
  bookingController.getAllBookings.bind(bookingController)
);

bookingRouter.get(
  "/:id",
  bookingController.getBookingDetails.bind(bookingController)
);

bookingRouter.delete(
  "/:id/cancel",
  bookingController.cancelBooking.bind(bookingController)
);

export default bookingRouter;