import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import "@fontsource/quicksand";


const Carousel = () => {
  const slides = [
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/home-slider2.jpg'
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/slider-home1.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
    }
  ];

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='max-w[1400px] h-[780px] w-full m-auto py-5 px-4 font-[Quicksand] relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        <div className='absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center'>
          <h1 className='text-white text-7xl font-custom mb-2'>
          WE'RE <span className="text-primaryColor">LABOOM</span> RESTAURANT
          </h1> <br />
          <h3 className='text-white text-xl  mb-4'>Traditional Turkish Delicacies</h3> <br />
          <button className='border border-white hover:border-primaryColor text-white  hover:text-primaryColor font-bold text-lg py-2 px-6 rounded-full'>Explore now</button>
        </div>
      </div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    </div>
  )
}

export default Carousel