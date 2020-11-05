const countryButton = document.querySelector("#countrybutton")
const steenbokButton = document.querySelector("#steenbokbutton")
const arrayList = document.getElementById("arraylist")
const removeAll = document.getElementById("removeall")
const ccButton = document.getElementById("ccbutton")
const popAmountButton = document.getElementById("maxpopbutton")
const averageButton = document.getElementById("averagebutton")
const averageText = document.getElementById("averagetext")

//====removes all lists button====
removeAll.addEventListener("click", () => {
    removesList();
})

// ====Creates a list of items for each of the arrayitems in DOM=====

const setCreatedArray = (array) => {
    array.forEach(item => {
        let newLi = document.createElement("li")
        arrayList.appendChild(newLi)
        newLi.innerHTML = item
    })
}
//===removes all items from the array displayed in the DOM===
const removesList = () => {
    arrayList.querySelectorAll("*").forEach((listItem) => listItem.remove());
    averageText.innerHTML = " "
}

//=====Landenlijst Deel 1====


const setCountryList = (array) => {
    createdArray = array.map(person => person.region).sort()
    let newArray = [...new Set(createdArray)]
    console.log(newArray)
    setCreatedArray(newArray)
}

countryButton.addEventListener("click", () => {
    removesList();
    setCountryList(randomPersonData);
})
//=====Landenlijst Deel 1====




//=====Steekbokvrouwen Deel 2====
const sortByname = (array) => {
    array.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
}
const setSteenbokVrouwen = (array) => {

    const isWomen = array.filter(person => person.gender === "female")
    const isOver30 = isWomen.filter(person => person.age > 30)
    const isSteenbok = isOver30.filter
        (person =>
            parseInt(person.birthday.mdy) === 12 && parseInt(person.birthday.dmy) >= 22
            || parseInt(person.birthday.mdy) === 01 && parseInt(person.birthday.dmy) <= 19)
    sortByname(isSteenbok)
    isSteenbok.forEach(person => {
        const newLi = document.createElement("li")
        arrayList.appendChild(newLi)
        const newImg = document.createElement("img")
        const name = document.createTextNode(`${person.name} ${person.surname}`)
        newLi.appendChild(newImg)
        newLi.appendChild(name)
        newImg.setAttribute("src", person.photo)
    })

}


steenbokButton.addEventListener("click", () => {
    removesList();
    setSteenbokVrouwen(randomPersonData);
})


//=====Steekbokvrouwen Deel 2====




//=====CreditCard Deel 3====
const isOver18 = person => person.age > 17

const getExpirationDate = person => {
    const expirationToArray = person.credit_card.expiration.split("/");
    const expirationYear = parseInt("20" + expirationToArray[1]);
    const expirationMonth = parseInt(expirationToArray[0]) - 1; // Jan = 0, Dec = 11
    const expirationDay = 1; // Default
    person.expiration_date = new Date(
        expirationYear,
        expirationMonth,
        expirationDay
    );
    return person;
};
const sortByDate = (function (person1, person2) {
    var nameA = person1.expiration_date;
    var nameB = person2.expiration_date;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

const ExpiredCards = ({ expiration_date }) => {
    const oneYearFromNow = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    );
    let now = new Date()
    return expiration_date > now && expiration_date < oneYearFromNow;
}

const getExpiredCards = () =>
    randomPersonData
        .filter(isOver18)
        .map(getExpirationDate)
        .filter(ExpiredCards)
        .sort(sortByDate)

const generateHTML = (person) => {
    const newLi = document.createElement("li")
    const secondLi = document.createElement("li")
    arrayList.appendChild(newLi)
    newLi.appendChild(secondLi)
    const name = document.createTextNode(`Name: ${person.name} ${person.surname}`)
    const info = document.createTextNode(`Phone: ${person.phone}, CC: ${person.credit_card.number}, EXP: ${person.credit_card.expiration}`)
    newLi.appendChild(info)
    secondLi.appendChild(name)
    return;
}

const displayOldCreditcardList = () => {
    getExpiredCards().map(generateHTML)

}

ccButton.addEventListener("click", () => {
    removesList();
    displayOldCreditcardList()
})



//=====CreditCard Deel 3====


//=====Meeste Mensen Deel 4====

//get all countries
//count amount of multiple countries
//set amount of multiples after countries
//sort by amount of multiples

let preSortedArray = (array) => {
    array.sort(function (a, b) {
        return b[1] - a[1];
    })
};

const displayCountries = () => {
    const getCountries = (country) => country.region
    let sortedArray = randomPersonData
        .map(getCountries)
    let uniqueArray = [...new Set(sortedArray)]
    let countryPlusAverage = uniqueArray.map(value => [value, sortedArray.filter(country => country === value).length])
    let preSortedArray = countryPlusAverage.sort
        ((a, b) => {
            return b[1] - a[1];
        });
    preSortedArray.forEach(country => {
        const newLi = document.createElement("li")
        arrayList.appendChild(newLi)
        newLi.innerHTML = country
    })
}


popAmountButton.addEventListener("click", () => {
    removesList();
    displayCountries()
})



//=====Meeste Mensen Deel 4====

const getAverageNum = (array) => {
    const sumOfArray = array.reduce((acc, value) => acc + value, 0);
    const avgofArray = (sumOfArray / array.length) || 0;
    return Math.round(avgofArray)
}
const displayCountryAvg = () => {
    getCountries = randomPersonData.map(person => person.region)
    const uniqueCountryArray = [...new Set(getCountries)]
    let countryPlusAverage = uniqueCountryArray.map
        (value => [value, getAverageNum(randomPersonData.filter(country => country.region === value)
            .map(person => person.age))])

    countryPlusAverage.forEach(country => {
        const averageText = document.getElementById("averagetext")
        const newButton = document.createElement("button")
        newButton.className = "listofcountries"
        // newButton.innerHTML = 
        arrayList.appendChild(newButton)
        newButton.innerHTML = country[0]
        newButton.addEventListener("click", () => {
            averageText.innerHTML = `The average age for the people in ${country[0]} is ${country[1]}`
            console.log(countryPlusAverage)
        })
    })

}

averageButton.addEventListener("click", () => {
    removesList()
    displayCountryAvg()
})

//=====Gemiddelde leeftijd Deel 5====
