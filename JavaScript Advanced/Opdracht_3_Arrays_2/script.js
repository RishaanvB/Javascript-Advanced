// Deel A

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = (array) => {
  return array.find((hero) => hero.name === "Spiderman");
};

console.log(findSpiderMan(superheroes));

// Deel B

/* const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};Instinker... wist niet dat het de bedoeling was om een nieuw array te maken*/

/* const doubleArrayValue = (array) =>
  
 array.forEach(number => number * 2);

 console.log(doubleArrayValue([1, 2, 3, 4, 5])); 
  //verwachte uitkomst [2, 4, 6, 8, 10]
  //daadwerkelijke uitkomst = undefined */

const doubleArray = (array) => array.map((num) => num * 2);

console.log(doubleArray([1, 2, 3, 4]));

// Deel C

const isBiggerThan10 = (array) => array.some((num) => num > 10);

console.log(isBiggerThan10([10, 19, 2, 2, 2]), "moet zijn true als > 10");
console.log(isBiggerThan10([6, 3]), "moet zijn false als < 10");

//Deel D

const isValueinArray = (arr) => arr.includes("Italy");

console.log(
  isValueinArray([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ]),
  "Italie zit er in = true"
);
console.log(isValueinArray([1, 2, "32", "string", false]), "moet false geven");

//Deel E

const tenTimesMultiplier = (array) => {
  let newArray = [];
  array.forEach((element) => newArray.push(element * 10));
  return newArray;
};

console.log(tenTimesMultiplier([1, 2, 3, 4, 5]));

//Deel F

const isAllValueUnder100 = (arr) => arr.every((element) => element < 100); //let variable = (arg/array) => value/array.method(arg/index => condition/function  with value/index)

console.log(
  isAllValueUnder100([
    1,
    81,
    4,
    53,
    3,
    6,
    79,
    2,
    43,
    7,
    28,
    101,
    11,
    77,
    84,
    98,
  ]),
  "returns false has 101"
);
console.log(
  isAllValueUnder100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]),
  "returns true has != > 100"
);

//Deel G

const totalAmount = (array) =>
  array.reduce((currentAmount, totalAmount) => currentAmount + totalAmount);
const totalNumplified = (array) =>
  array.reduce((currentAmount, totalAmount) => currentAmount * totalAmount);

console.log(
  totalAmount([
    1,
    81,
    4,
    53,
    3,
    6,
    79,
    2,
    43,
    7,
    28,
    11,
    77,
    84,
    98,
    101,
    206,
    234,
  ])
);
console.log(totalAmount([2, 2, 2, 2, 2]), "total is 10");
console.log(totalNumplified([2, 2, 2, 2, 2]), "total is", 2 ** 5);
