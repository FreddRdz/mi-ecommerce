window.addEventListener("load", () => {
  let foto1 = document.querySelector(".foto1"),
    foto2 = document.querySelector(".foto2"),
    foto3 = document.querySelector(".foto3"),
    mainFoto = document.querySelector(".foto-detalle-xlsize");

  mainFoto.src = "/assets/images (2).jpeg";

  foto1.addEventListener("click", (e) => {
    mainFoto.src = "/assets/D_NQ_NP_717087-MLA41598235072_042020-O.webp";

    foto1.src = "/assets/images (2).jpeg";
    e.preventDefault();
  });
});
