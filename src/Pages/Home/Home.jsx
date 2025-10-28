import React from 'react';
import "./Home.css";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 hero-section">
        
        {/* LEFT SIDE */}
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative hero-background">
          <div className="decorative-circle"></div>
          <div className="decorative-circle2"></div>

          <div className="text-content text-white">
            <h1>
              Welcome to<br />
              Thai Green<br />
              Power<br />
              Solution
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 p-0 hero-image">
          <img 
            src="https://www.hul.co.in/content-images/92ui5egz/production/bdd064eccda122b148f6834646f986d4a409a1d5-1920x1080.jpg?rect=1,0,1919,1080&w=1400&h=788&fit=crop&auto=format" 
            alt="Hindustan Unilever Store"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

      </div>
    </div>
  );
}
