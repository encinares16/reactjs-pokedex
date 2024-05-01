/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { PokedexGrid } from "./PokedexGrid";
import { fetchPokemonData } from "../scripts/fetchPokemonData";
import { Lightbox } from "./Lightbox";

export default function GenerationIII(props){

  const [pokeData, setPokeData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [data, setData] = useState([]);
  console.log("Data:", data)
  
  const url = useRef(`https://pokeapi.co/api/v2/pokemon/${props.genURL}`) 

  const getPokemonData = async (res) => {
    res.map(async(pokemon)=>{
        const result = await axios.get(`${pokemon.url}`)
        setPokeData(state=>{ state=[...state, result.data] 
            state.sort((a, b) => a.id > b.id ? 1 : -1)
            // state.sort((a, b) => a.name > b.name)
            return state;
        })
    })   
  } 

useEffect(()=>{
  fetchPokemonData(setLoading(), url.current, getPokemonData);
}, [url])

  return(<>
    <div>
      <Lightbox data={data} isLoading={loading}/>
      <PokedexGrid isLoading={loading} pokemon={pokeData} pokemonData = {poke => setData(poke)} />
    </div>
  </>
  )
}