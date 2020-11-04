const countryButton = document.querySelector("#countrybutton")
const steenbokButton = document.querySelector("#steenbokbutton")
const arrayList = document.getElementById("arraylist")
const removeAll = document.getElementById("removeall")

//====removes all lists button====
removeAll.addEventListener("click", () => {
    removesList();
})

//====Creates a list of items for each of the arrayitems in DOM=====

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
}

//=====Landenlijst Deel 1====


const setCountryList = (array) => {
    createdArray = array.map(person => person.region).sort()
    setCreatedArray(createdArray);
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





