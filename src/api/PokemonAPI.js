const api = "http://localhost:5000/api/pokemon"

export const getAll =  () =>
    fetch(api)
        .then(res => res.json())
        .then(data => data)

export const searchPokemon = (query) =>
    fetch(`${api}/search/${query}`)
    .then(res => res.json())
    .then(data => data)