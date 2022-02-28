const express = require("express");
const router = express.Router();

//Controladores
const productController = require("../controllers/productController");

router.post("/new", productController.addProduct);

module.exports = router;
