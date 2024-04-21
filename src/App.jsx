import  React  from 'react'

import './App.css'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Projects from './Components/projects/Projects'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects/>
    </>
  )
}
