import React, {useEffect, useState} from 'react'
import {getAllPokemons, getOnePokemon} from  '../Services/getPokemons'
import PokemonData from './PokemonData';

function Pokemon() {

  const [poke, setPoke] = useState([]);
  const [nextPageUrl, setnextPageUrl] = useState('');
  const [prevPageUrl, setprevPageUrl] = useState('');
  const [loading, setLoading] = useState(true)

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5'

  useEffect (()=>{
    async function getData(){
      const response = await getAllPokemons(baseUrl);
 
      setnextPageUrl(response.next); 
      setprevPageUrl(response.prev);
      await loadPokemon(response.results);
      setLoading(false);
    }
     getData();
},[])

const loadPokemon = async(data) => {
  const poke = await Promise.all(data.map(async pokemon =>{
    const pokemonStore = await getOnePokemon(pokemon);
      return pokemonStore
  }))
  setPoke(poke);
}

const next = async()=>{
  let data = await getAllPokemons(nextPageUrl);
  await loadPokemon(data.results);
  setLoading(false);
  setnextPageUrl(data.next);
  setprevPageUrl(data.previous);
}
const prev = async()=>{
  let data = await getAllPokemons(prevPageUrl);
  await loadPokemon(data.results);
  setLoading(false);
  setnextPageUrl(data.next);
  setprevPageUrl(data.previous);
}
 
  return(
    <div >
      {
        loading ? <h4 style={{ textAlign: 'center' }}>Cargando...</h4> : (
          <div className="list">
          {
            poke.map((pokemon) => {
              return <PokemonData key={pokemon.name} pokemon={pokemon}/>
            })}
          </div>
        )
      }
      <div className="pagination">
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
      </div>
      
    </div>    

  )

}

export default Pokemon;