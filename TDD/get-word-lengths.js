const getWordLengths = function (someWords) {
   let wordLength = someWords.map(word => word.length )
   return wordLength
};

module.exports = getWordLengths;

