require("dotenv").config();
const mongoose = require("mongoose");

// Debugging: Check if MONGO_URI is accessible
console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  
  if (!mongoURI) {
    console.error("❌ MONGO_URI is not defined in .env file.");
    process.exit(1); // Exit process with failure
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectDB();

module.exports = connectDB;
