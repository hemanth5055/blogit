import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connecttoDB } from "./Utils/connectDB.js";
import { authRouter } from "./Routes/auth.route.js";
import { blogRouter } from "./Routes/blog.route.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: `${process.env.FRONTEND}`,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json()); //to allow json data in requests
app.use(cookieParser()); // to allow cookies

app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.get("/", (req, res) => {
  return res.send("Server Working ");
});

app.listen(process.env.PORT, () => {
  connecttoDB();
  console.log("Server Started at port 8000");
});
