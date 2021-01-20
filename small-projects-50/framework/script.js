const panels = document.querySelectorAll(".panel");
const rightArrow = document.querySelectorAll(".fa-arrow-right");
const leftArrow = document.querySelectorAll(".fa-arrow-left");

const removeActiveClass = (array) =>
  array.forEach((item) => item.classList.remove("active"));

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass(panels);
    panel.classList.add("active");
  });
});

leftArrow.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = e.target.parentElement;
    const leftParent =
      e.target.parentElement.previousSibling.previousElementSibling;

    removeActiveClass(panels);
    leftParent.classList.add("active");
  });
});


rightArrow.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      const parent = e.target.parentElement;
      const rightParent =
        e.target.parentElement.nextSibling.nextElementSibling;
  
      removeActiveClass(panels);
      rightParent.classList.add("active");
    });
  });