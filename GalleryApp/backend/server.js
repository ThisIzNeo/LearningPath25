import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// ---
import dotenv from "dotenv"
dotenv.config();

// IMPORTING ROUTES
import postRouter from './routes/posts.js';

const PORT = process.env.PORT || 5300;
const app = express();

// Init libraries
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// INITI ROUTES
app.use('/api', postRouter)

// SERVER STARTING...
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Listening on: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });