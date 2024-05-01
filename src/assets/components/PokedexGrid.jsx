import PropTypes from 'prop-types';
import { Types } from "./Types"
import '../styles/Main.css'
// import getLocalStorageData from '../scripts/getLocalStorageData';

export const PokedexGrid = (props) => {

    // const show = () => {
    //     // document.getElementById('lightbox').style.display = "flex"
    //     // console.log(getLocalStorageData('react-pokedex-lightbox').display)
    // }

  return (<>
    <div className="grid cards"> 
        { props.isLoading ? <h1>Loading...</h1> : 
        props.pokemon.map((data) => {
            let types = data.types.map(d => d.type.name)[0]
            let types2 = data.types.map(d => d.type.name)[1]
            return (<>  
                    <div>
                        <div className={`card ${types} `} key={data.id} onClick={()=>{
                            props.pokemonData(data)
                            document.getElementById('lightbox').style.display = "flex"
                            // setData('react-pokedex-lightbox', {display: "flex"})
                        }}>
                            <p className={`card_pokemon_id ${types}`}>&nbsp;&nbsp;#{data.id}</p>                               
                            <div className="card_id_pokeball">
                            
                                {data.sprites.other.dream_world.front_default == null 
                                ? <img className="pokemon_profile" src={data.sprites.other.home.front_shiny}/> 
                                : <img className="pokemon_profile" src={data.sprites.other.dream_world.front_default}/>}
                                <Types types={types}/>
                            </div>
                            <div className="card_pokemon_name">
                                <p className="pokemon_name"> &nbsp;{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
                                <div className={`card_types ${types}`}>
                                <p >{types.toUpperCase()}</p>
                                {(!types2) ? null : <p >{types2.toUpperCase()}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        })}
    </div>
  </>
  )
}

PokedexGrid.propTypes = {
    isLoading: PropTypes.bool,
    pokemon: PropTypes.array,
    pokemonData: PropTypes.func
}





