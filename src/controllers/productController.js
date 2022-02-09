const fetch = require("node-fetch");
// let products = require("../database/products");

module.exports = {
  findProducts: (req, res) => {},
  findProductById: (req, res) => {},
  findProductsRelatedById: (req, res) => {},

  //PRODUCTOS SUGERIDOS
  findProductsSuggested: async (req, res) => {
    fetch("https://dhfakestore.herokuapp.com/api/products")
      .then((response) => response.json())
      .then((productosSugeridos) => {
        return res.render("product", { productosSugeridos });
      });
    // let id = req.params.id;

    // const productosSugeridos = products.find((product) => product.id == id);

    // productosSugeridos = res.render("product", { product: productosSugeridos });
  },
  findProductsMostWanted: (req, res) => {},
};
