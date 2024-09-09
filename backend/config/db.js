import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in connecting Database: ${error.message}`);
    process.exit(1); // Process code 1 means exit early
  }
};
