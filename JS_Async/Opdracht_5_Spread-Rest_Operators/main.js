// const sumOfNum = (...num) => num.reduce((curr, prev) => prev + curr);
// console.log(sumOfNum(1, 2, 3, 4, 5, 6,));


const combineNum = (num1, num2, num3) =>  num1 + num2 + num3;
const sumOperator = (num) => num.reduce((prev, curr)=> prev + curr)

const array = [1, 2, 3, 4, 5, 6]

console.log(combineNum(...array));  
console.log(sumOperator(array));  



