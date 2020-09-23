const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  console.log("logging object-->", person);
  console.log("object name is -->", person.name);
  console.log("loggin date of birth-->", 2020 - person.age);
  console.log(`${person.name} is a ${person.profession}.`);
  if (person.age > 50) {
    console.log(`${person.name} is older than 50 years.`);
  } else {
    console.log(`${person.name} is younger than 50 years.`);
  }
}
