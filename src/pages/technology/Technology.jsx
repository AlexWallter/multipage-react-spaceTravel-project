import TechnologyNavBar from '/src/componentes/TechnologyNavBar.jsx'
import { useEffect } from 'react'
import { useNavIndex } from '../../hooks/useNavIndex'

export default function technology({data}) {
    
    const indexValue = useNavIndex((state)=> state.indexValue)
    const indexRestart = useNavIndex((state)=> state.NavIndex)
    useEffect(()=>{
        indexRestart(0)
        console.log()
    }, [])
    
    if(indexValue<3) {
    return (
        <>
        <div className="technology-container grid conatiner flow">
            <h1 className="numered-title technology-title"><span>03</span>SPACE LAUNCH 101</h1>
            <nav className="technology-nav">
                <TechnologyNavBar/>
            </nav>
            <article className="technology-info">
                <header className="ff-sans-cond fs-300 uppercase letter-spacing-2 light-font">the technology...</header>
                <h2 className="ff-serif fs-700 uppercase letter-spacing-2">{data[indexValue].name}</h2>
                <p className="fs-400 light-font">{data[indexValue].description}</p>
            </article>
            <picture className= "technology-image">
                <source media={"(min-width: 895px)"} srcSet= {data[indexValue].images.portrait} />
                <img src= {data[indexValue].images.landscape} />
            </picture>
        </div>
        </>

)
    } 
}