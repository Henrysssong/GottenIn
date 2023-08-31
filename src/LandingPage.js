import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h2>Our Mission</h2>
      <p>Helping applicants get referred and assisting employees in earning bonuses by finding the right candidates to refer.</p>
      
      <div className="portal-container">
        <div className="portal-block">
          <img src="path_to_applicant_image.jpg" alt="Applicant" />
          <p>Description for applicants</p>
          <button onClick={() => window.location.href='/Applicant.js'}>Applicant Portal</button>
        </div>
        
        <div className="portal-block">
          <img src="path_to_employee_image.jpg" alt="Employee" />
          <p>Description for employees</p>
          <button onClick={() => window.location.href='/employee'}>Employee Portal</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
