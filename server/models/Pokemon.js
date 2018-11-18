const mongoose = require('mongoose')

let PokemonSchema = new mongoose.Schema({
    name: String,
    types:[{
        type: String
    }]
});


module.exports = mongoose.model('Pokemon', PokemonSchema)