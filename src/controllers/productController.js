const fetch = require("node-fetch");
// let products = require("../database/products");

module.exports = {
  findProducts: (req, res) => {},
  findProductById: (req, res) => {},
  findProductsRelatedById: (req, res) => {},

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
  findProductsMostWanted: (req, res) => {},
};
