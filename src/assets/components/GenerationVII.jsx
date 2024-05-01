/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { fetchPokemonData } from "../scripts/fetchPokemonData";
import { PokedexGrid } from "./PokedexGrid";
import axios from "axios";
import '../styles/Main.css'
import { Lightbox } from './Lightbox';

export default function GenerationVII(props){
  
  const [pokeData, setPokeData]=useState([]);
  const [loading,setLoading]=useState(true);

  const [data, setData] = useState([]);
  
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
      {/* {loading ? 'x' : pokeData.map(data => data.name)} */}
      <PokedexGrid isLoading={loading} pokemon={pokeData} pokemonData = {poke => setData(poke)} />
    </div>
  </>
  )
}