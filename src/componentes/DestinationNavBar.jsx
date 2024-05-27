import { NavLink } from "react-router-dom"
import Data from "/src/data.json"

export default function DestinationNavBar() {
    const data = Data.destinations
    return(
        <ul className="flex fs-300 light-font ff-sans-cond uppercase tab"
        id = "destination-nav">
            <li className="underline"><NavLink to={'/Destination/moon'} end>{data[0].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/mars'}>{data[1].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/europe'}>{data[2].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/titan'}>{data[3].name}</NavLink></li>
        </ul>
    )
}
