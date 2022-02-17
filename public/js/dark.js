window.addEventListener("load", function () {
  let btn = document.querySelector(".theme");
  let valor = true;

  let contenedor = document.querySelector(".contenedor-producto");

  btn.addEventListener("click", function (e) {
    if (valor) {
      valor = false;
      // home
      document.querySelector("header").classList.add("darkheader");
      document.querySelector("#homeBody").classList.add("darkColor");
      contenedor.classList.add("contenedor-producto-Dark");
      // login
      document.querySelector("#loginBody").classList.add("darkLogin");
    } else {
      valor = true;
      // home
      document.querySelector("header").classList.remove("darkheader");
      document.querySelector("#homeBody").classList.remove("darkColor");
      contenedor.classList.remove("contenedor-producto-Dark");
      // login
      document.querySelector("#loginBody").classList.remove("darkLogin");
    }
  });
});
