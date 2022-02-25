const fetch = require("node-fetch");
const { response } = require("express");

module.exports = {
  getAllProducts: async (req, res) => {
    let url = "https://dhfakestore.herokuapp.com/api/products";
    let response = await fetch(url);
    let data = await response.json();
    res.send(data);
  },
};
