import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import fs from "fs";
import events from "events";
import { fileURLToPath } from 'url';

// Avoid memory leak warnings by increasing default max listeners
events.EventEmitter.defaultMaxListeners = 15;

// Correct MongoDB URI with URL-encoded special characters
const MONGO_URI = 'mongodb+srv://heliumera40:R-689Xp%24dEMMiNC@cluster0.puxxl.mongodb.net/FoodDeliveringApp?retryWrites=true&w=majority';

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Database connection function
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
    }
};

// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve static files from the uploads directory

// Connect to the database
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);

// Sample route for testing
app.get("/", (req, res) => {
    res.send("Hello, I am from the Backend");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is started on http://localhost:${port}`);
});
