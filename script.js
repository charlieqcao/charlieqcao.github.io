/* navbar */
function myFunction() {
  var x = document.getElementById("navbar-custom");
  if (x.className === "navbar-custom") {
    x.className += " responsive";
  } else {
    x.className = "navbar-custom";
  }
}
