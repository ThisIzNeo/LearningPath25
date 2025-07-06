import express from "express";
import { getPosts, createPost } from "../controller/postController.js";

const router = express.Router();

router.get("/data", getPosts);
router.post("/create-post", createPost);

export default router;
