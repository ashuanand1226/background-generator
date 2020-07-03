var css = document.querySelector("h3");
var titleColor = document.querySelector(".titleColor");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyQ = document.querySelector("body");
var body = document.getElementById("gradient");
var h1 = document.getElementById("title");

var titleButton = document.getElementById("titleBtn");
var cssButton = document.getElementById("cssBtn");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
}

titleColor.addEventListener("input", function() {
	h1.style.color = titleColor.value;
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

titleButton.addEventListener("click", function() {
	css.textContent = h1.style.color;
});

cssButton.addEventListener("click", function() {
	css.textContent = body.style.background;
});