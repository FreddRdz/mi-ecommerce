window.addEventListener("load", function () {
  let pass = document.querySelector("#pass");
  let passValidar = document.querySelector("#passValidar");
  let frase = document.querySelector("#frase");
  let fraseValidar = document.querySelector("#fraseValidar");
  let botonFormulario = document.querySelector(".button-register");
  let email = document.querySelector(".username-input");

  email.addEventListener("keyup", function () {
    botonFormulario.disabled = true;
    if (email.value.length > 5) {
      botonFormulario.disabled = false;
      let estilos = (document.querySelector(".button-register").style.cursor =
        "pointer");
      let estilos2 = (document.querySelector(".button-register").style.opacity =
        "");
    }
  });

  pass.addEventListener("keyup", function () {
    botonFormulario.disabled = true;

    let estilos = (document.querySelector(".button-register").style.cursor =
      "not-allowed");
    let estilos2 = (document.querySelector(
      ".button-register"
    ).style.opacity = 0.25);
    if (pass.value.length == 0) {
      pass.style = "none";
      frase.style.display = "none";
    }
    if (pass.value.length >= 1) {
      pass.style.border = "2px solid red";
      frase.style.color = "red";
      frase.style.display = "block";
      frase.innerHTML = "Too short";
    }
    if (pass.value.length > 7) {
      pass.style.border = "2px solid green";
      frase.style.color = "green";
      frase.innerHTML = "Good";
    }
    if (pass.value.length > 8) {
      pass.style.border = "2px solid green";
      frase.style.color = "green";
      frase.innerHTML = "Pretty good";
    }
  });

  passValidar.addEventListener("keyup", function () {
    if (passValidar.value == pass.value) {
      // console.log("contraseña igual");
      fraseValidar.innerHTML = "Contraseña coincide";
      fraseValidar.style.display = "block";
      fraseValidar.style.color = "green";

      passValidar.style.border = "2px solid green";
    }

    if (passValidar.value !== pass.value) {
      // console.log("contraseña diferente");
      fraseValidar.innerHTML = "Contraseña NO coincide";
      fraseValidar.style.display = "block";
      fraseValidar.style.color = "red";
      passValidar.style.border = "2px solid red";
    }

    if (passValidar.value.length == 0) {
      // console.log("password vacio");
      passValidar.style.border = "2px solid red";
      fraseValidar.style.display = "none";
    }
  });
});
