import React from 'react';
import './LandingPage.css';
import HiringMessageBox from './HiringMessageBox';

function LandingPage() {
  return (
    <div className="landing-container">
      <HiringMessageBox />
      <h2>GottenIn is a non-profit platform designed to bridge the gap between job applicants and employees, facilitating impactful referrals with ease.</h2>
      
      <div className="portal-container">
        <div className="portal-block">
        <img src={process.env.PUBLIC_URL + "/applicant_image.jpg"} alt="Applicant" />
          <p className="landingPageText">Referrals have become increasingly pivotal in the hiring landscape. As noted by a hiring manager at Amazon, 11 out of 13 job offers are extended to candidates with referrals. However, constantly seeking referrals and facing rejection can be exhausting. GottenIn streamlines this process by directly connecting you with employees from your desired companies, saving you invaluable time.</p>
          <button onClick={() => window.location.href='/applicant'}>Applicant Portal</button>
        </div>
        
        <div className="portal-block">
          <img src={process.env.PUBLIC_URL + "/employee_image.jpg"} alt="Employee" />
          <p className="landingPageText">While earning a bonus or assisting others is commendable, let's face it—jobs are already time-consuming. You wouldn't want to invest additional hours vetting applicants you find unsuitable. With GottenIn, you get a curated list of candidates. Simply engage with or refer those who, in your opinion, stand a genuine chance.</p>
          <button onClick={() => window.location.href='/employee'}>Employee Portal</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
