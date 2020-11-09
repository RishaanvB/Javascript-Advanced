const getPokemon = async () => {
    try {
        let pokemon = Math.ceil(Math.random() * 897);
        // let pokemon = 149
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
        // console.log(pokemon)
        let response = await fetch(apiUrl, { method: "GET" });
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}