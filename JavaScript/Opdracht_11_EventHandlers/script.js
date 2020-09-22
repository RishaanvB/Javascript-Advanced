window.addEventListener("DOMContentLoaded", function () {
  console.log("domcontent is done");
  const myButton = document.getElementById("mybutton");

  myButton.addEventListener("click", function () {
    alert("Button is clicked!");
  });

  const toggleBackgroundColor = document.getElementById("changebutton");

  toggleBackgroundColor.addEventListener("click", function () {
    const myBackground = document.querySelector("body");
    myBackground.classList.toggle("red-background");
    console.log(myBackground);
  });
});
