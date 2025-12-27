// InnovationHubPremium.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  './innovation.css';
import { useState } from "react";
import InnovationImg from "..//../assets/images/innovation/bgImg.png"
import {Link} from 'react-router-dom'
const InnovationHub = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="innovation-hub">

      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">INNOVATION HUB – FreCx LABS by TGPS</h1>
          <p className="lead mt-3">
            Where industries evolve, ideas transform, and the future takes shape.
          </p>
          <p>Innovation isn’t a department here — <strong>it’s a culture.</strong></p>
        </div>
      </section>

      
     <section className="container-fluid" style={{backgroundColor:"#D2D2C8"}}>
<div className="story-carousel py-5">
  {[
    {
      title: "The Solar Shift",
      desc: "High-efficiency solar grids powering industries and reducing energy dependency."
    },
    {
      title: "Mobility Without Emissions",
      desc: "From EV manufacturing to predictive fleet management, redefining how the world moves."
    },
    {
      title: "The Rise of Decentralized Work",
      desc: "DeMask — an identity-secure, decentralized meeting platform transforming communication."
    },
    {
      title: "Blockchain for a Greener Planet",
      desc: "Frequency Chain X turning renewable energy tracking into a transparent global system."
    }
  ]
    /* duplicate for seamless loop */
    .concat([
      {
        title: "The Solar Shift",
        desc: "High-efficiency solar grids powering industries and reducing energy dependency."
      },
      {
        title: "Mobility Without Emissions",
        desc: "From EV manufacturing to predictive fleet management, redefining how the world moves."
      },
      {
        title: "The Rise of Decentralized Work",
        desc: "DeMask — an identity-secure, decentralized meeting platform transforming communication."
      },
      {
        title: "Blockchain for a Greener Planet",
        desc: "Frequency Chain X turning renewable energy tracking into a transparent global system."
      }
    ])
    .map((story, idx) => {
      // Professional gradient colors
      const colors = [
        "linear-gradient(135deg, #06298A, #4F7CFF)",
        "linear-gradient(135deg, #0A8F5E, #33D1A4)",
        "linear-gradient(135deg, #B03E5C, #F15A80)",
        "linear-gradient(135deg, #FF7F0F, #FFBB66)"
      ];
      const bgColor = colors[idx % colors.length];

      return (
        <div
          key={idx}
          className="story-card card shadow-sm text-white"
          style={{ background: bgColor }}
        >
          <div className="card-body">
            <h5 className="card-title">{story.title}</h5>
            <p className="card-text">{story.desc}</p>
          </div>
        </div>
      );
    })}
</div>

     </section>
                              {/* section------3 */}


           <div className="container-fluid bg-white">

      {/* Top Heading */}
      <h1
        className="text-center pt-5 fw-bold"
        style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        FUTURE TRACKS
      </h1>
      <p className="text-center fw-bold">Choose your track. Explore your future.</p>

      {/* Bottom Card */}
      <div
        className="card p-4 shadow-lg"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        }}
      >
        <div className="row g-4">

          {/* Row 1 */}
          <div className="col-md-6">
            <div className="p-3 h-100 rounded-3 border border-light shadow-sm hover-effect">
              <h5 className="fw-bold" style={{color:"#365FD5"}}>Clean Energy Futures</h5>
              <p>Our Clean Energy Futures track focuses on building planet-positive systems where sustainability and technology work hand in hand. Through solar innovation, net-zero missions, and advanced carbon reduction models, we design scalable energy solutions that reduce environmental impact while enabling long-term economic growth. This track is driven by the belief that responsible energy today defines a resilient tomorrow.</p>
              <button className="btn text-white" style={{backgroundColor:"#06298A"}}
              onClick={()=>setShowModal(true)}>Let's Explore</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 h-100 rounded-3 border border-light shadow-sm hover-effect">
              <h5 className="fw-bold" style={{color:"#365FD5"}}>Mobility 2.0</h5>
              <p>Mobility 2.0 reimagines transportation across the entire ecosystem—from manufacturing floors to last-mile delivery. With a strong focus on EV manufacturing, intelligent charging networks, fleet automation, and zero-emission logistics, this track accelerates the shift toward cleaner, smarter, and more efficient mobility systems designed for future cities and industries.</p>
              <button className="btn text-white" style={{backgroundColor:"#06298A"}}
              onClick={()=>setShowModal(true)}>Let's Explore</button>
            </div>
            
          </div>

          {/* Row 2 */}
          <div className="col-md-6">
            <div className="p-3 h-100 rounded-3 border border-light shadow-sm hover-effect">
              <h5 className="fw-bold" style={{color:"#365FD5"}}>Decentralized World</h5>
              <p>The Decentralized World track empowers industries through transparency, security, and digital independence. Anchored by Frequency Chain X, decentralized application development, DeMask for decentralized meetings, and Cliff Chat for secure communication, this ecosystem enables organizations to operate without centralized control—unlocking trust, resilience, and limitless digital freedom.</p>
              <button className="btn text-white" style={{backgroundColor:"#06298A"}}
              onClick={()=>setShowModal(true)}>Let's Explore</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 h-100 rounded-3 border border-light shadow-sm hover-effect">
              <h5 className="fw-bold" style={{color:"#365FD5"}}>Innovation Alliances</h5>
              <p>Innovation Alliances bring collaboration to the core of progress. Through college partnerships, startup collaborations, developer communities, and joint ventures with corporates, this track focuses on co-creating future-ready solutions. By uniting institutions, innovators, and enterprises, we transform ideas into impactful, real-world outcomes.</p>
              <button className="btn text-white" style={{backgroundColor:"#06298A"}}
              onClick={()=>setShowModal(true)}>Let's Explore</button>
            </div>
          </div>

        </div>
      </div>
    </div>                    


                            {/* SECTION -------4 */}

     <section className="container-fluid bg-white">
                 <section className="container py-5 bg-white">

      {/* TOP HEADING */}
      <h1
        className="text-center fw-bold mb-2"
        style={{
          background: "linear-gradient(90deg, #06298A, #4f7cff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Idea-to-Impact Pipeline
      </h1>

      {/* SMALL PARA */}
      <p className="text-center text-muted mb-5">
       A simple, powerful map of how TGPS turns ideas into global solutions.
      </p>

      {/* FOUR BOX ROW */}
      <div className="row g-4">

        {/* BOX 1 */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100 text-center p-4 premium-box">
            <div className="icon-circle mb-3">🚀</div>
            <h5 className="fw-bold">Discover the Challenge</h5>
            <p className="text-muted small">
              We identify real-world gaps in energy, mobility, or digital ecosystems.
            </p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100 text-center p-4 premium-box">
            <div className="icon-circle mb-3">🎨</div>
            <h5 className="fw-bold">Prototype the Solution</h5>
            <p className="text-muted small">
              Our engineers, developers, and research partners co-create functional models.

            </p>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100 text-center p-4 premium-box">
            <div className="icon-circle mb-3">📊</div>
            <h5 className="fw-bold">Test, Validate & Improve</h5>
            <p className="text-muted small">
              Proof-of-concept deployments, user trials, energy audits, and system evaluations.
            </p>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100 text-center p-4 premium-box">
            <div className="icon-circle mb-3">📢</div>
            <h5 className="fw-bold">Scale Globally</h5>
            <p className="text-muted small">
              Solutions become products, services, and technologies deployed across industries.
            </p>
          </div>
        </div>

      </div>
    </section>            
      
     </section>


         {/* new content */}
      
    



                                     {/* SECTION -------- 3 */}
 {/* FIXED HERO */}
<section className="fixed-hero">
  <img
    src={InnovationImg }
    alt="InovationImg"
    className="fixed-hero-img"
  />

  <div className="fixed-hero-content d-flex align-items-center">
    <div className="container text-white">
      {/* <h1 className="display-4 fw-bold">
        You are unstoppable
      </h1>
      <p className="fs-5">
        30H long lasting fragrance
      </p> */}
    </div>
  </div>
</section>


{/* NORMAL SCROLL SECTION */}
<section className="after-hero py-5">
  <div className="container">
    <h2></h2>
    <p>
      
    </p>
    <p style={{ height: "100vh" }}>
      
    </p>
  </div>
</section>

                         {/* SECTION ------ 5 */}

    <section className="container-fluid bg-white">
  
 <section className="container my-5 participation-zone">

  {/* TOP HEADING */}
  <h1
    className="text-center fw-bold mb-2"
    style={{
      background: "linear-gradient(90deg, #06298A, #4f7cff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Participation Zone
  </h1>

  {/* SUB TEXT */}
  <p className="text-center text-muted mb-5">
    Innovation grows faster when more minds enter the room.
  </p>

  {/* ALL ROWS WRAPPER */}
  <div className="row justify-content-center g-4">

    {/* ROW 1 */}
    <div className="col-lg-6 col-md-8">
      <div className="premium-box h-100">
        <div className="icon">🚀</div>
        <h5>For Students</h5>
        <ul className="premium-list">
          <li>Real-time industry projects</li>
          <li>Innovation challenges</li>
          <li>Internships & research access</li>
        </ul>
        <Link to="/form">
        <button className="btn premium-btn mt-3">Apply Now</button>
        </Link>
      </div>
    </div>

    <div className="col-lg-6 col-md-8">
      <div className="premium-box h-100">
        <div className="icon">💼</div>
        <h5>For Startups</h5>
        <ul className="premium-list">
          <li>Acceleration and co-incubation</li>
          <li>Market access</li>
          <li>Tech integration & testing</li>
        </ul>
       <Link to="/form">
        <button className="btn premium-btn mt-3">Apply Now</button>
        </Link>
      </div>
    </div>

    {/* ROW 2 */}
    <div className="col-lg-6 col-md-8">
      <div className="premium-box h-100">
        <div className="icon">📊</div>
        <h5>For Developers</h5>
        <ul className="premium-list">
          <li>Build on Frequency Chain X</li>
          <li>Attend hackathons</li>
          <li>API & SDK access</li>
        </ul>
        <Link to="/form">
        <button className="btn premium-btn mt-3">Apply Now</button>
        </Link>
      </div>
    </div>

    <div className="col-lg-6 col-md-8">
      <div className="premium-box h-100">
        <div className="icon">🎨</div>
        <h5>For Corporates</h5>
        <ul className="premium-list">
          <li>R&D partnerships</li>
          <li>Technology licensing</li>
          <li>Turnkey project solutions</li>
        </ul>
        <Link to="/form">
        <button className="btn premium-btn mt-3">Apply Now</button>
        </Link>
      </div>
    </div>

    {/* ROW 3 - CENTER CARD */}
    <div className="col-lg-6 col-md-8">
      <div className="premium-box h-100">
        <div className="icon">⚙️</div>
        <h5>For Innovators</h5>
        <ul className="premium-list">
          <li>Submit ideas</li>
          <li>Join think tanks</li>
          <li>Get mentorship from TGPS experts</li>
        </ul>
        <Link to="/form">
        <button className="btn premium-btn mt-3">Apply Now</button>
        </Link>
      </div>
    </div>

  </div>
</section>


      </section>             
    
      
    </div>

                       {/* popup form */}

            {/* ===== POPUP FORM MODAL ===== */}
{showModal && (
  <>
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content rounded-4 shadow-lg">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Explore Your Future Track</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Interested Track</label>
                <select className="form-select">
                  <option>Select a track</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Data Science</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Tell us your goals"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              className="btn btn-light"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn text-white"
              style={{ backgroundColor: "#06298A" }}
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Backdrop */}
    <div className="modal-backdrop fade show"></div>
  </>
)}
           


    
    </>
  );
};

export default InnovationHub;
