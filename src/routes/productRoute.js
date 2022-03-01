const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/suggested", productController.findProductsSuggested);
router.get("/:id", productController.findProductById);
router.delete("/borrar/:id", productController.findProductById);
router.get("/:id/related", productController.findProductsRelatedById);
// router.get(
//   "/api/products/mostWanted",
//   productController.findProductsMostWanted
// );

module.exports = router;
