/* eslint-disable react/prop-types */
import { memo } from "react";
import '../styles/PokemonInfo.css'

export const PokemonInfo = memo(function PokemonInfo(props) {

    let skillsArr = [];
    skillsArr.push((!props.data) ? null : props.data.abilities.map(d => d.ability.name))
    let species = props.species(props.data.types.map(d => d.type)[0].name);
    
    const showBaseStat = () => {
        document.getElementById('pokemon_info').style.display = "none"
        document.getElementById('base_stat').style.display = "block"
    }

    return (<>
    <div id="pokemon_info" className={`pokemon_info ${species}`}>
        <div id="info" className="info">
            <div className="info_nav">
                <p>Pokemon ID: &nbsp;#{props.data.id <= 1000 ? '0' + props.data.id : props.data.id}</p> 
                <button className={`info_button ${species}`} onClick={showBaseStat}>Base Stats</button>
            </div>
            <p>Name: &nbsp; { props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1) }</p> 
            <p>Height: &nbsp;{props.data.height * 10}cm</p> 
            <p>Weight: &nbsp;{props.data.weight / 10}kg</p> 
            <p>Base Experience: &nbsp;{props.data.base_experience}</p> 
            {/* {console.log(props.base_experience)} */}
            <div className="abilities"> 
                <p>Skills:&nbsp; </p>
                {skillsArr[0].map((data, index) => (<div key={index}> 
                <div> { data[index] === undefined ? "404" :  data.charAt(0).toUpperCase() + data.slice(1) } &nbsp; </div>
            </div>))}
            </div>
        </div>
    </div>
    </>)
})
