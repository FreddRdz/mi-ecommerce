const fetch = require("node-fetch");
const fs = require("fs");
const { editProduct } = require("../controllers/productController");
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

  addProductToApi: (id, nombre, valor, descripcion, stocks, img, gallery) => {
    let productos = Products.leerJson();
    let valorToNumber = Number(valor),
      stocksToNumber = Number(stocks);

    let productAdded = {
      gallery: gallery,
      mostWanted: false,
      stock: stocksToNumber,
      store: null,
      _id: id,
      title: nombre,
      price: valorToNumber,
      description: descripcion,
      image: img,
      category: "Otros",
      __v: 0,
    };

    productos.push(productAdded);

    fs.writeFileSync(
      Products.fileLocation,
      JSON.stringify(productos, null, " ")
    );
  },

  editProductToApi: (id, nombre, valor, descripcion, stocks) => {
    let productos = Products.leerJson();
    let productoEditado = productos.filter((producto) => producto._id == id);

    let count = 0;
    let finalCount;

    productos.forEach((element) => {
      if (element._id === "61a5b43231c8b5c118d10861") {
        finalCount = count;
      } else {
        count++;
      }
    });

    let productosRestantes = productos.filter((producto) => producto._id != id);

    let valorToNumber = Number(valor),
      stocksToNumber = Number(stocks);

    productoEditado = {
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

    productosRestantes.splice(finalCount + 1, 0, productoEditado);

    fs.writeFileSync(
      Products.fileLocation,
      JSON.stringify(productosRestantes, null, " ")
    );
  },

  deleteProductToApi: (id) => {
    let productos = Products.leerJson();
    const productoEliminado = productos.filter(
      (producto) => producto._id != id
    );

    fs.writeFileSync(
      Products.fileLocation,
      JSON.stringify(productoEliminado, null, " ")
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
