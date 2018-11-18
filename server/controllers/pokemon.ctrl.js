const Pokemon = require('./../models/Pokemon')
const fs = require('fs')


/**Uppercase pokemon names */
const upperCaseName = (pokemons) => {
    pokemons.forEach(pokemon => {
        const { name } = pokemon
        pokemon.name = name.charAt(0).toUpperCase() + name.slice(1)
    });

    return pokemons
}

module.exports = {
    searchPokemon:(req,res,next) =>{
        /** Sanitizaion script  */
        const sanitizeQuery = req.params.query.replace(/[^a-z0-9]/gi,'')
        const fuzzySearch = new RegExp(sanitizeQuery, 'gi')
        
        /** query opterator to fuzzer search types and name */
        Pokemon.find({$or: [{"name": fuzzySearch},{"types":fuzzySearch}]}).then((pokemon) =>{
            return res.send(pokemon)
        }).catch(next)
    },
    getAllPokemon:(req,res,next) => {
        Pokemon.find({}, (err,pkms) => {
            if(err)
                res.send(err)
            else {
                res.send(pkms)
            }
        })
    },
    seed:(req,res,next) => {
        Pokemon.find({}, (err,pkms) => {
            /** If DB empty read data from JSON file */
            if(pkms.length === 0){
                const pokemonData = JSON.parse(fs.readFileSync(__dirname + '/../data/pokemon.json'))

                /** Insert Pokemon with uppercase Name */
                Pokemon.insertMany(upperCaseName(pokemonData), (err,pkms) => {
                    if(err)
                        res.send(err)
                })
            }

        })
       
    },
    clear:(req,res,next) => {
        Pokemon.deleteMany({},(err) =>{
            if(err)
                res.send(err)
            else
                res.send("Cleared all Pokemon")
    
       })
    }
}