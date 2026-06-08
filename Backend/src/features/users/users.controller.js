import UserRepository from "./users.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }

    //POST/api/auth/register

    async register(req,res){
       try{
        const {name,password}=req.body;
        const hashedPasword=await bcrypt.hash(password,12);
        const userData = {
    name,
    password: hashedPasword
};
        const newUser=await this.userRepository.register(userData);
        return res.status(201).json({message:"User registered successfully",user:newUser.name});

       }catch(err){
        console.log(err);
        return res.status(500).json({error:"Failed to register user.Username might already exists"});
       }
    }


    //POST/api/auth/login

    async login(req,res){
        try{

            const {name,password}=req.body;
            const user=await this.userRepository.findByUsername(name);
            if(!user){
                return res.status(404).json({error:"Invalid username or password"});
            }

            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(401).json({error:"Invalid username or password"});
            }

            //Create and issue JWT Token

            const token=jwt.sign({userId:user._id,username:user.name},"2b336f89ce20b47f",{expiresIn:'1h'});

            //set token in cookie and sends a success response
            
            return res.status(200).json({message:"Login Successful",token});

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to login"});
        }
    }

    //POST/api/auth/logout

    async logout(req,res){
        try{
            res.clearCookie("token");
            
            res.status(200).json({message:"Logged out successfully"});

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to logout"});
        }
    }

    //GET/api/users/profile
    async getUserProfile(req,res){
        try{
            const user=await this.userRepository.findById(req.userId);
            if(!user){
                return res.status(404).json({error:"User not found"});
            }

            return res.status(200).json({username:user.name});

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to fetch user profile"});
        }
    }

    //POST/api/users/profile

    async updateUserProfile(req,res){
        try{
            const {updateData}=req.body;
            const {userId}=req.userId;
            const updatedProfile=await this.userRepository.findByIdAndUpdate(userId,updateData);
            if(!updatedProfile){
                return res.status(404).json({error:"User not found"});
            }

            return res.status(201).json({message:"User Profile updated successfully",user:updatedProfile.name});


        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to update user details"});
        }
    }

    //POST/api/users/profile/avatar

    async uploadAvatar(req,res){
        try{
            const userId=req.userId;
            //Assuming multer has stored the file in req.file.path
            const avatarPath=req.file.path;
            const updatedUser=await this.userRepository.findByIdAndUpdate(userId,{avatar:avatarPath});

            if(!updatedUser){
                return res.status(404).json({error:"User not found"});
            }

            res.status(200).json({message:"Avatar uploaded successfully", avatarUrl:avatarPath});

        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Failed to upload avatar"});
        }
    }

}

export default UserController;



    