// /* eslint-disable no-unused-vars */

// import axios from "axios";
// import { useState } from "react";



// export const getPokemonData = async (res) => {

//     res.map(async(pokemon)=>{
//         const result = await axios.get(`${pokemon.url}`)
//         setPokeData(state=>{ state=[...state, result.data] 
//             state.sort((a, b) => a.id > b.id ? 1 : -1)
//             // state.sort((a, b) => a.name > b.name)
//             return state;
//         })
//     })   
// } 