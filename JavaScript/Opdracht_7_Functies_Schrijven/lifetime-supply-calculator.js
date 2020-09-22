const calculateSupply = function (age, amountDay) {
    const maxAge = 100;
    const totalAmount = (maxAge - age) * (amountDay * 356);

    console.log('You will need ' + totalAmount + ' to last you until age of ' + age);
}
calculateSupply(28, 45);





  