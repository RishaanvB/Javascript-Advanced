/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

// const testNum = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num <= 10) {
//       resolve(`${num} is less than or equal to 10 `);
//     } else {
//       reject(`${num} is bigger than 10 `);
//     }
//   });
// };

// testNum(11)
// .then(lessThan10 => console.log(lessThan10))
// .catch(reject => console.log(reject))
// //wordt eerder uitgevoerd/gelogd omdat de promise eerst wordt 'gethened' en dan pas wordt 'gecatched'
// testNum(9)
// .then(lessThan10 => console.log(lessThan10))
// .catch(reject => console.log(reject))
// testNum(45)
// .then(lessThan10 => console.log(lessThan10))
// .catch(reject => console.log(reject))
// testNum(3)
// .then(lessThan10 => console.log(lessThan10))
// .catch(reject => console.log(reject))

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      resolve(sortWords(array.map((word) => word.toUpperCase())));
    } else {
      reject("not a string!!");
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (array) {
      resolve(array.sort());
    } else {
      reject("rejects in sortWords function");
    }
  });
};

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((logWords) => console.log(logWords))
  .catch((logError) => console.log(logError, "test"));
