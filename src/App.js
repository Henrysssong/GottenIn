// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import './App.css';
import LandingPage from './LandingPage';
import Applicant from './Applicant';
import Employee from './Employee';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

