import React from 'react';

const Schedule = () => {
  return (
    <div className="bg-primaryColor flex items-center justify-center h-screen">
      <div className="bg-primaryColor py-4">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center text-4xl">
            <span className="text-6xl text-[#383848]"><i className="fa-solid fa-mug-hot"></i></span>
            
            <p className="text-white text-3xl font-[Quicksand] font-extrabold text-center">Breakfast</p>
            <p className="text-lg text-center text-white">8.00 am 10.00 am</p>
          </div>
          <hr className="w-20 my-0 border border-dashed border-gray-500" />
          <div className="flex flex-col items-center text-4xl">
            <span className="text-6xl text-[#383848]"><i className="fa-solid fa-bowl-food"></i></span>
            
            <p className="text-white text-3xl font-[Quicksand] font-extrabold text-center">Lunch</p>
            <p className="text-lg text-center text-white">1.00 am 2.00 am</p>
          </div>
          <hr className="w-20 my-0 border border-dashed border-gray-500" />
          <div className="flex flex-col items-center text-4xl">
            <span className="text-6xl text-[#383848]"><i className="fa-solid fa-utensils"></i></span>
            
            <p className="text-white text-3xl font-[Quicksand] font-extrabold text-center">Dinner</p>
            <p className="text-lg text-center text-white">7.00 am 9.00 am</p>
          </div>
          <hr className="w-20 my-0 border border-dashed border-gray-500" />
          <div className="flex flex-col items-center text-4xl">
            <span className="text-6xl text-[#383848]"><i className="fa-solid fa-ice-cream"></i></span>
            
            <p className="text-white text-3xl font-[Quicksand] font-extrabold text-center">Dessert</p>
            <p className="text-lg text-center text-white">All Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
