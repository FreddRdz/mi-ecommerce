let buttonPagar = document.querySelector(".button-pagar");

var divBloqueo = document.createElement("div");
var divContenedor = document.createElement("div");
var h3Titulo = document.createElement("h3");
var labelMensaje = document.createElement("label");
var botonCerrar = document.createElement("button");

divBloqueo.classList.add("divBloqueo");
divContenedor.classList.add("divContenedor");

buttonPagar.addEventListener("click", (e) => {
  e.preventDefault();
  divContenedor.style.backgroundColor = "white";
  h3Titulo.innerText = "¡ERROR!";

  labelMensaje.innerText = "La página aún no ha sido implementada";
  botonCerrar.innerText = "Cerrar";

  botonCerrar.onclick = () => {
    document.body.removeChild(document.getElementsByClassName("divBloqueo")[0]);
  };

  divBloqueo.appendChild(divContenedor);
  divContenedor.appendChild(h3Titulo);
  divContenedor.appendChild(labelMensaje);
  divContenedor.appendChild(botonCerrar);

  var elementosBloqueo = document.getElementsByClassName("divBloqueo");

  for (var i = 0; i < elementosBloqueo.length; i++) {
    document.body.removeChild(elementosBloqueo[i]);
  }

  document.body.appendChild(divBloqueo);
});
