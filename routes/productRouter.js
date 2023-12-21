const productController = require("../controllers/productController");
const router = require("express").Router();

// Add product \\
router.post("/addProduct", productController.addProduct);

// Get all products \\
router.get("/allProducts", productController.getAllProducts);

// Get one product \\
router.get("/oneProduct/:id", productController.getOneProduct);

// Update product \\
router.put("/updateProduct/:id", productController.updateProduct);

// Get published products \\
router.get("/publishedProducts", productController.getPublishedProducts);

// Delete product \\
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
