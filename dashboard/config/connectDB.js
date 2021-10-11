const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is successfully connected");
  } catch (error) {
    console.log("Database failed to connect", error);
  }
};
module.exports = connectDB;
