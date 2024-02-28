
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import Navbar from './components/Navbar'
import SinglePlayer from './components/SinglePlayer'



function App() {
 

  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/all' element={<NewPlayerForm/>} />
          <Route path='/new' element={<SinglePlayer/>} />
        </Routes>

    </>
  )
}

export default App
