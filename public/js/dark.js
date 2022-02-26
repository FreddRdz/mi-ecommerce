window.addEventListener("load", function () {
  //Boton del evento
  let btn = document.querySelector(".btnTheme");
  let valor = true;
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let contenedor = document.querySelector(".contenedor-productos");
  let contenedorPedidos = document.querySelector(
    ".contenedor-productos-pedidos"
  );
  let menu = document.querySelector(".contenedor-menu");
  let icono = document.querySelector(".theme");
  let detalleProducto = document.querySelector("#detalle");
  let bntProducto = document.querySelector(".button-add-to-cart");
  let listaProductos = document.querySelector(".lista-productos");

  btn.addEventListener("click", function (e) {
    //Agregar estilos
    if (valor) {
      valor = false;
      body.classList.add("darkColor");
      header.classList.add("darkheader");
      if (contenedor) contenedor.classList.add("contenedor-producto-Dark");
      if (contenedorPedidos)
        contenedorPedidos.classList.add("contenedor-producto-Dark");
      menu.classList.add("dark-menu");
      icono.classList.add("theme-Dark");
      if (detalleProducto) detalleProducto.classList.add("detalle-Dark");
      if (bntProducto) bntProducto.classList.add("btn-Dark");
      if (listaProductos) listaProductos.classList.add("sugeridos-dark");

      document
        .querySelectorAll("a")
        .forEach((element) => (element.style.color = "white"));

      document
        .querySelectorAll("p")
        .forEach((element) => (element.style.color = "white"));
    } else {
      //remover estilos
      valor = true;
      body.classList.remove("darkColor");
      header.classList.remove("darkheader");
      if (contenedor) contenedor.classList.remove("contenedor-producto-Dark");
      if (contenedorPedidos)
        contenedorPedidos.classList.remove("contenedor-producto-Dark");
      menu.classList.remove("dark-menu");
      icono.classList.remove("theme-Dark");
      if (detalleProducto) detalleProducto.classList.remove("detalle-Dark");
      if (listaProductos) listaProductos.classList.remove("sugeridos-dark");
      if (bntProducto) bntProducto.classList.remove("btn-Dark");

      document
        .querySelectorAll("a")
        .forEach((element) => (element.style.color = "black"));
    }

    //local Storage
    if (body.classList.contains("darkColor")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  //local Storage
  if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("darkColor");
    header.classList.add("darkheader");
    if (contenedor) contenedor.classList.add("contenedor-producto-Dark");
    if (contenedorPedidos)
      contenedorPedidos.classList.add("contenedor-producto-Dark");
    menu.classList.add("dark-menu");
    icono.classList.add("theme-Dark");
    if (detalleProducto) detalleProducto.classList.add("detalle-Dark");
    if (bntProducto) bntProducto.classList.add("btn-Dark");
    if (listaProductos) listaProductos.classList.add("sugeridos-dark");

    document
      .querySelectorAll("a")
      .forEach((element) => (element.style.color = "white"));

    document
      .querySelectorAll("p")
      .forEach((element) => (element.style.color = "white"));
  } else {
    body.classList.remove("darkColor");
    header.classList.remove("darkheader");
    if (contenedor) contenedor.classList.remove("contenedor-producto-Dark");
    if (contenedorPedidos)
      contenedorPedidos.classList.remove("contenedor-producto-Dark");
    menu.classList.remove("dark-menu");
    icono.classList.remove("theme-Dark");
    if (detalleProducto) detalleProducto.classList.remove("detalle-Dark");
    if (listaProductos) listaProductos.classList.remove("sugeridos-dark");
    if (bntProducto) bntProducto.classList.remove("btn-Dark");

    document
      .querySelectorAll("a")
      .forEach((element) => (element.style.color = "black"));

    document
      .querySelectorAll("a")
      .forEach((element) => (element.style.color = "black"));
  }
});
