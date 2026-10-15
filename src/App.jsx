import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../about/About'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/About" element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
