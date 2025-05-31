import express from "express";
export const authRouter = express.Router();
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../Controllers/auth.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
authRouter.post("/signup", signup);
// authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/check-auth", verifyToken, checkAuth);
// authRouter.post("/logout");
