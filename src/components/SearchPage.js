import React, { Component } from 'react'
import PokemonItem from './PokemonItem'
import * as PokemonAPI from './../api/PokemonAPI'

class SearchPage extends Component {
    state = {
        pokemons: []
    }

    updateSearch(input){
        if (input === "")
            input = 0
   
        PokemonAPI.searchPokemon(input).then((pokemons)=>{
            this.setState({pokemons})
        })

    }

    render(){
        return(
            <div className = "SearchPage">
            <div className = "Header">
                <h1>Pokemon Finder</h1>
                <label>Search: </label>
                    <input 
                        className = "Search-Input"
                        onChange = {(event) => {this.updateSearch(event.target.value)}}
                    />
            </div>
            <div className = "Pokemon-List">
                    {this.state.pokemons.map((pokemon) => (
                        <PokemonItem name = {pokemon.name} types = {pokemon.types} key = {pokemon._id}/>
                    ))}
                
            </div>            
            </div>
        )
    }
}

export default SearchPage;