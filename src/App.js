import { useEffect } from 'react';
import Aos from 'aos';


import './App.css';

import NavBarSocial from './components/NavBarSocial';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <NavBarSocial />
    </div>
  );
}

export default App;
