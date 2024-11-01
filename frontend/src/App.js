import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/dropdown/Home';
import Contact from './pages/Contact';
import CollabSolu from './pages/dropdown/CollabSolu';
import IToutsourcing from './pages/dropdown/IToutsourcing';
import Cybersecuriry from './pages/dropdown/Cybersecurity';
import DBM from './pages/dropdown/DBM';
import TT from './pages/dropdown/TT';
import ML from './pages/dropdown/ML';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/IToutsourcing" element={<IToutsourcing />} />
        <Route path="/CollabSolu" element={<CollabSolu />} />
        <Route path="/Cybersecuriry" element={<Cybersecuriry />} />
        <Route path="/DBM" element={<DBM />} />
        <Route path="/TT" element={<TT />} />
        <Route path="/ML" element={<ML />} />
      </Routes>
    </Router>
  );
}

export default App;
