import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdName: {
      type: String,
      required: true,
    },
    createdId: {
      type: String,
      required: true,
    },
    dateString: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("blog", blogSchema);
