import Links from "./assets/components/NavLink";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import setData from "./assets/scripts/setData"
import getLocalStorageData from "./assets/scripts/getLocalStorageData";

export default function App() {

  // setData('react-pokedex-theme', {theme: "light"});
  // const [theme, setTheme] = useState(getLocalStorageData('react-pokedex-theme').theme);
  // const body = document.querySelector('body')

  // const light = () => {
  //   setData('react-pokedex-theme', {theme: "light"})
  //   setTheme(getLocalStorageData('react-pokedex-theme').theme);
  //   body.classList.remove("light")
  //   body.classList.add(theme)
  // }

  // const dark = () => {
  //   setData('react-pokedex-theme', {theme: "dark"})
  //   setTheme(getLocalStorageData('react-pokedex-theme').theme);
  //   body.classList.remove("dark")
  //   body.classList.add(theme)
  // }

  //   body.classList.remove("light")
  //   body.classList.remove("dark")
  //   body.classList.add(theme)

  return (
    <>
      {/* <header className={`header ${theme}`}>
        {theme == 'dark' ? <input className={`theme_button ${theme}`} type="button" value={theme} onClick={light}/> 
          : <input className={`theme_button ${theme}`} type="button" value={theme} onClick={dark}/> 
        }

        <h1>Pokédex</h1>
        <a href="https://github.com/encinares16/reactjs-pokedex" 
          target="_blank">Github</a>
      </header>
      <div className={`generation ${theme}`}>
          <h1>GENERATION</h1>
          <Links/>
      </div> */}
      <header className={`header`}>
        {/* {theme == 'dark' ? <input className={`theme_button ${theme}`} type="button" value={theme} onClick={light}/> 
          : <input className={`theme_button ${theme}`} type="button" value={theme} onClick={dark}/> 
        } */}
        <input className={`theme_button`} type="button" value={"theme"} /> 
        <h1>Pokédex</h1>
        <a href="https://github.com/encinares16/reactjs-pokedex" 
          target="_blank">Github</a>
      </header>
      <div className={`generation`}>
          <h1>GENERATION</h1>
          <Links/>
      </div>
      <Outlet/>
    </>
  )
}

