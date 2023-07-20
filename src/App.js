import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';

import NavBarSocial from './components/NavBarSocial';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Welcome from './components/Welcome';
import TodayDishes from './components/TodayDishes';
import SpecialMenu from './components/SpecialMenu';
import Chef from './components/Chef';
import Schedule from './components/Schedule';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-headingColor">
      <header>
        <NavBarSocial />
        <NavBar />
      </header>
      <Carousel/>
      <Welcome />
      <TodayDishes />
      <SpecialMenu />
      <Chef />
      <Schedule />
      <footer className="bg-gray-800 text-white py-4 px-8">
      <div className="flex-1 flex items-center justify-center">
          <button className="">
            <div class="h-20 w-24 relative cursor-pointer">
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <img
                  src="http://demo.spyropress.com/themeforest/laboom/wp-content/themes/laboom/assets/images/logo.png"
                  alt=""
                />
              </div>
            </div>
          </button>
        </div>
      <div className="text-center mt-4 text-gray-400 font-[Quicksand]">
        <h1 className="text-xl font-extrabold text-primaryColor">La boom Restaurant</h1>
        <h3 className="text-lg font-bold">329 Queensberry Street, North Melbourne VIC 3051, Australia.</h3>
        <h4 className="text-md font-bold">123 456 7890</h4>
        <h5 className="text-sm font-bold">support@laboom.com</h5>
      </div>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} Polygon Theme. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
