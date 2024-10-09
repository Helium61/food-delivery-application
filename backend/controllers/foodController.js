import foodModel from "../models/foodModels.js";

// Add food item with file handling
const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
        return res.status(400).json({
            success: false,
            message: "All fields are required (name, description, price, category)",
        });
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
        return res.status(400).json({
            success: false,
            message: "Price must be a number",
        });
    }

    const food = new foodModel({
        name,
        description,
        price: parsedPrice,
        category,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching food list" });
    }
};
//remove Food Items
const removeFood=async(req,res)=>{
     try {
        const food=await foodModel.findById(req.body.id);
       
        await  foodModel.findByIdAndDelete(req.body.id);
        res .json({success:true,message:"Food Removed"})
     } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
     }

}

export { addFood, listFood,removeFood };
