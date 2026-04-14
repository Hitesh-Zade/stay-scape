import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("⚡ Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    isConnected = db.connections[0].readyState === 1;

  } catch (error) {
    console.log("❌ DB Error:", error);
  }
};