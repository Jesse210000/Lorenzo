import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/compoments/Home';
import About from '../src/compoments/About';
import Entertainment from '../src/compoments/Entertainment';
import Media from '../src/compoments/Media';
import Contact from '../src/compoments/Contact';
import Prices from '../src/compoments/Prices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  );
}

export default App;
