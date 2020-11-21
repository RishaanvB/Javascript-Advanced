const {
    isMaxLength,
    isNotNull,
    hasLowerCase,
    hasUpperCase,
    hasDigit,
    minimumConditionsReached,
    verifyPassword
} = require("./main")

test("checks if maximum length is 9 or less char", () => {
    const lessThanNine = "12345678"
    const moreThanNine = "1234567890"
    const exactlyNine = "123456789"
    expect(isMaxLength(lessThanNine)).toBeTruthy();
    expect(isMaxLength(moreThanNine)).toBeFalsy();
    expect(isMaxLength(exactlyNine)).toBeTruthy();
})

test("checks if value is not Null", () => {
    const isNull = null;
    const notNull = 2
    expect(isNull).toBeNull();
    expect(isNotNull(isNull)).toBeTruthy();
    expect(isNotNull(notNull)).toBeTruthy();
})

test("checks if string has lowercase", () => {
    const allLower = "alllowercase"
    const allHigher = "ALLHIGHERCASE"
    const oneLower = "aAHDGH"
    const oneHigher = "abcdfgH"
    const numbers = "12345a"
    const numWithUpperCase = "1234A"
    expect(hasLowerCase(allLower)).toBeTruthy();
    expect(hasLowerCase(allHigher)).toBeFalsy();
    expect(hasLowerCase(oneLower)).toBeTruthy();
    expect(hasLowerCase(oneHigher)).toBeTruthy();
    expect(hasLowerCase(numbers)).toBeTruthy();
    expect(hasLowerCase(numWithUpperCase)).toBeFalsy();

})

test("checks if string has uppercase", () => {
    const allLower = "alllowercase"
    const allHigher = "ALLHIGHERCASE"
    const oneLower = "aAHDGH"
    const oneHigher = "abcdfgH"
    const numbers = "12345a"
    const numWithUpperCase = "1234A"
    expect(hasUpperCase(allLower)).toBeFalsy();
    expect(hasUpperCase(allHigher)).toBeTruthy();
    expect(hasUpperCase(oneLower)).toBeTruthy();
    expect(hasUpperCase(oneHigher)).toBeTruthy();
    expect(hasUpperCase(numbers)).toBeFalsy();
    expect(hasUpperCase(numWithUpperCase)).toBeTruthy();

})

test("checks if string contains number", () => {
    const hasOneDigit = "1323abcd"
    const hasNoDigit = "abcds"
    expect(hasDigit(hasOneDigit)).toBeTruthy();
    expect(hasDigit(hasNoDigit)).toBeFalsy();
})

test("checks if password meets min requirements", () => {
    const array = [true, true, true, false, false]
    expect(minimumConditionsReached(array)).toBe(true);



})