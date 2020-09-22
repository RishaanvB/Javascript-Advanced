// // cheeseSandwich(){
// //     add slice of bread :
// //     add slice of bread :
// //     add slice of cheese ;
// //     add slice of bread ;
// // }

// deel A: Ik snap niet precies wat hier de bedoeling van is. 

let cheeseSandwich = function () {
    'add slice of bread';
    'add cheese';
    'add slice of bread';
};

console.log('add slice of bread add cheese add slice of bread')

cheeseSandwich();


// Deel B


let makeSandwich = function (topping) {  /* <-- declareren functie*/
    'add slice of bread';
    'add cheese';
    'add slice of bread';
    return topping;
};
// Deel C
let calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

// Deel D

let calculateMinimumDiscountedPrice = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
         return totalAmount + ' helaas, je krijgt geen korting';
    }

}


console.log('there you go, a sandwich with ' + makeSandwich('cheese')); /*<--function call*/
console.log(calculateDiscountedPrice(200, 20));
console.log(calculateMinimumDiscountedPrice(20, 20));
