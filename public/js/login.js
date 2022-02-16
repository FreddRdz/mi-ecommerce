window.addEventListener("load", function () {
  let variable = null;
  let formulario = document.querySelector("form");
  let email = document.querySelector(".username-input");
  let contraseña = document.querySelector(".user-password");
  let errores = [];
  let mostrarErrores = document.querySelector(".errores ul");
  let botonFormulario = document.querySelector(".button-login");
  let botonEntendido = document.querySelector(".botonMensaje");
  let checkbox = document.querySelector(".recuerdame");

  if (localStorage.nombreUsuario) {
    let usuario = localStorage.nombreUsuario;
    email.setAttribute("value", usuario);
    checkbox.checked = true;
  }

  formulario.addEventListener("submit", function (event) {
    if (email.value == "") {
      errores.push("Error en el nombre de usuario");
    }

    if (contraseña.value == "") {
      errores.push("Error en la contraseña");
    }

    if (errores.length > 0) {
      let divErrores = (document.querySelector(".errores").style.display =
        "block");

      event.preventDefault();

      errores.forEach((error) => {
        mostrarErrores.innerHTML += `<li>${error}</li>`;
        botonFormulario.disabled = true;
      });
    }

    botonEntendido.addEventListener("click", function (event) {
      errores = [];
      botonFormulario.disabled = false;
      mostrarErrores.innerHTML = ``;
      let divErrores2 = (document.querySelector(".errores").style.display =
        "none");
    });

    if (checkbox.checked) {
      localStorage.setItem("nombreUsuario", email.value);
    } else {
      localStorage.removeItem("nombreUsuario");
    }
  });
});
