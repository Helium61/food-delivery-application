import mongoose, { mongo } from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://heliumera40:R-689Xp$dEMMiNC@cluster0.puxxl.mongodb.net/?FoodDeliveringApp')

}
