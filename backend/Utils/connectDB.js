import mongoose from "mongoose";
export const connecttoDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("Connected to Database"));
  } catch (error) {
    console.log("Failed to connect to Database ", error.message);
  }
};
