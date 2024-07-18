/*hooks*/
import { useNavIndex } from '../../hooks/useNavIndex'
import { useEffect } from 'react'
/*components*/
import CrewNavBar from '/src/componentes/CrewNavBar.jsx'

export default function Crew({data}) {
    const indexValue = useNavIndex((state)=> state.indexValue)
    const indexRestart = useNavIndex((state)=> state.NavIndex)
    
    useEffect(()=>{
        indexRestart(0)
    }, [])

    return(
        <div className="crew-container grid container">
            <h1 className="numered-title crew-title"><span>01</span>Meet your crew</h1>

            <article className="crewMember-info">
                <header className="crew-job fs-600 uppercase letter-spacing-2">{data[indexValue].role}</header>
                <h2 className="ff-serif fs-700 uppercase letter-spacing-2">{data[indexValue].name}</h2>
                <p className="ff-sans-normal fs-400 light-font">{data[indexValue].bio}</p>
            </article>
            <nav className="crew-nav">
                <CrewNavBar/>
            </nav>
            <div className="crewMember-image-container">
                <img src={data[indexValue].images.png} alt="Crew member" className="crewMember-image"/>
            </div>
        </div>
    )
}