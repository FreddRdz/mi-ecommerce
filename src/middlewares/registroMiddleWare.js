const express = require("express");
const app = express();

const { check } = require("express-validator");

let validarRegistro = [
  check("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .isNumeric()
    .withMessage("Deben ser solo valores numericos")
    .trim()
    .withMessage("no dejes espacios en blanco")
    .isLength({ min: 8 })
    .withMessage("Debes escribir un minimo de 8 caracteres"),

  check("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato valido"),

  check("Repitepassword")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .isNumeric()
    .withMessage("Deben ser solo valores numericos")
    .trim()
    .withMessage("no dejes espacios en blanco")
    .isLength({ min: 8 })
    .withMessage("Debes escribir un minimo de 8 caracteres"),
];

module.exports = validarRegistro;
