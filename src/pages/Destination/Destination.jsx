/*hooks*/
import { useEffect } from 'react'
import { useNavIndex } from '../../hooks/useNavIndex'

/*components*/
import DestinationNavBar from '/src/componentes/DestinationNavBar.jsx'

export default function destination({data}) {
    const newIndex = useNavIndex((state)=> state.indexValue)
    const indexRestart = useNavIndex((state)=> state.NavIndex)
    
    useEffect(()=>{
        indexRestart(0)
    }, [])    

    return (
        <>
        <main className="grid container destination-container flow">
                <h1 className="numered-title"><span>01</span>Pick your destination</h1>
                <img src={data[newIndex].images.png} className='destination-photo' alt={data[newIndex].name} />
            <div className="destination-info flow">
                <DestinationNavBar/>
                <h2 className="ff-serif fs-800 uppercase letter-spacing-2">{data[newIndex].name}</h2>
                <p className="fs-400 light-font">{data[newIndex].description}</p>
            </div>
            <div className="destination-meta">
                <div>
                    <h3 className="uppercase ff-sans-cond fs-200 light-font letter-spacing-1">AVG. DISTANCE</h3>
                    <p className="uppercase ff-serif fs-meta">{data[newIndex].distance}</p>
                </div>
                <div>
                    <h3 className="uppercase ff-sans-cond fs-200 light-font letter-spacing-1">Est. travel time</h3>
                    <p className="uppercase ff-serif fs-meta">{data[newIndex].travel}</p>
                </div>
            </div>
        </main>
        </>
    )
}