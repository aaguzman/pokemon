import React from 'react'

const PokemonItem = (props) => {

    return(
        <div className = "PokemonItem">
            <h3>{props.name}</h3>
            <ul>
                {props.types.map((type) => (
                    <li className = {`type ${type}`} key = {type}>{type}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonItem