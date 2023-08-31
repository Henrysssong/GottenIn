// src/Applicant.js

import React from 'react';
import './Applicant.css';

function Applicant() {
  return (
    <section id="Applicant" className="applicant-section">
      <h2>Get referred easily at GottenIn!</h2>
      <p>Enter your info below, and employees from your dream company might contact you!</p>
      <button onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScWyHRdsSNuL4TTu2DnW9RlZbOc8kukjURPitZDkOTNzH3CzQ/viewform?usp=sf_link'}>Applicant Portal</button>
    </section>
  );
}

export default Applicant;