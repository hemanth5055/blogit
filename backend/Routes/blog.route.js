import express from "express";
import { add, all, userBlogs,reqBlog } from "../Controllers/blog.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
export const blogRouter = express.Router();
blogRouter.post("/add", verifyToken, add);
blogRouter.get("/all", verifyToken, all);
blogRouter.get("/userSpecific", verifyToken, userBlogs);
blogRouter.get("/blogSpecific/:blogId", verifyToken, reqBlog);
