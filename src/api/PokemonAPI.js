const api = "http://localhost:5000/api/pokemon"

const imageApi = 'https://pokeapi.bastionbot.org/v1/pokemon/pikachu'

export const getAll =  () =>
    fetch(api)
        .then(res => res.json())
        .then(data => data)

export const searchPokemon = (query) =>
    fetch(`${api}/search/${query}`)
    .then(res => res.json())
    .then(data => data)

export const getImage = (pkm) =>
    fetch(imageApi)
    .then(res => res.json())
    .then(data => data)