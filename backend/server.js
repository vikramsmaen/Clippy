import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import clipRoutes from "./routes/clip.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to use json data in body of request

app.use("/api/clips", clipRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at http://localhost:5000");
});
