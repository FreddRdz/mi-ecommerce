const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// router.get("/api/products", productController.findProducts);
router.get("/:id", productController.findProductById);
router.get("/:id/related", productController.findProductsRelatedById);
router.get("/suggested", productController.findProductsSuggested);
router.get("/", productController.getAllProducts);
// router.get("/mostWanted", productController.findProductsMostWanted);

module.exports = router;
