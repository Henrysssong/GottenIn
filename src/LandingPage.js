import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h2>GottenIn, platform to connect applicant and employees to easily get an effective referral.</h2>
      
      <div className="portal-container">
        <div className="portal-block">
          <img src="applicant_image.jpg" alt="Applicant" />
          <p className="landingPageText">Nowadays, referral had gotten more and more crucial in the recruiting process. According to one of Amazon's hiring manager, 11/13 of offers are for those who had a referral. Yet it is slow and tiring to keep asking for referral and getting ignored. At GottenIn, we connect you with employees from your dream company so and save your precious time.</p>
          <button onClick={() => window.location.href='/applicant'}>Applicant Portal</button>
        </div>
        
        <div className="portal-block">
          <img src="employee_image.jpg" alt="Employee" />
          <p className="landingPageText">Getting a bonus or helping others is cool. But come on, job already takes a lot of time. You don't want to waste your time and spend your mind talking to applicants you don't feel qualified. At GottenIn, you have access to a sheet of applicants. Just contact or refer the ones who you think have a shot.</p>
          <button onClick={() => window.location.href='/employee'}>Employee Portal</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
