import { Pokeball } from "./Pokeball"
import { PokemonTypes } from "./PokemonTypes"
import '../styles/PokemonCardOnLoad.css'

export const PokemonCardOnLoad = () => {

    let data = ['no data'];
    
    return (<>
        <p className='pokemon_id onload'>&#35;404</p>
        <Pokeball />
        <div className={`pokemon_profile_container onload`}> 
            <div className="loading_container">
                <div className="loading"></div>
                <p>Loading API...</p>
                <h1>Loading...</h1>
            </div>
        </div>
        <PokemonTypes data={data.map(e => e)} types="no data" />
        <div className={`pokemon_info onload`}>
            <div className="info">
                <p>Pokedex ID: &nbsp; &#35;404</p> 
                <p>Pokemon: &nbsp; No Data</p> 
                <p>Height: &nbsp; No Data</p> 
                <p>Weight: &nbsp; No Data</p> 
                <p>Skills: &nbsp; No data</p>
            </div>
        </div>
    </>)
}
