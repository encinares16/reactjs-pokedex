import { NavLink } from "react-router-dom"
import '../styles/NavLink.css'

export default function Links(){
  return (
    <div className="nav">
        <div className="links">
          <NavLink to="generation-i">I</NavLink> 
          <NavLink to="generation-ii">II</NavLink> 
          <NavLink to="generation-iii">III</NavLink> 
          <NavLink to="generation-iv">IV</NavLink> 
          <NavLink to="generation-v">V</NavLink> 
          <NavLink to="generation-vi">VI</NavLink> 
          <NavLink to="generation-vii">VII</NavLink> 
          <NavLink to="generation-viii">VIII</NavLink> 
          <NavLink to="generation-ix">IX</NavLink> 
        </div>
    </div>
  )
}
