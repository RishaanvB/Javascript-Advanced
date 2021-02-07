const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  load == 100 && clearInterval(int);
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
  console.log(blur);
};

const int = setInterval(blurring, 20);
