import CrewNavBar from '/src/componentes/CrewNavBar.jsx'

export default function CrewMark({data}) {
    return(
        <div className="crew-container grid container">
            <h1 className="numered-title crew-title"><span>04</span>Meet your crew</h1>

            <article className="crewMember-info">
                <header className="crew-job fs-600 uppercase letter-spacing-2">{data[3].role}</header>
                <h2 className="ff-serif fs-700 uppercase letter-spacing-2">{data[3].name}</h2>
                <p className="ff-sans-normal fs-400 light-font">{data[3].bio}</p>
            </article>
            <nav className="crew-nav">
                <CrewNavBar/>
            </nav>
            <div className="crewMember-image-container">
                <img src={data[3].images.png} alt="Crew member" className="crewMember-image"/>
            </div>
        </div>
    )
}