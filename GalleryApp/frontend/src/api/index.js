import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export const fetchGallery = () => API.get('/data');

export const createPost = (newPost) => API.post('/create-post', newPost);

export const deletePost = (id) => API.delete(`/remove/${id}`);

export const likePost = (id) => API.patch(`/${id}`);
