import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connecttoDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("Connected to Database"));
  } catch (error) {
    console.log("Failed to connect to Database ", error.message);
  }
};
