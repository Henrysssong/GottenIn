// // src/App.js
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import './App.css';

// ... rest of the code

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <h2>Get closer to your dream job!</h2>
              <p>Fill out the form, and employees from your dream company might see your info and potentially contact you.</p>
              <button onClick={() => window.location.href='https://forms.gle/RdL3pVgd3wh9nPny9'}>Get Referred</button>
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

