import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';

import NavBarSocial from './components/NavBarSocial';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Welcome from './components/Welcome';
import TodayDishes from './components/TodayDishes';

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
      <footer className="bg-gray-800 text-white py-4 px-8">Mi pie de página</footer>
    </div>
  );
}

export default App;
