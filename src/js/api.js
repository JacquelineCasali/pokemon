const api={}



function  convertApi(pokeDetail){
    const pokemon = new Pokemon
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}


api.getDetali=(pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertApi)
}

// dentro do parentese é o parametro
api.getApi=(offset=0,limit=5 )=>{
//chamando a api de 0 a 10 elemento na pagina
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


return fetch(url)
.then((response)=> response.json())
.then((jsonBody)=> jsonBody.results)
.then((pokemons)=>pokemons.map(api.getDetali))
.then((detailRequests)=>Promise.all(detailRequests))
.then((details)=>details)

}






//promise lista de promessas 
