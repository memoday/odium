let odium = document.getElementById("symbol1");
let logStyle = document.getElementById("log").style;

odium.addEventListener("mouseover", function (event) {
  logStyle.display = "block";
  logStyle.animation = "fadein 1s";
}, false);

odium.addEventListener("mouseout", function (event) {
    logStyle.display = "none";
}, false); 