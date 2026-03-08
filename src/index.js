import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "./contants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB Atlas Successfully Connnected");
  } catch (error) {
    console.error("MONGODB Connection Failed: ", error);
    process.exit(1);
  }
};
connectDB();
