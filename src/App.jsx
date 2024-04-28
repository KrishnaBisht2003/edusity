import  React  from 'react'

import './App.css'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Projects from './Components/projects/Projects'
import Gallery from './Components/gallery/Gallery'
import Testimonial from './Components/testimanials/Testimonial'
import ContactUs from './Components/contact us/ContactUs'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects/>
      <Gallery/>
      <Testimonial/>
      <ContactUs/>
    </>
  )
}
