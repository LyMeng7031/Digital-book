import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database"; // your custom DB connection
import Router from "@/routes/index"; // your main router (combined routes)
import authRoutes from "./routes/authRoutes"; // add auth routes

dotenv.config();

const app = express();

// Enable JSON and URL-encoded body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/v1", Router); // your main routes
app.use("/api/v1/auth", authRoutes); // auth register & login routes

// ✅ Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
