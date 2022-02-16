
window.addEventListener('load', function(){


  let botonolivia = document.querySelector(".buttons")
  let mostrarErrores = document.querySelector(".errores ul");
 
  let body = document.querySelector("body")
  let main = document.querySelector("main")


  botonolivia.addEventListener("click",function(event){
    let menu = document.querySelector(".nuevoMenu").style.display ="block";

    
  });

  main.addEventListener("click",function(){
    let mainear = document.querySelector(".nuevoMenu").style.display= "none";
  })

});
