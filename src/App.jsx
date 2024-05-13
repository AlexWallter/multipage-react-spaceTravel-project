//=================================PAGES====================================//
import Home from './Home'
//=========Destinations==========//
import Destination from './pages/Destination/Destination.jsx'
import DestinationMars from './pages/Destination/DestinationMars.jsx'
import DestinationTitan from './pages/Destination/DestinationTitan.jsx'
import DestinationEurope from './pages/Destination/DestinationEurope.jsx'

//=========Crew==========//
import Crew from './pages/Crew/Crew.jsx'
import CrewMark from './pages/Crew/CrewMark.jsx'
import CrewVictor from './pages/Crew/CrewVictor.jsx'
import CrewAnousheh from './pages/Crew/CrewAnousheh.jsx'

//=========Technology==========//
import Technology from './pages/technology/Technology.jsx'
import TechnologySpaceport from './pages/technology/TechnologySpaceport.jsx'
import TechnologySpaceCapsule from './pages/technology/TechnologySpaceCapsule.jsx'

//=================================components====================================//
import Nav from './componentes/Navigation'



import './App.css'
import Data from './data.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="http://AlexWallter.github.io/multipage-react-spaceTravel-project" element={<Home />}/>
          
          <Route path='/Destination/moon' element={<Destination  data={Data.destinations}/>}/>
          <Route path='/Destination/mars' element={<DestinationMars  data={Data.destinations}/>}/>
          <Route path='/Destination/titan' element={<DestinationTitan  data={Data.destinations}/>}/>
          <Route path='/Destination/europe' element={<DestinationEurope  data={Data.destinations}/>}/>

          <Route path='/Crew/douglas-hurley' element={<Crew data={Data.crew}/>} />
          <Route path='/Crew/mark-shuttleworth' element={<CrewMark data={Data.crew}/>}/>
          <Route path='/Crew/victor-glover' element={<CrewVictor data={Data.crew}/>}/>
          <Route path='/Crew/anousheh-ansari' element={<CrewAnousheh data={Data.crew}/>}/>
              
          <Route path='/Technology/launch-vehicle' element={<Technology data={Data.technology}/>}/>
          <Route path='/Technology/spaceport' element={<TechnologySpaceport data={Data.technology}/>}></Route> 
          <Route path='/Technology/spaceCapsule' element={<TechnologySpaceCapsule data={Data.technology}/>}></Route>         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App