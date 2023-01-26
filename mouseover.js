let odium = document.getElementById("symbol1");
let logStyle = document.getElementById("log").style;
let levelStyle = document.getElementById("level").style;
let log = document.getElementById("log");
let level = document.getElementById("level");

odium.addEventListener("mouseover", function (event) {
  logStyle.display = "block";
  logStyle.animation = "fadein .3s";
  levelStyle.display = "block";
  levelStyle.animation = "fadein .3s";
}, false);

odium.addEventListener("mouseout", function (event) {
    logStyle.display = "none";
    levelStyle.display = "none";
}, false); 

odium.addEventListener("click", function (event) {
  log.classList.toggle('active');
  level.classList.toggle('active');
}, false);