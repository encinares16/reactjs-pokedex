/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { PokemonTypes } from './PokemonTypes'
import { Pokeball } from './Pokeball'
import { PokemonCardOnLoad } from './PokemonCardOnLoad'
import { PokemonInfo } from './PokemonInfo'
import { PokemonBaseStats } from './PokemonBaseStats'
import '../styles/PokedexCard.css'

export const PokedexCard = ({ data, loading }) => {
  
    const [isLoading, setIsLoading] = useState(loading)
    let species = useRef()
    
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
          <Pokeball types={`${species.current}`}/>
          <p className={`pokemon_id ${species.current}`}>{data.id < 1000 ? (`#0${data.id}`) : data.id }</p>

            <div className={`pokemon_profile_container ${species}`}> 
                { isLoading  == true
                ? (<> <div className="loading_container"><div className="loading"></div> <p>Loading API...</p> </div></>) 
                    : <> { data.sprites.other.dream_world.front_default === null ? <img id='profile' src={data.sprites.other.home.front_default} alt="" className="pokemon_card_profile"/> : <img id='profile'  className="pokemon_card_profile" src={data.sprites.other.dream_world.front_default} alt=""/>}</> }
                    <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1) }</h1>
                </div>
            <div className="info_container">
                <PokemonTypes data={data.types.map(e => e.type.name)} types={species.current} />
                {/* <div className={`pokemon_info ${species.current}`}>
                        <div className="info">
                            <p>Pokemon ID: &nbsp;{data.id}</p> 
                            <p>Name: &nbsp; { data.name.charAt(0).toUpperCase() + data.name.slice(1) }</p> 
                            <p>Height: &nbsp;{data.height * 10}cm</p> 
                            <p>Weight: &nbsp;{data.weight / 10}kg</p> 
                            <div className="abilities"> 
                                <p>Skills:&nbsp; </p>
                                {skillsArray[0].map((data, index) => (<div key={index}> 
                                <div> { data[index] === undefined ? "404" :  data.charAt(0).toUpperCase() + data.slice(1) } &nbsp; </div>
                            </div>))}
                            </div>
                        </div>
                </div> */}
                <PokemonInfo species={data => species.current = data} data={data}/>
                <PokemonBaseStats species={data => species.current = data} data={data}/>
            </div>
          </> 
    }
    </div>
    </>
  )
}

