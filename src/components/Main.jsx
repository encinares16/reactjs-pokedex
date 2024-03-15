/* eslint-disable react/prop-types */
import { removeActiveState } from "../scripts/removeActiveState";
import { memo, useRef, useState } from "react"
import { ButtonTheme } from "./ButtonTheme"
import { Types } from "./Types";
import '../styles/Main.css'

export const Main = memo(function Main(props){ 
  
    const [theme, setTheme] = useState("Dark");
    const isOpen = useRef(true);

    const openSideNav = ()=> {
        if(isOpen.current === true) {
            isOpen.current = !isOpen.current
            document.querySelector("#sidenav").style.width = "620px";
            document.querySelector("#main").style.marginLeft = "620px";
            document.querySelector("#button").innerHTML = "Close"

        } else {
            isOpen.current = !isOpen.current
            document.querySelector("#sidenav").style.width = "0px";
            document.querySelector("#main").style.marginLeft = "0px";
            document.querySelector("#button").innerHTML = "Open"
        }
    }

    const switchTheme = () => {
        if(theme === "Dark") {
            setTheme("Light")
            document.body.style.backgroundColor = "#111";
            document.querySelector("#sidenav").style.backgroundColor = "#111";
        } else {
            setTheme("Dark") 
            document.body.style.backgroundColor = "white"
            document.querySelector("#sidenav").style.backgroundColor = "white";
        }
    }

    const reloadData = () => {
        setTimeout(() => {
            props.pokedata([])
            props.fetch()
        }, 5000)
    }

    const gen = (e) => {
        removeActiveState();
        if(e.target.id == 'generation1'){
            document.getElementById('generation1').classList.add('active')
            props.generation('?offset=0&limit=151')
        }else if (e.target.id == 'generation2') {
            document.getElementById('generation2').classList.add('active')
            props.generation('?offset=151&limit=100')
        } else if (e.target.id == 'generation3') {
            document.getElementById('generation3').classList.add('active')
            props.generation('?offset=251&limit=135')
        } else if (e.target.id == 'generation4') {
            document.getElementById('generation4').classList.add('active')
            props.generation('?offset=493&limit=107')
        } else if (e.target.id == 'generation5') {
            document.getElementById('generation5').classList.add('active')
            props.generation('?offset=647&limit=156')
        }else if (e.target.id == 'generation6') {
            document.getElementById('generation6').classList.add('active')
            props.generation('?offset=721&limit=72')
        }else if (e.target.id == 'generation7') {
            document.getElementById('generation7').classList.add('active')
            props.generation('?offset=809&limit=88')
        }else if (e.target.id == 'generation8') {
            document.getElementById('generation8').classList.add('active')
            props.generation('?offset=905&limit=96')
        }else if (e.target.id == 'generation9') {
            document.getElementById('generation9').classList.add('active')
            props.generation('?offset=1025&limit=120')
        }
        reloadData()
    }

    return ( <>
    <div id="main" className="main">
        
        <div className="rightNav">
            <button className={`sidenav_button ${theme}`} id="button" onClick={openSideNav}>Open</button>
            <h2 className={`title ${theme}`}>Pokédex</h2>
            <ButtonTheme theme={theme} change={switchTheme}/>
        </div>

        <h2 className={`title ${theme}`}>GENERATION</h2>
        <div id="generation" className={`generation ${theme}`}>
            <a href="#" id="generation1" className={`generation`} onClick={gen}>I</a>
            <a href="#" id="generation2" className={`generation`} onClick={gen}>II</a>
            <a href="#" id="generation3" className={`generation`} onClick={gen}>III</a>
            <a href="#" id="generation4" className={`generation`} onClick={gen}>IV</a>
            <a href="#" id="generation5" className={`generation`} onClick={gen}>V</a>
            <a href="#" id="generation6" className={`generation`} onClick={gen}>VI</a>
            <a href="#" id="generation7" className={`generation`} onClick={gen}>VII</a>
            <a href="#" id="generation8" className={`generation`} onClick={gen}>VIII</a>
            <a href="#" id="generation9" className={`generation`} onClick={gen}>IX</a>
        </div>

        <div className="grid cards" > 
            { props.loading ? <h1>Loading...</h1> : 
            props.pokemon.map((data) => {
                let types = data.types.map(d => d.type.name)[0]
                let types2 = data.types.map(d => d.type.name)[1]
                return (<>  
                        <div>
                            <div className={`card ${types} `} key={data.id} onClick={()=>{
                                props.pokemonData(data)
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
    </div>
    </>)
})
