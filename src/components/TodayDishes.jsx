import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import "@fontsource/quicksand";

const TodayDishes = () => {
  const slides = [
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog1-400x400.jpg',
      title: 'Surmai Chilli',
      subtitle: 'Subtítulo 1',
      price: '$15.00'
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog5-400x400.jpg',
      title: 'Lasal Cheese',
      subtitle: 'Subtítulo 2',
      price: '$15.00'
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog6-400x400.jpg',
      title: 'Organic Fruit Salad',
      subtitle: 'Subtítulo 3',
      price: '$15.00'
    }
  ];

  

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center relative'>
      <h1 className='text-5xl font-extrabold mb-4 text-primaryColor font-[Quicksand]'>Today Hot Dishes</h1>
      <h2 className='text-l m-3 text-white font-[Quicksand]'>The role of a good cook ware in the preparation of a sumptuous meal cannot be over

</h2> <br />
      <div
        className='absolute inset-0 bg-cover bg-center'
        
      ></div>
      <div className='flex justify-between items-center z-10 gap-32 '>
        {visibleSlides.map((slide, index) => (
          <div key={index} className='flex flex-col items-center transform  hover:scale-75 transition duration-300'>
            <img
              src={slide.url}
              alt={slide.title}
              className='rounded-full object-cover duration-500 h-80 w-80 flex-1 mb-4'
            />
            <h3 className='text-3xl font-bold text-white font-[Quicksand]'>{slide.title}</h3>
            <h4 className='text-lg text-white font-[Quicksand]'>{slide.subtitle}</h4>
            <p className='text-2xl font-bold mt-2 text-primaryColor font-[Quicksand]'>{slide.price}</p>
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default TodayDishes
