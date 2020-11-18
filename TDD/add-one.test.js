const {addOne, getWordLengths} = require('./add-one.js');

test("Add 1 to each item in myArray", function () {
  const myArray = [31, 57, 12, 5];
  console.log("logt het myArray meteen na het maken ervan, verwacht--> [31, 57, 12, 5],en myArray is--> ",myArray);

  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = addOne(myArray);
  console.log("logt het myArray in output, verwacht--> [32, 58, 14, 6],en output is--> ",output);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});


test("Get word lengths", function() {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = getWordLengths(words);
  expect(output).toEqual(expected);
});