fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((pokemonList) => {
    console.log(pokemonList);
    const arrayOfNames = pokemonList.results;

    console.log(arrayOfNames);
    console.log(
      arrayOfNames.find((pokemon) => {
        return pokemon.name == "charizard";
      })
    );
    pokemonList.results.forEach((pokemon) => {
      document.querySelector("#list").innerHTML += `
          <button onclick="getData('${pokemon.url}')">${pokemon.name}</button>
      `;
    });
  });

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      console.log(pokemon);
      document.querySelector("#results").innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="">
      <h1>${pokemon.name}</h1>
      <h4>Ability: ${pokemon.abilities[0].ability.name}</h4>
    `;
    });
}s