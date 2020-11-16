const addOne = function (numbers) {
    let newArray = []
    numbers.forEach(num => {
        newArray.push(num += 1)

    });
    return newArray
}

module.exports = addOne;