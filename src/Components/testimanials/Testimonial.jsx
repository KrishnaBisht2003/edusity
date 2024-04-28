import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userData from '../testimanials/data';
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function Testimonial() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute flex top-1/2  transform -translate-y-1/2">
        <div className="bg-[#212EA0] flex items-center rounded-full  w-full">
          <MdArrowBack className="m-0 rounded-full" size={25} color="white" />
        </div>
      </div>
    ),
    nextArrow: (
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <div className='bg-[#212EA0] flex items-center rounded-full w-full'>
          <MdArrowForward className="m-0 rounded-full " size={25} color="white" />
        </div>
      </div>
    ),
  };

  return (
    
    <div className="mx-[5%] lg:mx-[10%]  relative">
      <div className='w-[90%] mx-auto '>
        <div className='flex flex-col items-center' >
                <p className='text-[15px] mt-[30px] font-sans text-[#212ea0] font-bold'>TESTIMONIALS</p>
                <h2 className='text-[32px] text-[##000f38] mt-[5px] font-bold'>What Student Says</h2>
        </div>
        <Slider className='my-[80px]' {...settings} ref={sliderRef}>
          {userData.map((data) => (
            <div key={data.id} className="w-full lg:w-[50%] m-auto">
              <div className="flex flex-col justify-center  m-2 p-2 sm:m-6 sm:p-8 rounded-lg shadow-lg">
                <div className='flex flex-col sm:flex-row items-center  mb-4 '>
                  <img className="w-[65px] m-2 sm:m-0 border-4 top-0 right-0 border-[#212EA0] rounded-full" src={data.img} alt="/" />
                  <div className='flex-col m-2 sm:ml-4'>
                    <h3 className="text-[#212ea0] font-bold text-lg">{data.name}</h3>
                    <p className='text-[#676767]'>{data.loc}</p>
                  </div>
                </div>
                <p className='text-[14px] text-[#676767] leading-7 mx-2 font-serif'>{data.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;