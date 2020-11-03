import React, { useEffect, useState } from "react";
import api from "../Services/api.js";
import HomeButton from './HomeButton';

function PokemonDetail({ match }) {
  
  const [poke, setPoke] = useState({
    sprites: {},
    stats: [],
    abilites: [],
  });

  const pokeImage = poke.sprites.front_default;
  const [image, setImage] = useState([pokeImage]);
  const [loading, setLoading] = useState(true);
  const pokeParams = match.params.id;

  useEffect(() => {
    async function fecthPokemon() {
      const results = await api.get(`${pokeParams}`);
      setPoke(results.data);
      setLoading(false);
    }
    fecthPokemon();
    
  }, [pokeParams]);

  useEffect(() => {
    setImage([poke.sprites.front_default]);
  }, [poke]);



  return(
    <div>
      {
      loading ? (<h4 style={{ textAlign: "center" }}>Cargando...</h4>) : (
          <div className="detail">
            <div className="detail-view">
              <div className="image">
                <img src={image} alt={poke.name} />
              </div>
              <div className="data">
                  <h2>{poke.name.split(" ").map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(" ")}</h2>
              </div>
              <div className="property">
                <div className="left">Base Experience</div>
                <div className="right">{poke.base_experience} XP</div>
              </div>
              <div className="property">
                <div className="left">Height</div>
                <div className="right">{poke.height / 10 } Cm</div>
              </div>
              <div className="property">
                <div className="left">Weight</div>
                <div className="right">{poke.weight / 10} Kg</div>
              </div>
              <h3>Pokemon Types</h3>
              <div className="types">
                <div className="type">
                    {poke.types.map((type,index) => (
                    
                      type.type.name
                        
                  ))}
                </div>
              </div>
              <h3>Abilities</h3>
              <div className="abilities">
                <div className="ability">
                    {poke.abilities.map((type,index) => (
                    
                      type.ability.name
                        
                  ))}
                </div>
              </div>

              <HomeButton/>
              
              </div>
          </div>  
        )
      }
    </div> 

  )
    
}

export default PokemonDetail;