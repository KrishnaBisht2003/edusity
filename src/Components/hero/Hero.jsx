import React from 'react'
import heroImg from '../../assets/hero.png'

function Hero() {
  return (
    <div className='h-screen bg-center color-[#ffffff] bg-gradient-to-r from-blue-500 to-purple-500 bg-cover' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImg})` }}>
        <div className=''>

          
        </div>
    </div>
  )
}

export default Hero