const addOne = function (numbers) {
    return numbers.map(number => number + 1);
}


const getWordLengths = function (someWords) {
    let wordLength = someWords.map(word => word.length)
    return wordLength
};

module.exports = {
    addOne: addOne,
    getWordLengths: getWordLengths,
};