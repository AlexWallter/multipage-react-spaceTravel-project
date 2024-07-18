import { NavLink } from "react-router-dom"
import Data from "/src/data.json"
import {useNavIndex} from '../hooks/useNavIndex'

export default function DestinationNavBar() {
    const navIndex = useNavIndex((state)=> state.NavIndex)
    const value = useNavIndex((state)=> state.indexValue)
    console.log(value)
    const data = Data.destinations
    return(
        <ul className="flex fs-300 light-font ff-sans-cond uppercase tab"
        id = "destination-nav">
            <li className="underline"><NavLink to={'/Destination/moon'} onClick={()=>navIndex(0)} end>{data[0].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/mars'} onClick={()=>navIndex(1)}>{data[1].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/europe'} onClick={()=>navIndex(2)}>{data[2].name}</NavLink></li>
            <li className="underline"><NavLink to={'/Destination/titan'} onClick={()=>navIndex(3)}>{data[3].name}</NavLink></li>
        </ul>
    )
}
