/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SideNav } from "./components/SideNav"
import { Main } from "./components/Main"
import axios from "axios";

const App = () => {

    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [pokeDex, setPokeDex]= useState();
    const url = useRef("https://pokeapi.co/api/v2/pokemon/")
    const generation = useRef("?offset=0&limit=151")
    const pokemonSpecies = pokeDex == undefined ? '' : pokeDex.types.map(d => d.type.name)[0]
    // const [generation, setGeneration]= useState("?offset=0&limit=151");
   
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

    const fetchPokemonData = async () => {
        setLoading(true);
        try {
            setLoading(false);
            const result =await axios.get(`${url.current}${generation.current}`);
            getPokemonData(result.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fetchPokemonData();
    }, [url])

    return (<>
        <SideNav data={pokeDex} loading ={loading}/>
        <Main pokemon={pokeData} loading={loading} species={pokemonSpecies} pokemonData = {poke => setPokeDex(poke)} fetch={fetchPokemonData} generation = {data => {generation.current = data} } pokedata={poke => setPokeData(poke)}/>
    </>)
}

export default App
