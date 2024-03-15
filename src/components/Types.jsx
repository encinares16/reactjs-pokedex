/* eslint-disable react/prop-types */
import { memo } from 'react'
import '../styles/Types.css'

export const Types = memo(function Types({types}){
    return (<>
        <div className='types_container'>
            <img src={`src\\assets\\svg\\${types}.svg`} alt={`pokemon_types ${types}`} className='pokemon_types'/>
        </div>
    </>)
})
