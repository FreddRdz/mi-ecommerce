window.addEventListener("load", function () {
  let imagenes = document.querySelectorAll(".img");
  let imagenPrincipal = document.querySelector(".imagen-principal");
  let fondoImg = document.querySelector("main");

  for (let img of imagenes) {
    img.addEventListener("mouseover", () => {
      fondoImg.classList.toggle("main");
      img.classList.toggle("imagenOver");
      imagenPrincipal.classList.toggle("imagenPrincipal");
    });
    img.addEventListener("mouseout", () => {
      fondoImg.classList.toggle("main");
      img.classList.toggle("imagenOver");
      imagenPrincipal.classList.toggle("imagenPrincipal");
    });
  }
});
