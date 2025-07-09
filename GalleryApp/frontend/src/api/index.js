import axios from "axios";

const API = axios.create({ baseURL: 'https://gallexter.onrender.com/api' });

export const fetchGallery = () => API.get('/data');

export const createPost = (newPost) => API.post('/create-post', newPost);

export const deletePost = (id) => API.delete(`/remove/${id}`);
