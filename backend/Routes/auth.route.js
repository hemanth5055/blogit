import express from "express";
export const authRouter = express.Router();
import upload from "../Utils/multer.config.js"
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../Controllers/auth.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
authRouter.post("/signup",upload.single("profileImage"), signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/check-auth", verifyToken, checkAuth);
// authRouter.post("/verify-email", verifyEmail);
