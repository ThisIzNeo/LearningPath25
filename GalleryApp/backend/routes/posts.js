import express from "express";
import { getPosts, createPost, deletePost, likePost } from "../controller/postController.js";

const router = express.Router();

router.get("/data", getPosts);
router.post("/create-post", createPost);
router.delete("/remove/:id", deletePost);
router.patch("/:id", likePost)

export default router;
