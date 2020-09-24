const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// 1 . Maak een array van alle superhelden namen

// takes .map of array and for each object takes only .name property
const getnamesOfHeroes = (array) => array.map((hero) => hero.name);
console.log(getnamesOfHeroes(superheroes));

//2. Maak een array van alle "lichte" superhelden (< 190 pounds)

//checks  entire array and filters weight < 190
const getLightweightHeroes = (array) =>
  array.filter((hero) => hero.weight < 190);
console.log(getLightweightHeroes(superheroes));

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen

//filter weight? Then map names of filtered array...

const getHeroIs200Pounds = (array) =>
  array.filter((hero) => hero.weight == "200").map((hero) => hero.name);

console.log(getHeroIs200Pounds(superheroes), "Names of the 200 pound heroes");

// 4. Maak een array met alle comics waar de superhelden hun
// "first appearances" hebben gehad

//map firstappearance property of hero??

const getHeroesFirstIssue = (array) =>
  array.map((hero) => hero.first_appearance);
console.log(getHeroesFirstIssue(superheroes), "Names of the first issues");

// 5. Maak een array met alle superhelden van DC Comics.
// Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met
//  alle superhelden van Marvel Comics.

//filter op dc comics, dan map namen in gefiltered array

const getDcHeroesNames = (array) =>
  array
    .filter((hero) => hero.publisher === "DC Comics")
    .map((hero) => hero.name);
const getMarvelHeroes = (array) =>
  array
    .filter((hero) => hero.publisher === "Marvel Comics")
    .map((hero) => hero.name);

console.log(getDcHeroesNames(superheroes));
console.log(getMarvelHeroes(superheroes));

/* 
6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
Let op! Conditionals to the rescue! Het gewicht dat je ziet in de movieDatabase,
van welk datatype is dat? Een nummer? Of een string? 
Oh ja, en hebben alle superhelden wel een gewicht? */

//filter dc comics, dan filter op weight, dan weight if a number --> dan reduce

//filters DC, then maps weight.
const getDCHeroesWeight = (array) =>
  array
    .filter((hero) => hero.publisher === "DC Comics")
    .map((hero) => hero.weight)
    .map((num) => parseInt(num));

//change string into number, getdcheroesweight =
// string dus reduce op parseint(getDCHeroesWeight??) of * 1??.. *1 werkt niet

//reducers

const TotalWeight = (cumulator, currentNum) => cumulator + currentNum;

let DCHeroesWeight = getDCHeroesWeight(superheroes);
console.log(DCHeroesWeight);

DCHeroesTotalWeight = DCHeroesWeight.reduce(TotalWeight);
console.log(DCHeroesTotalWeight, "DC totalweight");

//Marvel total weight/copy/paste..

const getMarvelHeroesWeight = (array) =>
  array
    .filter((hero) => hero.publisher === "Marvel Comics")
    .map((hero) => parseInt(hero.weight))
    .filter((num) => num / num === 1);
//hacky hacky?????????????????????????? Kan wss veel errors geven.

let marvelHeroesWeight = getMarvelHeroesWeight(superheroes);
console.log(marvelHeroesWeight);
//total weight is not a number, alleen de nummers mappen??? of filter?
marvelHeroesTotalWeight = marvelHeroesWeight.reduce(TotalWeight);
console.log(marvelHeroesTotalWeight, "marvel totalweight");

// Bonus: zoek de zwaarste superheld!
//map all weight, filter op all integers, then get max num.
//of concat or join(geen join, changes result into string) two marvelarrays together and find max then.

const allHeroesWeight = marvelHeroesWeight.concat(DCHeroesWeight);
console.log(
  allHeroesWeight,
  " bovenstaande is  gewicht van alle individuele heroes"
); // [1, 2, 3, 4,]
console.log(typeof allHeroesWeight[9], "<---logt type of, moet zijn number"); // number
console.log(
  Math.max(...allHeroesWeight),
  "<--logt largest integer met ...array"
); // wat doet '...'???

//copy/paste
var max = allHeroesWeight.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(max, "logt largest integer met .reduce");
