import { NavLink } from "react-router-dom"

export default function DestinationNavBar() {
    function test(e) {
        return console.log(document.getElementsByClassName(`tecNavBtn${e}`)[0].click())
    }

    return(
    <ul className="flex ff-serif fs-600">
        <li onClick={()=>test('1')}><NavLink to={"/Technology/launch-vehicle"} className={'tecNavBtn1'}>1</NavLink></li>
        <li onClick={()=>test('2')}><NavLink to={"/Technology/spaceport"} className={'tecNavBtn2'}>2</NavLink></li>
        <li onClick={()=>test('3')}><NavLink to={"/Technology/spaceCapsule"} className={'tecNavBtn3'}>3</NavLink></li>
    </ul>
    )
}