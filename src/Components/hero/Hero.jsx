import React from 'react'
import Button from '../Button'
import heroImg from '../../assets/hero.png'

function Hero() {
  return (
    <div className='flex h-screen m-auto items-center justify-center bg-center text-[#ffffff] bg-gradient-to-r from-blue-500 to-purple-500 bg-cover' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImg})` }}>
        <div className='flex-col '>
          <h1 className=' '>We Ensure better education for a better world</h1>
          <Button color="#ffffff">Explore More</Button>
        </div>
    </div>
  )
}

export default Hero