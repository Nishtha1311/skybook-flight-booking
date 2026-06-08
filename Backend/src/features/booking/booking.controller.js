import bookingRepository from "./booking.repository.js";
import FlightRepository from "../flight/flight.repository.js";

class BookingController{
    constructor(){
        this.bookingrepository=new bookingRepository();
        this.flightRepository=new FlightRepository();

    }

    async createBooking(req,res){
        try{
            const{flightId,passengerList}=req.body;

            //Get the flight to check flight availiability

            const flight=await this.flightRepository.findFlightById(flightId);

            if(!flight || flight.availableSeats<=0){
                return res.status(400).json({error:"No flights available for this flight"});
            }


            const bookingData={flightId,passengerList};
            const booking=await this.bookingrepository.createBooking(bookingData);

            flight.availableSeats-=passengerList.length;  //assuming passengerList is an array
            await flight.save();
            return res.status(201).json(booking);

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to create Booking"});
        }
    }

    async getBookingDetails(req,res){
        try{
            const id=req.params.id;
            const details=await this.bookingrepository.getBookingDetails(id);
            return res.status(200).json(details);


        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to fetch details"});
        }
    }

    async getAllBookings(req, res) {

    try {

        const bookings =
            await this.bookingrepository.getAllBookings();

        return res.status(200).json(bookings);

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            error: "Failed to fetch bookings"
        });
    }
}

    async cancelBooking(req,res){
        try{
            const id=req.params.id;
           const cancel = await this.bookingrepository.cancelBooking(id);
            if(!cancel){
                return res.status(404).json({message:"No booking found for this ID"});
            }
            return res.status(200).json({message:"Booking Cancelled successfully"});

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to cancel booking"});
        }

    }
}

export default BookingController;