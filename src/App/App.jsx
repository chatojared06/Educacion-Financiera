import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Body from '../Components/Body';
import Contactenos from '../Components/Contactenos';
import './App.css';
import Footer from '../Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='pb-16 bg-gray-300'>
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
