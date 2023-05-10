import { useEffect } from 'react';
import Aos from 'aos';


import './App.css';

import NavBarSocial from './components/NavBarSocial';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

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
      <footer className="bg-gray-800 text-white py-4 px-8">Mi pie de página</footer>
    </div>
  );
}

export default App;
