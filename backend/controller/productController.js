const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const productInfo = await Product.find({});
    res.json(productInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productInfo = await Product.findById(req.params.id);
    res.json(productInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
