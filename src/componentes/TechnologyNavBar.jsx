import { useNavIndex } from "../hooks/useNavIndex"
import { NavLink } from "react-router-dom"

export default function TechnologyNavBar() {
    function test(e) {
        return document.getElementsByClassName(`tecNavBtn${e}`)[0].click()
    }

    const navIndex = useNavIndex((state)=> state.NavIndex)

    return(
    <ul className="flex ff-serif fs-600">
        <li onClick={()=>test('1')}><NavLink to={'/Technology/launch-vehicle'} className={'tecNavBtn1'} onClick={()=>{navIndex(0)}}>1</NavLink></li>
        <li onClick={()=>test('2')}><NavLink to={"/Technology/spaceport"} className={'tecNavBtn2'} onClick={()=>{navIndex(1)}}>2</NavLink></li>
        <li onClick={()=>test('3')}><NavLink to={"/Technology/spaceCapsule"} className={'tecNavBtn3'} onClick={()=>{navIndex(2)}}>3</NavLink></li>
    </ul>
    )
}