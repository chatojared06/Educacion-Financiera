import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../Components/Scroll/ScrollToTop'
import Navbar from '../Components/navbar';
import Body from '../Components/Body';
import Contactenos from '../Components/Contactenos';
import Footer from '../Components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className='pb-16 bg-gray-300'>
      <Navbar />
      <Routes>
            <Route path="/" element={
              <>
                <Body />
              </>
            } />
            <Route path="/contactenos" element={<Contactenos />} />
          </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
