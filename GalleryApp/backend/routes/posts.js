import express from "express";
import { getPosts, createPost, deletePost } from "../controller/postController.js";

const router = express.Router();

router.get("/data", getPosts);
router.post("/create-post", createPost);
router.delete("/remove/:id", deletePost);

export default router;
