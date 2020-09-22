
// Deel 1

const person = {
    name: 'Rishaan',
    age: 33,
    evaluations: [7, 10, 9],
};

console.log(person);
console.log(person.name, 'in dot notification');
console.log(person['name'], 'in bracket notation');
console.log(person.age, 'in dot notification');
console.log(person['age'], 'in bracket notation');
console.log(person.evaluations); /*waarde is het object array van de value eval. */

// Deel 2

const colorArray = ['rood', 'groen', 'blauw'];
console.log(colorArray);
console.log(colorArray.length, 'aantal kleuren in array');
console.log(colorArray[0]);
console.log(colorArray[colorArray.length - 1]);
colorArray.push('geel');
colorArray.push(8);
console.log(colorArray);
colorArray.push({
    greeting: "Hi ik ben een object"
}
)
console.log(colorArray);
console.log(colorArray[colorArray.length - 1]);

// Deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]
console.log('start deel katten')

console.log('naam van het laatste kattenras is', catBreeds[catBreeds.length - 1].name); /**of index 2 opzoeken*/
console.log('energy levels van de eerste kat', catBreeds[0].energy_level);
console.log('het eerste temperament van de 2e kat', catBreeds[1].temperament[0]);
console.log('het laatste temperament van de 3e kat', catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);
console.log('favoriete voedsel van de 3e kat', catBreeds[2].food.favourite_food);

