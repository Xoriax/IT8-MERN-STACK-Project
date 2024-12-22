import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CollabSolu from './pages/dropdown/CollabSolu';
import IToutsourcing from './pages/dropdown/IToutsourcing';
import Cybersecurity from './pages/dropdown/Cybersecurity';
import DBM from './pages/dropdown/DBM';
import TT from './pages/dropdown/TT';
import ML from './pages/dropdown/ML';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhoWeAre from './pages/WhoWeAre';
import OurServices from './pages/OurServices';
import HelpDesk from './pages/HelpDesk';
import MW from './pages/dropdown/MW';
import Conseils from './pages/Conseil';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IToutsourcing" element={<IToutsourcing />} />
        <Route path="/CollabSolu" element={<CollabSolu />} />
        <Route path="/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/DBM" element={<DBM />} />
        <Route path="/TT" element={<TT />} />
        <Route path="/ML" element={<ML />} />
        <Route path="/MW" element={<MW />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/HelpDesk" element={<HelpDesk />} />
        <Route path="/Conseils" element={<Conseils />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
