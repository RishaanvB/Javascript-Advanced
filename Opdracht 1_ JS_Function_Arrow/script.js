// zet de functie om naar een arrow functie

// weglaten = function, lege param = (), dan  arrow =>, naar functie {}block. 1 regel = weglaten {} plus auto return.
/* 
// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions() */

// DEEL A
const ikRockArrowFunctions = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions();

//DEEL B

/* 
const fivePlusSeven = function () {
  return 5 + 7
};

fivePlusSeven(); */

const fivePlusSeven = () => 5 + 7;
fivePlusSeven();
console.log(fivePlusSeven());

//DEEL C

/* Opdracht: schrijf een zo kort mogelijke arrow function, zonder naam 
(je hoeft het dus ook niet in een const te stoppen), 
die 1 + 2 bij elkaar optelt.
 */

() => 1 + 2;

/* Deel D: Als je parameter toe wilt voegen aan een arrow function, 
 dan gaat dat op precies dezelfde manier als je gewend bent: tussen de haakjes.


 // DEEL D
Opdracht: Schrijf een arrow function, op 1 regel 
(dus met een impliciete return statement), 
die de params a en b bij-elkaar optelt. Noem de functie myFunction. */

let myFunction = (a, b) => a + b;

console.log(myFunction(4, 5));

//DEEL E
/* 
Deel E: Als je slechts 1 parameter hebt, 
kun je de haakjes zelfs helemaal weglaten.

Opdracht: Schrijf een arrow function op 1 regel,
 die de parameter a behoudt, en altijd a plus 5 returned. 
 Noem de functie addFive. */

let addFive = (a) => a + 5;
console.log(addFive(2));

//DEEL F

/* Opdracht: Schrijf een arrow function met de naam 
 createObject met een implicit return statement
  (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}
 */

const createObject = () => ({greeting: "hoi"});

console.log(createObject());
console.log(typeof(createObject()));
