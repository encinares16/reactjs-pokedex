/* eslint-disable react/prop-types */
import { memo } from 'react'
import '../styles/Types.css'

export const Types = memo(function Types({types}){
    return (<>
        <div className='types_container'>
            <div className={`pokemon_types ${types}`}></div> 
        </div>
    </>)
})
