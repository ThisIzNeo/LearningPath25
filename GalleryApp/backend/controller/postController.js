import mongoose from "mongoose";
import PostMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const found = mongoose.Types.ObjectId.isValid(_id);

    if (!found) {
      return res.status(404).send("No post with that id");
    }
    await postMessage.findByIdAndRemove(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
