const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')

//Controller used for initial seeding
const PokemonController = require('./controllers/pokemon.ctrl')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/pokemon"

try {
    mongoose.connect(url, {})    
} catch (error) {
    
}

let port = 5000 || process.env.PORT

routes(router)

app.use(cors())

app.use('/api', router)

/**Initial Data in DB */
PokemonController.seed()

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    
});