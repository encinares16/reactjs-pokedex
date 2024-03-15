/* eslint-disable react/prop-types */
import { PokedexCard } from './PokedexCard'
import { memo } from 'react'
import '../styles/SideNav.css'

export const SideNav = memo(function SideNav(props){
    return ( 
        <>
            <div id="sidenav" className="sidenav">
                <PokedexCard data={props.data} loading={props.loading}/>
            </div>
        </>
    )}
)   




