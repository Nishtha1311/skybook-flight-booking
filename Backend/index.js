import dotenv from "dotenv";
dotenv.config();


import express from "express";

import connectToMongoDB from "./src/config/mongodb.js";

import userRouter from "./src/features/users/users.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import flightRouter from "./src/features/flight/flight.routes.js";
import bookingRouter from "./src/features/booking/booking.routes.js";
import cors from "cors";
import { ApplicationError } from "./src/error-handler/applicationError.js";



const app=express();
app.use(express.json());

app.use(cors());

app.use("/api/user",userRouter);
app.use("/api/flights",flightRouter);
app.use("/api/bookings",bookingRouter);



app.use((err,req,res,next)=>{
    console.log(err);

    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    res.status(503).send("Something went wrong.Please try again later");
});


export default app;