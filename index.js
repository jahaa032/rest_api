

fetch("https://pokeapi.co/api/v2/pokemon/arceus")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => consol.error(error));