import { getDB } from "../../config/mongodb.js";
import FlightRepository from "./flight.repository.js";

export class FlightController{
    constructor(){
        this.flightRepository=new FlightRepository();
    }

    //Create a new flight(admin only)

    async createFlight(req,res){
       try{
        const newflight=await this.flightRepository.create(req.body);
        return res.status(201).json(newflight);

       }catch(err){
        console.log(err);
        return res.status(500).json({error:"Failed to create a new flight"});
       }

}

//Search for flights(public)
async searchFlights(req, res) {

    try {

        const {
            departureCity,
            arrivalCity,
            flightClass
        } = req.query;

        const searchCriteria = {};

        if (departureCity) {
            searchCriteria.departureCity =
                departureCity;
        }

        if (arrivalCity) {
            searchCriteria.arrivalCity =
                arrivalCity;
        }

        if (flightClass) {
            searchCriteria.flightClass =
                flightClass;
        }

        const flights =
            await this.flightRepository.findFlight(
                searchCriteria
            );

        return res.status(200).json(flights);

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            error: "Failed to search flights"
        });
    }
}

//Get details for a single flight

async getFlightDetails(req,res){
    try{

        const {flightId}=req.query;
        const details=await this.flightRepository.findFlightById(flightId);
        return res.status(200).json(details);

    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Failed to retrieve flight details"});
    }

}

//Update flight details

async updateFlightDetails(req, res) {

    try {

        const flightId = req.params.id;

        const updateData = req.body;

        const updatedFlight =
            await this.flightRepository.findFlightAndUpdate(
                flightId,
                updateData
            );

        if (!updatedFlight) {

            return res.status(400).json({
                error: "Flight not found"
            });
        }

        return res.status(200).json(updatedFlight);

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            error: "Failed to update flight"
        });
    }
}

//Delete flight by id

async deleteFlight(req,res){
    try{
        const deletedFlight =
    await this.flightRepository.deleteFlight(
        req.params.id
    );
        if(!deletedFlight){
            return res.status(404).json({error:"Flight not found"});
        }


        return res.status(200).json({message:"Flight deleted successfully"});

    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Failed to delete flight"});
    }
}

}