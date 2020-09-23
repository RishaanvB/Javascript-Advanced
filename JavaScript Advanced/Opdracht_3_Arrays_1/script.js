// const addTheWordCool = function(array){
//   // add your code

//    array.push('cool');
//    return array;
// }
// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//Deel A
const addNewString = (array) => {
  array.push("cool");
  return array;
};

console.log(addNewString(["vet", "gaaf"]));

//Deel B
const arrayLength = (x) => {
  return x.length;
};

console.log("aantal elementen in het array", arrayLength([1, 2, 3, 4]));

//Deel C
const firstIndexOfArray = (array) => {
  return array[0];
};

console.log(firstIndexOfArray([54, 543, 3, 3]));

//Deel D
const lastIndexOfArray = (array) => {
  return array[array.length - 1];
};

console.log(lastIndexOfArray([54, 543, 3, 5, 6, "laatste element"]));

//Deel E
const listOfNames = ["naam0", "naam1", "naam2", "naam3", "naam4"];

const slicedArrayAtIndexZero = (array) => {
  return array.slice(1);
};

const splicedArrayAtIndexZero = (array) => {
  let splicedElements = array.splice(1);
  return splicedElements;
};
//slice = non-mutable returns new array/copy met sliced elements
//splice = mutable returns deleted items

console.log(slicedArrayAtIndexZero(listOfNames), "sliCCedCopy");
console.log(splicedArrayAtIndexZero(listOfNames), "sPPPPPliced");

// Deel F

/* console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}" */

const stringsTogether = (array) => {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

// Deel G
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArray = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(combineArray(array1, array2));
