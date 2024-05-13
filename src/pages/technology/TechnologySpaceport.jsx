import TechnologyNavBar from '/src/componentes/TechnologyNavBar.jsx'

export default function technology({data}) {
    return (
        <>
        <div className="technology-container grid conatiner flow">
            <h1 className="numered-title technology-title"><span>03</span>SPACE LAUNCH 101</h1>
            <nav className="technology-nav">
                <TechnologyNavBar/>
            </nav>
            <article className="technology-info">
                <header className="ff-sans-cond fs-300 uppercase letter-spacing-2 light-font">the technology...</header>
                <h2 className="ff-serif fs-700 uppercase letter-spacing-2">{data[1].name}</h2>
                <p className="fs-400 light-font">{data[1].description}</p>
            </article>
            <picture className= "technology-image">
                <source media={"(min-width: 895px)"} srcSet= {data[1].images.portrait} />
                <img src= {data[1].images.landscape} />
            </picture>
        </div>
        </>
    )
}