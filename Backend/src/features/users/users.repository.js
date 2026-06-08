import mongoose from "mongoose";
import { userSchema } from "./users.schema.js";

const userModel=new mongoose.model("User",userSchema);

class UserRepository{

    async register(userData){
        const newUser=new userModel(userData);
        return await newUser.save();
    }

    //Method to find a username by their name for login

    async findByUsername(name){
        const user=await userModel.findOne({name});
        return user;
    }

    //Method to find a user by their ID

    async findById(id){
        const user=await userModel.findById(id);
        return user;
    }

   //Method to find a user by Id and update Data

   async findByIdAndUpdate(userId,updateData){
    return await userModel.findByIdAndUpdate(userId,updateData,{new:true});
   }



}
export default UserRepository;