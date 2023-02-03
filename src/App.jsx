
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Feature from './components/Feature/Feature'
import Offer from './components/Offer/Offer'
import About from './components/About/About'
import Ubicacion from './components/Ubicacion/Ubicacion'
import './style.css'

function App() {
  return (
    <div className="App">
     <NavBar />
     <Header />
     <Feature />
     <Offer />
     <About />
     <Ubicacion />
    </div>
  )
}

export default App
