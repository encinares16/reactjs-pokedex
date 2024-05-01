/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { PokemonTypes } from './PokemonTypes'
// import { Pokeball } from './Pokeball'
import { PokemonCardOnLoad } from './PokemonCardOnLoad'
import { PokemonInfo } from './PokemonInfo'
import { PokemonBaseStats } from './PokemonBaseStats'
import '../styles/PokedexCard.css'

export const PokedexCard = ({ data, loading }) => {
  
    const [isLoading, setIsLoading] = useState(loading);
    let species = useRef();

    useEffect(() => {
        setIsLoading(true)
        try {
            setTimeout(() => setIsLoading(false), 1000)
            {(!data) ? null : species.current = data.types.map(e => e.type.name)[0] }
        } catch (error) {
            console.log(error)
        }
    } ,[data])

    return (
    <>
    <div className={`pokemon_card ${species.current}`}>
          {(!data) ? <PokemonCardOnLoad/>
          : <>
          {/* <Pokeball types={`${species.current}`}/> */}
          {/* <p className={`pokemon_id ${species.current}`}>{data.id < 1000 ? (`#0${data.id}`) : data.id }</p> */}
            <div className="pokemon_id_container">
                <p className={`pokemon_id ${species.current}`}>{data.id < 1000 ? (`#0${data.id}`) : data.id }</p>
                <input type="button" className={`close_button ${species.current}`} value="x" onClick={()=>{
                    // setData('react-pokedex-lightbox', {display: "none"})
                    document.getElementById('lightbox').style.display = "none"
                }}/>

            </div>
            <div className={`pokemon_profile_container ${species}`}> 
                { isLoading  == true
                ? (<> <div className="loading_container"><div className="loading"></div> <p>Loading API...</p> </div></>) 
                    : <> { data.sprites.other.dream_world.front_default === null ? <img id='profile' src={data.sprites.other.home.front_default} alt="" className="pokemon_card_profile"/> : <img id='profile'  className="pokemon_card_profile" src={data.sprites.other.dream_world.front_default} alt=""/>}</> }
                    <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1) }</h1>
                </div>
            <div className="info_container">
                <PokemonTypes data={data.types.map(e => e.type.name)} types={species.current} />
                <PokemonInfo species={data => species.current = data} data={data}/>
                <PokemonBaseStats species={data => species.current = data} data={data}/>
            </div>
          </> 
    }
    </div>
 
    </>
  )
}

