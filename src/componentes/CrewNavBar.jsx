import { NavLink } from "react-router-dom"

export default function DestinationNavBar() {
    return(
    <ul className="circular-toggle flex">
        <li><NavLink to={"/Crew/douglas-hurley"}></NavLink></li>
        <li><NavLink to={"/Crew/mark-shuttleworth"}></NavLink></li>
        <li><NavLink to={"/Crew/victor-glover"}></NavLink></li>
        <li><NavLink to={"/Crew/anousheh-ansari"}></NavLink></li>
    </ul>
    )
}