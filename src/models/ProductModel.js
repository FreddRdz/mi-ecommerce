const fetch = require("node-fetch");
const fs = require("fs");
const URL = "https://dhfakestore.herokuapp.com/api/products/";
// const path = require("path");

const Products = {
  fileLocation: "./src/database/products.json",

  leerJson: () => {
    return JSON.parse(fs.readFileSync(Products.fileLocation, "utf-8"));
  },

  getAllProductos: () => {
    let productos = Products.leerJson();
    return productos;
  },

  addProductToApi: (id, nombre, valor, descripcion, stocks) => {
    let productos = Products.leerJson();
    let valorToNumber = Number(valor),
      stocksToNumber = Number(stocks);

    let productAdded = {
      gallery: [],
      mostWanted: false,
      stock: stocksToNumber,
      store: null,
      _id: id,
      title: nombre,
      price: valorToNumber,
      description: descripcion,
      image: null,
      category: "Otros",
      __v: 0,
    };

    productos.push(productAdded);

    fs.writeFileSync(
      Products.fileLocation,
      JSON.stringify(productos, null, " ")
    );
  },

  findProductByIdApiRest: (id) => {
    const products = Products.leerJson();
    const productFiltred = products.find((product) => product._id === id);
    return productFiltred;
  },

  getAllProducts: async () => {
    const products = await fetch(URL);
    const productDetail = await products.json();
    return productDetail;
  },
  filterProductById: async (id) => {
    const productsImported = await Products.getAllProducts();
    const productFiltred = await productsImported.find(
      (product) => product._id === id
    );
    return productFiltred;
  },
};

// Products.filterProductById("6191cb984f875644e0b8e99b");
module.exports = Products;
