import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import "@fontsource/quicksand";

const Chef = () => {
  const slides = [
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/person3-1.png',
      title: 'Anita Golden',
      subtitle: 'Head Chief',
      SocialMedia: (
        <span>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
        {' '}
        <a href="#"><i className="fa-solid fa-basketball"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
      </span>
      )
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/person4-1.png',
      title: 'Benderd Dimitor',
      subtitle: 'Head Chief',
      SocialMedia: (
        <span>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
        {' '}
        <a href="#"><i className="fa-solid fa-basketball"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
      </span>
      )
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/team1-260x350.png',
      title: 'Anna Taylor',
      subtitle: 'Head Chief',
      SocialMedia: (
        <span>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
        {' '}
        <a href="#"><i className="fa-solid fa-basketball"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
      </span>
      )
    },
    {
      url: 'http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/person2-1.png',
      title: 'Alex Wilson',
      subtitle: 'Head Chief',
      SocialMedia: (
        <span>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
        {' '}
        <a href="#"><i className="fa-solid fa-basketball"></i></a>
        {' '}
        <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
      </span>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1); // Nuevo estado para rastrear el índice de la tarjeta en la que se realiza el hover

  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleCardMouseEnter = (index) => {
    setHoverIndex(index); // Establece el índice de la tarjeta en la que se realiza el hover
  };

  const handleCardMouseLeave = () => {
    setHoverIndex(-1); // Restablece el índice cuando se sale del hover
  };

  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center relative'>
      <h1 className='text-6xl mt-8 mb-4 font-bold text-[#20202f] font-[Quicksand]'>Our Awesome Chef</h1>
      <h2 className='text-lg mb-6 text-black font-[Graviola]'>Meet Professional Cook Team</h2>
      <br />
      <div className='absolute inset-0 bg-cover bg-center'></div>
      <div className='flex justify-between items-center z-10 gap-20'>
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className='bg-white py-8 px-6 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border border-gray-200'
            style={{ width: "300px", height: "450px" }}
            onMouseEnter={() => handleCardMouseEnter(index)} // Pasa el índice de la tarjeta al manejar el evento onMouseEnter
            onMouseLeave={handleCardMouseLeave}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className='w-full h-auto object-cover -mt-20 flex-1 mb-4 transition-opacity duration-500'
              style={{ opacity: hoverIndex === index ? 0.8 : 1 }} // Aplica el estilo solo a la tarjeta en la que se realiza el hover
            />
            <div className=''>
              <h3 className='text-3xl font-bold text-black font-[Quicksand]'>{slide.title}</h3>
              <h4 className='text-base text-black font-[Quicksand]'>{slide.subtitle}</h4>
              <p className={`text-xl font-bold mt-2 text-[#20202f] font-[Quicksand] ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}> 
                {slide.SocialMedia}
              </p>
            </div>
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

export default Chef;


