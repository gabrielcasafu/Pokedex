import React from 'react';
import { Link } from 'react-router-dom'

function PokemonData({ pokemon }) {
    
    return(
        <Link className="underline-no" to={`/pokemon/${pokemon.id}`}>
            <div className="list-data">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
            </div>
        </Link>
    )

}

export default PokemonData;