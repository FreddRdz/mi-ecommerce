window.addEventListener("load", function () {
  // dropdown
  let dropdown = document.querySelector(".dropdownbtn");

  dropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector(".dropdown-content").style.display = "block";
  });

  document.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".dropdown-content").style.display = "none";
  });
});
