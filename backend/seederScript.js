require("dotenv").config();

const productData = require("./data/Products");
const Product = require("./models/Product");
const connectDB = require("./config/db");
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);

    console.log("Data Import Success");
  } catch (err) {
    console.error("Error with Data import");
    process.exit(1);
  }
};

importData();