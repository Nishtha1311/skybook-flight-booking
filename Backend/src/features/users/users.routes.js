import express from "express";
import UserController from "./users.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const userController = new UserController();

const userRouter = express.Router();

// Register
userRouter.post(
    "/register",
    userController.register.bind(userController)
);

// Login
userRouter.post(
    "/login",
    userController.login.bind(userController)
);

// Logout
userRouter.post(
    "/logout",
    userController.logout.bind(userController)
);

// Profile
userRouter.get(
    "/profile",
    jwtAuth,
    userController.getUserProfile.bind(userController)
);

// Update Profile
userRouter.put(
    "/profile",
    jwtAuth,
    userController.updateUserProfile.bind(userController)
);

// Upload Avatar
userRouter.post(
    "/profile/avatar",
    jwtAuth,
    upload.single("avatar"),
    userController.uploadAvatar.bind(userController)
);

export default userRouter;