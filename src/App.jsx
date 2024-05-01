import Links from "./assets/components/NavLink";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <p>Theme</p>
        <h1>Pokédex</h1>
        <p>Github</p>
      </header>
      <div className="generation">
          <h1>GENERATION</h1>
          <Links/>
      </div>
      <Outlet/>
    </>
  )
}

