const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/api/products", productController.findProducts);

router.get("/api/products/:id", productController.findProductById);
router.get(
  "/api/products/:id/related",
  productController.findProductsRelatedById
);
router.get("/api/product/suggested", productController.findProductsSuggested);
router.get(
  "/api/products/mostWanted",
  productController.findProductsMostWanted
);
router.get("/products", productController.getAllProducts);

router.get("/productos", productController.getAllProductsApiRest);

router.post("/product/new", productController.addProduct);

router.post("/products/delete", productController.deleteProduct);

router.post("/producto/edit", productController.editProduct);

router.get("/productos/:id", productController.findProductByIdApiRest);

module.exports = router;
