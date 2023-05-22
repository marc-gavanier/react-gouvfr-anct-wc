import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.scss';
import Carte from './features/Carte';
import Orientation from "./features/Orientation";
import Coordinateurs from "./features/Coordinateurs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*<Route path="/" element={<Carte />}/>*/}
          {/*<Route path="/" element={<Orientation />}/>*/}
          <Route path="/" element={<Coordinateurs />}/>
          {/*<Route path="/regions" element={<Carte />}/>*/}
          {/*<Route path="/regions/:region" element={<Carte />}/>*/}
          {/*<Route path="/regions/:region/:departement" element={<Carte />}/>*/}
          {/*<Route path="/:permanence/details" element={<Carte />}/>*/}
          {/*<Route exact git cpath="/:permanence" element={<Carte />}/>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
