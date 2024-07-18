//=================================PAGES====================================//
import Home from './Home.jsx'
import Destination from './pages/Destination/Destination.jsx'
import Crew from './pages/Crew/Crew.jsx'
import Technology from './pages/technology/Technology.jsx'

//=================================components====================================//
import Nav from './componentes/Navigation'

import './App.css'
import Data from './data.json'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/multipage-react-spaceTravel-project" element={<Home />}/>
          
          <Route path='/Destination/:id' element={<Destination  data={Data.destinations}/>}/>

          <Route path='/Crew/:id' element={<Crew data={Data.crew}/>} />
              
          <Route path='/Technology/:id' element={<Technology data={Data.technology}/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App