import { bookingSchema } from "./booking.schema.js";
import mongoose from "mongoose";

const bookingModel=mongoose.model("booking",bookingSchema);

class bookingRepository{

    //Create Booking 

    async createBooking(bookingData){
        const booking=new bookingModel(bookingData);
        return booking.save();
    }

    //Get Booking Details

    async getBookingDetails(id){
        const details=await  bookingModel.findById(id);
        return details;
    }

    //Cancelling booking

    async cancelBooking(id){
       return await bookingModel.findByIdAndDelete(id);
       
    }

    async getAllBookings() {
    return await bookingModel.find();
}

}


export default bookingRepository;