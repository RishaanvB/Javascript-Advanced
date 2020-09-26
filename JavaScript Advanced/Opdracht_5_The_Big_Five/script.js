//stap 2 //stap 4 = get value of animal, with event, callback from eventlistener, then target of that event, then the text within target.
let buttonIsClicked = (event) => {
  console.log(event.target.textContent);
  let clickedAnimal = event.target.textContent;
  let newAnimalItem = document.createElement("li");
  newAnimalItem.innerHTML = clickedAnimal;
  let spottedAnimalList = document.querySelector("#spotted-animals-list");
  spottedAnimalList.appendChild(newAnimalItem);

  // let removeClickedAnimal = event.target;                                  //remove able to click animal multiple times
  // removeClickedAnimal.removeEventListener("click", buttonIsClicked);
};
// Stap 1
const animalButtons = document.querySelectorAll(".big-five-button"); // eventlistener on animalbuttons
animalButtons.forEach(function (onButtonClick) {
  onButtonClick.addEventListener("click", buttonIsClicked); //Stap 3, clickevent calling function buttonIsClicked
});

//Deel 2

let deleteAnimal = () => {
  let firstAnimal = document
    .getElementById("spotted-animals-list")
    .getElementsByTagName("li")[0];
  console.log(firstAnimal); //list of li, dus 1st child is at 0 index
  // let spottedAnimalList = document.getElementById("spotted-animals-list")
  // spottedAnimalList.removeChild(firstAnimal[0]);
  firstAnimal.remove();
};

const deleteFirstAnimalButton = document.querySelector(
  "#remove-first-item-button"
);
deleteFirstAnimalButton.addEventListener("click", deleteAnimal);

//Deel 3

// let deleteAllAnimals = () =>{
//   let spottedAnimalList = document.getElementById("spotted-animals-list")
//   spottedAnimalList.innerHTML = '';
// }
// let deleteAllAnimals = () =>{
let spottedAnimalList = document.getElementById("spotted-animals-list");
// spottedAnimalList.querySelectorAll('*').forEach(n => n.remove());

// }
let deleteAllAnimals = () => {
  while (spottedAnimalList.firstChild) {
    spottedAnimalList.removeChild(spottedAnimalList.firstChild);
  }
};

const deleteAllButton = document.querySelector("#remove-all-button");
deleteAllButton.addEventListener("click", deleteAllAnimals);
