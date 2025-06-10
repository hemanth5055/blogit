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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
