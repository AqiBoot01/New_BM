// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import BMmusic from './Components/BMmusic/BMmusic';
import BMjewel from './Components/BMJewel/BMjewel';
import BMmega from './Components/BMmega/BMmega';
import BMgalaxy from './Components/BMgalaxy/BMgalaxy';
import BMgame from './Components/BMgame/BMgame';
import BMlast from './Components/BMlast/BMlast';
import Glowbg from './Components/General_Components/Glowbg/Glowbg';
// import Glowbg from './Components/General_Components/Glowbg/Glowbg';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BMmusic></BMmusic>} />
        <Route path="/bmjewel" element={<BMjewel></BMjewel>} />
        <Route path="/bmmega" element={<BMmega></BMmega>} />
        <Route path="/bmgalaxy" element={<BMgalaxy></BMgalaxy>} />
        <Route path="/bmgame" element={<BMgame></BMgame>} />
        <Route path="/bmlast" element={<BMlast></BMlast>} />
      </Routes>
          {/* <BMmusic></BMmusic> */}
          {/* <BMjewel></BMjewel> */}
          {/* <BMmega></BMmega> */}
          {/* <BMgalaxy></BMgalaxy> */}
          {/* <BMgame></BMgame> */}
          {/* <BMlast></BMlast> */}
    </BrowserRouter>

    // <Glowbg></Glowbg>

    // <Glowbg></Glowbg>
    
    
  );
}

export default App;
