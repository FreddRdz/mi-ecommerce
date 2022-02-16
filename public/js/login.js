window.addEventListener('load', function(){

  let formulario = document.querySelector("form");
  let email = document.querySelector(".username-input");
  let contraseña = document.querySelector(".user-password");
  let contraseñaRepeat = document.querySelector("#passwordRepeat");
  let errores = [];
  let mostrarErrores = document.querySelector(".errores ul");
  let botonFormulario = document.querySelector(".button-login")
  
  let botonEntendido = document.querySelector(".botonMensaje")
  

  formulario.addEventListener("submit",function(event){

    if (email.value == ''){
    
      errores.push("Error en el nombre de usuario");
    }

    if (contraseña.value == ''){
      errores.push("Error en la contraseña")
    }

    if (errores.length > 0){
      
      let divErrores = document.querySelector(".errores").style.display ="block";
     
      event.preventDefault();
      
      errores.forEach(error => {
        mostrarErrores.innerHTML += `<li>${error}</li>`
        botonFormulario.disabled = true;
      })
     }

     botonEntendido.addEventListener("click",function(event){
      errores = []
      botonFormulario.disabled = false;
      mostrarErrores.innerHTML = ``
      let divErrores2 = document.querySelector(".errores").style.display ="none";
     })

  });

});