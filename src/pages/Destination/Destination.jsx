import DestinationNavBar from '/src/componentes/DestinationNavBar.jsx'

export default function destination({data}) {
    const img = data[0].images.png
    return (
        <>
        <main className="grid container destination-container flow">
                <h1 className="numered-title"><span>01</span>Pick your destination</h1>
                <img src={img} className='destination-photo' alt="moon" />
            <div className="destination-info flow">
                <DestinationNavBar/>
                <h2 className="ff-serif fs-800 uppercase letter-spacing-2">{data[0].name}</h2>
                <p className="fs-400 light-font">{data[0].description}</p>
            </div>
            <div className="destination-meta">
                <div>
                    <h3 className="uppercase ff-sans-cond fs-200 light-font letter-spacing-1">AVG. DISTANCE</h3>
                    <p className="uppercase ff-serif fs-meta">{data[0].distance}</p>
                </div>
                <div>
                    <h3 className="uppercase ff-sans-cond fs-200 light-font letter-spacing-1">Est. travel time</h3>
                    <p className="uppercase ff-serif fs-meta">{data[0].travel}</p>
                </div>
            </div>
        </main>
        </>
    )
}