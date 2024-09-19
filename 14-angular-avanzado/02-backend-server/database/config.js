const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("db working");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to Mongo");
  }
};

module.exports = {
  dbConnection,
};
