// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import Hero from './Components/Hero';
import Expertise from './Components/Expertise';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbars/>
     <Hero/>
     <Expertise/>
     <About/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
