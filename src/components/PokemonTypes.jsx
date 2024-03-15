/* eslint-disable react/prop-types */
import '../styles/PokemonTypes.css'

export const PokemonTypes = (props) => {
  return (
    <div className={`species ${props.types}`}>
        {props.data.map((data, index) =>  ( <div key={index} className={`species_item ${props.types}`}> 
              <div className={`types ${data}`}> </div> 
           <div>{data.toUpperCase()}</div>
        </div>))}
    </div>
  )
}
