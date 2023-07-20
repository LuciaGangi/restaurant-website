import React from "react";

const Welcome = () => {
  return (
    <section className="bg-white p-5 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-[Quicksand] font-custom2 text-gray-900 leading-tight mb-4">
          Welcome To The La Boom
        </h1>
        <h2 className="text-xl text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:h-full">
        <div className="md:w-1/2 flex flex-col items-center justify-center px-8 mb-8 md:mb-0">
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-justify">
              Welcome. This is La Boom. Elegant & sophisticated restaurant
              template. Royal plate offers different home page layouts with
              smart and unique design, showcasing beautifully designed
              elements every restaurant website should have. Smooth animations,
              fast loading and engaging user experience are just some of the
              features this template offers. So, give it a try and dive into a
              world of La Boom restaurant websites.
            </p>
            <br />
            <h2 className="font-[Jey] text-7xl">Ali tufan</h2>
            <span>Ali Tufan / CEO</span>
            <button className="bg-gray-800 hover:bg-primaryColor text-xs text-white hover:text-black font-bold py-3 px-4 rounded-3xl mt-6 inline-block w-36">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="h-full relative grid grid-cols-2 gap-1">
            <img
              src="http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/welcome1.png"
              alt="1"
              className="mt-4 transform  hover:scale-75 transition duration-300"
            />
            <img
              src="http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/welcome2.png"
              alt="2"
              className="mt-16 transform  hover:scale-75 transition duration-300"
            />
            <img
              src="http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/welcome3.png"
              alt="3"
              className="mb-56 transform  hover:scale-75 transition duration-300"
            />
            <img
              src="http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/welcome4.png"
              alt="4"
              className="mt-10 transform  hover:scale-75 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
