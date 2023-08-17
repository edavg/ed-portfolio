import About from './components/About'
import React from 'react'
import NavBar from './navbar/NavBar'
import Home from './components/Home'
import Social from './components/Social'
import Portfolio from './components/Portfolio'
import Experiencia from './components/Experiencia'
import Contact from './components/Contact'



const App = () => {
  return (
  
    <div>
    <NavBar />
    <Home />
    <About /> 
    <Portfolio />
    <Experiencia/>
    <Contact /> 
    <Social /> 

    </div>

  )
}

export default App