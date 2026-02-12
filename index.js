// const url = "https://pokeapi.co/api/v2/pokemon/arceus"

// fetch(url)
//     .then(response =>  {

//         if (!response.ok){
//             throw new error("Could not fetch resource");
//         }
//         return response.json();
//     })

//     .then(data => console.log(data.name))
//     .catch(error => consol.error(error));
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprite.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}