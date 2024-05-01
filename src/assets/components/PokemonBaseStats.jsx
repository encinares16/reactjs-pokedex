/* eslint-disable react/prop-types */
import { memo } from "react";
// import '../styles/PokemonBaseStats.PokemonBaseStats'
import '../styles/PokemonBaseStats.css'

export const PokemonBaseStats = memo(function PokemonBaseStats(props) {

    let statsArr = [];
    statsArr.push((!props.data) ? null : props.data.stats.map(stat => stat.base_stat))
    let species = props.data.types.map(data => data.type.name)[0]
    
    let health = statsArr.map(stat => stat[0]);
    let defense = statsArr.map(stat => stat[1]);
    let specialAttack = statsArr.map(stat => stat[2]);
    let specialDefense = statsArr.map(stat => stat[3]);
    let speed = statsArr.map(stat => stat[4]);

    const display = () => {
        document.getElementById('base_stat').style.display = "none"
        document.getElementById('pokemon_info').style.display = "block"
    }

    return (<>
    <div id="base_stat" className={`base_stat ${props.species(props.data.types.map(d => d.type)[0].name)}`}>
        <div id="info base_stat" className="info">
            <div className="info_nav">
                <p>Pokemon ID: &nbsp;#{props.data.id <= 1000 ? '0' + props.data.id : props.data.id}</p> 
                <button className={`info_button ${species}`}  onClick={display}>Pokemon Info</button>
            </div>

            <div className="pb health">
                <p>HP: &nbsp; &nbsp;</p> 
                <div className={`progress_bar ${species} health`}>
                    <div className="progress health" style={{width: `${health}%`}}></div>
                </div>
                {health >= 100 ? 'MAX' : <p>{health}&#37;</p>}
            </div>

            <div className="pb defense">
                <p>DEF: &nbsp;</p> 
                <div className="progress_bar defense">
                    <div className="progress defense" style={{width: `${defense}%`}}></div>
                </div>
                {defense >= 100 ? 'MAX' : <p>{defense}&#37;</p>}
            </div>

            <div className="pb special_attack">
                <p>SP ATK: &nbsp;</p> 
                <div className="progress_bar special_attack">
                    <div className="progress special_attack" style={{width: `${specialAttack}%`}}></div>
                </div>
                {specialAttack >= 100 ? 'MAX' : <p>{specialAttack}&#37;</p>}

            </div>

            <div className="pb special_defense">
                <p>SP DEF: &nbsp;</p> 
                <div className="progress_bar special_defense">
                    <div className="progress special_defense" style={{width: `${specialDefense}%`}}></div>
                </div>
                {specialDefense >= 100 ? 'MAX' : <p>{specialDefense}&#37;</p>}
            </div>

            <div className="pb speed">
                <p>SPEED: &nbsp;</p> 
                <div className="progress_bar speed">
                    <div className="progress speed" style={{width: `${speed}%`}}></div>
                </div>
                {speed >= 100 ? 'MAX' : <p>{speed}&#37;</p>}
            </div>
        </div>
    </div>
    </>)
})
