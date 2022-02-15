window.addEventListener('load', function(){

  let formulario = document.querySelector("form");
  let email = document.querySelector(".username-input");
  let contraseña = document.querySelector(".user-password");
  let contraseñaRepeat = document.querySelector("#passwordRepeat");
  let errores = [];
  let mostrarErrores = document.querySelector(".errores ul");
  let botonFormulario = document.querySelector(".button-register")
  let botonEntendido = this.document.querySelector(".botonMensaje")
  


  formulario.addEventListener("submit",function(event){

    if (email.value == ''){
    
      errores.push("Error en el campo email");

      botonEntendido.style.margin="35px 0px 0px 0px; "
    }

    if (contraseña.value == ''){
     
      errores.push("Error en la contraseña")
      botonEntendido.style.margin="5px 0px 0px 0px; "
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