/* eslint-disable no-unused-vars */

import axios from "axios";

export const fetchPokemonData = async (isLoading, url, getPokemonData) => {
    isLoading = true;
    try {
        isLoading = false;
        const result =await axios.get(`${url}`);
        getPokemonData(result.data.results)
    } catch (error) {
        console.log(error)
    }
}