const newList = document.querySelector("#poke-info")

const button = document.getElementById("button")
button.addEventListener("click", () => {
    setPokemon()
    removesList()
})



const removesList = () => {
    newList.querySelectorAll("*").forEach((listItem) => listItem.remove());
    newList.innerHTML = " "
}



setPokemon = async () => {
    try {
        let pokeData = await getPokemon();
        let pokeName = pokeData.species.name
        const errorText = document.querySelector(".error-text")
        errorText.innerHTML = "";
        let pokePicture = (pokeData.sprites.other["official-artwork"].front_default)
        const setPicture = document.querySelector("#pokemon-picture")
        let pokeType = pokeData.types.forEach((type) => {
            const newList = document.querySelector("#poke-info")
            let typeName = type.type.name
            console.log(typeName)
            const newLi = document.createElement("li")
            newList.appendChild(newLi)
            newLi.innerHTML = typeName

        })
        // let pokeType2 = pokeData.types[1].type.name 
        // console.log(pokeData.types)


        if (pokePicture == null) {
            errorText.innerHTML = `There is no picture available for ${pokeName} `;
            setPicture.setAttribute("src", "./tall-grass.jpg")
        } else {
            setPicture.setAttribute("src", pokePicture)
            errorText.innerHTML = `${pokeName}`;
        }


    } catch (error) {
        console.log(error)
    }
}


