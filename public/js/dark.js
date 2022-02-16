window.addEventListener("load", function () {
  let btn = document.querySelector(".theme");
  let valor = true;

  btn.addEventListener("click", function (e) {
    if (valor) {
      valor = false;
      console.log("color");
      document.querySelector("header").classList.add("darkheader");
    } else {
      valor = true;
      document.querySelector("header").classList.remove("darkheader");
    }
  });
});
