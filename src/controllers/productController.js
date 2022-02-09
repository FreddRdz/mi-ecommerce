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
  findProductsSuggested: (req, res) => {},
  findProductsMostWanted: (req, res) => {},
};
