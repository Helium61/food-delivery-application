import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

// Set up multer for file uploads (if necessary)
const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage }).single("file"); // Change "file" to your form field name if needed

// Create an instance of express router
const foodRouter = express.Router();

// Post route for adding food with multer middleware
foodRouter.post("/add", upload, addFood); // Use upload middleware here
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
