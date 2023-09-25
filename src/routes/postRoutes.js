import express from "express"
import { getPostByName } from "../controller/post.controller.js";

export const postRouter = express.Router();

// Get post by name 
postRouter.get("/post/search", getPostByName);

// TODO(namnh2) : implement APIs for posts and categories.
// Get list of posts belonging to specific category.
// postRouter.get("/categories/:categoryId", getListPostsOfCategories);

// Get all posts from blog.
// postRouter.get("/posts", getAllPosts);

// Get all categories.
// postRouter.get("/categories", getAllCategories);