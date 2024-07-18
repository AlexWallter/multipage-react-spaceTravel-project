import { NavLink } from "react-router-dom"
import { useNavIndex } from "../hooks/useNavIndex"

export default function DestinationNavBar() {
    const navIndex = useNavIndex((state)=> state.NavIndex)
    
    return(
    <ul className="circular-toggle flex">
        <li><NavLink to={'/Crew/douglas-hurley'} onClick={()=>{navIndex(0)}}></NavLink></li>
        <li><NavLink to={"/Crew/mark-shuttleworth"} onClick={()=>{navIndex(1)}}></NavLink></li>
        <li><NavLink to={"/Crew/victor-glover"} onClick={()=>{navIndex(2)}}></NavLink></li>
        <li><NavLink to={"/Crew/anousheh-ansari"} onClick={()=>{navIndex(3)}}></NavLink></li>
    </ul>
    )
}