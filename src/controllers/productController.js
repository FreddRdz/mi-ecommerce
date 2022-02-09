const fetch = require("node-fetch");
// let products = require("../database/products");
const { response } = require("express");

module.exports = {
  findProducts: (req, res) => {
    fetch("https://dhfakestore.herokuapp.com/api/products")
      .then((responde) => response.json())
      .then((productosRelacionados) => {
        return res.render("product", { productosRelacionados });
      });
  },

  findProductById: (req, res) => {},

  //PRODUCTOS SUGERIDOS//                 /products/api/product/suggested
  findProductsSuggested: async (req, res) => {
    fetch("https://dhfakestore.herokuapp.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        let productosSugeridos = [data[0], data[1], data[2], data[3], data[4]];
        return res.render("product", {
          productosSugeridos,
        });
      });
  },

  findProductsRelatedById: (req, res) => {
    let id = req.params.id;

    fetch("https://dhfakestore.herokuapp.com/api/products/" + id)
      .then((responde) => response.json())
      .then((producto) => {
        fetch("https://fakestoreapi.com/products/category/" + producto.category)
          .then((response) => response.json())
          .then((categoriaProducto) => {
            return res.render("product", { categoriaProducto });
          });
      });
  },
  findProductsMostWanted: (req, res) => {},
};
