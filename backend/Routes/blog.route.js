import express from "express";
import { add, all, userBlogs,reqBlog } from "../Controllers/blog.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
export const blogRouter = express.Router();
blogRouter.post("/add", verifyToken, add);
blogRouter.post("/all", verifyToken, all);
blogRouter.post("/userSpecific", verifyToken, userBlogs);
blogRouter.post("/blogSpecific", verifyToken, reqBlog);
