


const isMaxLength = str => {
    if (str.length < 10) {
        return true
    } else return false
}

const isNotNull = str => {
    if (typeof str != null) {
        return true
    } else return null
}


const hasLowerCase = str => {
    return str.toUpperCase() != str;
}

const hasUpperCase = str => {
    return str.toLowerCase() != str;
}

const hasDigit = str => {
    let regex = /[0-9]/g;
    let regexArray = str.match(regex);
    if (regexArray != null) {
        return true
    } else return false
}






const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
}

const verifyPassword = (password) => {
    const conditions = [
        isMaxLength(password),
        isNotNull(password),
        hasLowerCase(password),
        hasUpperCase(password),
        hasDigit(password),
    ]
    const result = minimumConditionsReached(conditions) && hasLowerCase(password);
    return result
}

module.exports = {
    isMaxLength: isMaxLength,
    isNotNull: isNotNull,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasDigit: hasDigit,
    verifyPassword: verifyPassword,
    minimumConditionsReached: minimumConditionsReached,
}



console.log(verifyPassword("HENdK33&")); 