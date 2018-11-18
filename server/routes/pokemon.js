const pokemonCtrl =  require('./../controllers/pokemon.ctrl')

module.exports = (router) => {
    /** Query is string for searching  */
    router
        .route('/pokemon/search/:query')
        .get(pokemonCtrl.searchPokemon)
    /** List all pokemon */    
    router
        .route('/pokemon')
        .get(pokemonCtrl.getAllPokemon)
      
    // router
    //     .route('/pokemon/load')
    //     .get(pokemonCtrl.seed)
    

    // router
    //     .route('/pokemon/clear')
    //     .get(pokemonCtrl.clear)

}