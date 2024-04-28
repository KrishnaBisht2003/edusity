import React from 'react'
import Msg from '../../assets/msg-icon.png'
import Mail from '../../assets/mail-icon.png'
import Phone from '../../assets/phone-icon.png'
import Loc from '../../assets/location-icon.png'

function ContactUs() {
  return (
    <div className='m-[5%] md:m-[10%] '>
        <div className='w-[90%]'>
            <div className='flex flex-col text-center'>
                <p className='text-[15px] mt-[70px] font-sans text-[#212ea0] font-bold'>CONTACT US</p>
                <h2 className='text-[32px] text-[##000f38] mt-[5px] font-bold'>Get in Touch</h2>
            </div>
            <div className='my-[80px] flex flex-col sm:flex-row'>
                <div>
                    <h3 className='flex items-center text-[#000f38] text-[25px] font-medium mb-[20px] font-sans'>Send us a message <img className='w-[35px] m-[10px]' src= {Msg} alt='/'></img></h3>
                    <p className='max-w-[450px]'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul>
                        <li className='flex'><img className='w-[25px] mr-[10px]' src={Mail} alt='/'></img>Contact@GreatStack.dev</li>
                        <li className='flex'><img className='w-[25px] mr-[10px]' src={Phone} alt='/'></img>+1 123-456-7890</li>
                        <li className='flex'><img className='w-[25px] mr-[10px]' src={Loc} alt='/'></img>77 Massachusetts Ave, Cambridge</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs