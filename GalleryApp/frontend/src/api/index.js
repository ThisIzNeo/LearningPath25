import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5239/api' });

export const fetchGallery = () => API.get('/data');

export const createPost = (newPost) => API.post('/create-post', newPost);
