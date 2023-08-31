// // src/App.js
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import './App.css';
import LandingPage from './LandingPage';


// ... rest of the code

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <Route path="/" element={<LandingPage />} />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

