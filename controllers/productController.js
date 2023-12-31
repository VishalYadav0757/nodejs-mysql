const db = require("../models");

// Create main model \\
const Product = db.products;

// Create product \\
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);

  res.status(200).send(product);
};

// Get all products \\
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});

  res.status(200).send(products);
};

// Get one product \\
const getOneProduct = async (req, res) => {
  let id = req.params.id;

  let product = await Product.findOne({ where: { id: id } });

  res.status(200).send(product);
};

// Update product \\
const updateProduct = async (req, res) => {
  let id = req.params.id;

  const product = await Product.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

// Get published products \\
const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });

  res.status(200).send(products);
};

// Delete product \\
const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await Product.destroy({ where: { id: id } });

  res.status(200).send("Product Deleted !!");
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  getPublishedProducts,
  deleteProduct,
};
