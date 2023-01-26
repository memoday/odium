let odium = document.getElementById("symbol1");
let logStyle = document.getElementById("log").style;
let log = document.getElementById("log");

// odium.addEventListener("click", function (event) {
//   logStyle.display = "block";
//   logStyle.animation = "fadein .3s";
// }, false);

// odium.addEventListener("mouseout", function (event) {
//     logStyle.display = "none";
// }, false); 

odium.addEventListener("click", function (event) {
  log.classList.toggle('active');
}, false);