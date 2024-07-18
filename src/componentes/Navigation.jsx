import { useState} from 'react'
import { NavLink} from 'react-router-dom'

export default function Nav() {    

    const [toggle, setToggle] = useState(false)

    function toggleBtn() {
         setToggle((e)=> {
          return !e
         })
         return console.log(toggle)
    }

    const newClass = (a, b) => {
        const element =  document.getElementById('root')
        element.classList.remove(`${element.classList[0]}`)
        document.getElementsByClassName(b)[0].click()

        if(toggle) {
            setToggle((e)=> {
                return !e && element.classList.add(a)
            })
        } 
        else {
            return element.classList.add(a)
        }
    }
    
    return(
        <>
        <header className="flex">
            <div>
                <img src="/multipage-react-spaceTravel-project/assets/logo.svg" alt="logo" className="logo"/>
            </div>
            <button className= {toggle ? "close-btn" : "burger-btn"} onClick={()=> toggleBtn()}></button>
            <nav className='home-nav'>
                <ul className="flex uppercase  primary-navbar underline" id = {toggle ? 'open-menu':null}>
                    <li onClick={()=>newClass('home', 'home-btn')}><NavLink to="/multipage-react-spaceTravel-project" className="letter-spacing-2 home-btn"><span>00</span>Home</NavLink></li>
                    <li onClick={()=>newClass('destination', 'destination-btn')}><NavLink to='/Destination/moon' className="letter-spacing-2 destination-btn"><span>01</span>destination</NavLink></li>
                    <li onClick={()=>newClass('crew', 'crew-btn')}><NavLink to='/Crew/douglas-hurley' className="letter-spacing-2 crew-btn"><span>02</span>crew</NavLink></li>
                    <li onClick={()=>newClass('technology', 'technology-btn')}><NavLink to='/Technology/launch-vehicle' className="letter-spacing-2 technology-btn"><span>03</span>technology</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}