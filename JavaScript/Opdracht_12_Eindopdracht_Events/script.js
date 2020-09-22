const menu = document.querySelector("#menu-icon");
const colorRed = document.getElementById("color-red");
const colorWhite = document.getElementById("color-white");
const colorBlue = document.getElementById("color-blue");
const colorOrange = document.getElementById("color-orange");
const body = document.querySelector("#body");
const textInfo = document.querySelector("#background-info");

//menu openen(kan mss korter met .forEach op #color-list toepassen????/)

menu.addEventListener("click", function () {
  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
});

// Background color change on click

colorRed.addEventListener("click", function () {
  body.classList.add("background-red");
  body.classList.remove("background-white");
  body.classList.remove("background-blue");
  body.classList.remove("background-orange");
  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
  textInfo.textContent = "Red Background";
});

colorWhite.addEventListener("click", function () {
  body.classList.add("background-white");
  body.classList.remove("background-red");
  body.classList.remove("background-blue");
  body.classList.remove("background-orange");
  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
  textInfo.textContent = "White Background";
});

colorBlue.addEventListener("click", function () {
  body.classList.add("background-blue");
  body.classList.remove("background-white");
  body.classList.remove("background-red");
  body.classList.remove("background-orange");
  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
  textInfo.textContent = "Blue Background";
});

colorOrange.addEventListener("click", function () {
  body.classList.add("background-orange");
  body.classList.remove("background-white");
  body.classList.remove("background-blue");
  body.classList.remove("background-red");
  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
  textInfo.textContent = "Hup Holland Hup!";
});

// Kon niet vinden hoe je achter de toets kon komen die je intikt.

//   window.addEventListener('keypress', function (){
// 	  if (keypress == a){
// 		change background
// 	  }	else if(keycode == b){
// 		  change background
// 	  }	else {
// 		  change background
// 	  }
//   })

// mouse hover eventlisteners.

/* 
menu.addEventListener("mouseenter", function () {
  const colorRed = document.getElementById("color-red");
  const colorWhite = document.getElementById("color-white");
  const colorBlue = document.getElementById("color-blue");
  const colorOrange = document.getElementById("color-orange");

  colorRed.classList.toggle("colorbar-transition");
  colorWhite.classList.toggle("colorbar-transition");
  colorBlue.classList.toggle("colorbar-transition");
  colorOrange.classList.toggle("colorbar-transition");
});

menu.addEventListener("mouseleave", function () {
	const colorRed = document.getElementById("color-red");
	const colorWhite = document.getElementById("color-white");
	const colorBlue = document.getElementById("color-blue");
	const colorOrange = document.getElementById("color-orange");
  
	colorRed.classList.toggle("colorbar-transition");
	colorWhite.classList.toggle("colorbar-transition");
	colorBlue.classList.toggle("colorbar-transition");
	colorOrange.classList.toggle("colorbar-transition");
  }); */

//einde hover
