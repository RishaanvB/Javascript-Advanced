const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  currentActive > circles.length ? (currentActive = circles.length) : null;
  updateCircle();
});

prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 1 ? (currentActive = 1) : null;
  updateCircle();
});

const updateCircle = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else circle.classList.remove("active");
  });
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);
  currentActive === 4 ? (next.disabled = true) : (next.disabled = false);
};
