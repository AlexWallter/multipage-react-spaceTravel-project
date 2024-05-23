import { NavLink } from "react-router-dom"

export default function DestinationNavBar() {
    return(
    <ul className="circular-toggle flex">
        <li><NavLink to={'https://AlexWallter.github.io/multipage-react-spaceTravel-project/Crew/douglas-hurley'}></NavLink></li>
        <li><NavLink to={"https://AlexWallter.github.io/multipage-react-spaceTravel-project/Crew/mark-shuttleworth"}></NavLink></li>
        <li><NavLink to={"https://AlexWallter.github.io/multipage-react-spaceTravel-project/Crew/victor-glover"}></NavLink></li>
        <li><NavLink to={"https://AlexWallter.github.io/multipage-react-spaceTravel-project/Crew/anousheh-ansari"}></NavLink></li>
    </ul>
    )
}