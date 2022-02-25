// Módulos
const express = require("express");
const app = express();
const PORT = 3030 || process.env.PORT;
const session = require("express-session");
const cors = require("cors");

// Configuración de public, src para todo el proyecto
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(express.static("src"));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
// const corsOptions = {
//   origin: "http://localhost:3030/products",
// };

//Rutas
app.set("view engine", "ejs");
app.set("views", "./views/pages");
app.use(
  session({
    secret: "shh, its a secrete",
    resave: false,
    saveUninitialized: false,
  })
);
const mainRoute = require("./src/routes/mainRoute");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const storeRoute = require("./src/routes/storeRoute");
const cartRoute = require("./src/routes/cartRoute");
const apiRoute = require("./src/routes/apiRoute");

// INDEX
app.use("/api", apiRoute); //cors(corsOptions),*//
app.use("/product", productRoute);
app.use("/", mainRoute);
app.use("/users", userRoute);
app.use("/", storeRoute);
app.use("/", cartRoute);

//Checkout
app.get("/checkout", (req, res) => res.render("checkout"));

// Page not found
app.get("*", (req, res) => res.status(404).render("pagenotfound"));

//Servidor
app.listen(PORT, () => {
  console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT);
});
