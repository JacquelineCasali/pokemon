
const pokemonList = document.getElementById("pokemonList")
const load =document.getElementById("load")
const limit=9
let offset=0
// convertendo o html em lista dinamica




function carregarpaginas(offset,limit){
 // requisição com função calback
api.getApi(offset,limit).then((pokemons=[])=> {
   const newHtml=pokemons.map((pokemon)=>
   `   <li class="pokemon ${pokemon.type}">
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
   
   
   
   ).join("")
    // tira a virgula no join
    //mostra na tela 
    pokemonList.innerHTML+=newHtml
    console.log(pokemons)
    })
}

carregarpaginas(offset,limit)
load.addEventListener('click',()=>{
    offset+=limit
    
    carregarpaginas(offset,limit)
})