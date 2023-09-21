
const pokemonList = document.getElementById("pokemonList")
// convertendo o html em lista dinamica
function convertPokemon(pokemon){
    //type color
    return `   <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}"
             alt="${pokemon.name}">
    </div>
</li>`
}


// requisição com função calback
api.getApi().then((pokemons=[])=> {
// tira a virgula no join
//mostra na tela 
pokemonList.innerHTML+=pokemons.map(convertPokemon).join("")
// console.log(pokemons)
})