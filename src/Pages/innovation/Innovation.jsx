


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./innovation.css";
import InnovationCarousel from "./InnovationCarousel";
export default function InnovationHub() {
  return (
    <>
      {/* ------------------- SECTION 1 (Fixed Background Hero) ------------------- */}
      <section className="hero-section d-flex align-items-center">
         <div
    className="container text-white text-center text-md-start"
    style={{
      fontSize: "clamp(14px, 2.5vw, 18px)",
      lineHeight: "1.6",
    }}
  >
    <h1 className="display-4 fw-bold">
      INNOVATION HUB – FreCx LABS BY TGPS
    </h1>

    <p className="lead mt-4 w-100 w-md-75 mx-auto mx-md-0 text-center text-md-start">
      Where industries evolve, ideas transform, and the future takes shape.
      <br /><br />
      Innovation isn’t a department here — it’s a culture. Future Labs is
      our global R&D ecosystem where clean energy, electric mobility,
      decentralization, and sustainability merge to create solutions that
      shape tomorrow.
      <br /><br />
      Every concept we explore, every prototype we build, and every
      partnership we form has one purpose: To make the world cleaner,
      smarter, and interconnected.
    </p>
  </div>
      </section>

      {/* ------------------- SECTION 2 (Premium Carousel) ------------------- */}


   <InnovationCarousel  />






      {/* ------------------- SECTION 3 (2×2 Text Box Grid) ------------------- */}


      
  <section className="py-5" >
    <div className="container-fluid">
     <div className="text-center">
       <h1 className="fw-bold" style={{color:'#001F82'}}>FUTURE TRACKS</h1>
      <p style={{color:'#3232FF'}}>Choose your track. Explore your future</p>
     </div>
      <section className="circle-wrapper py-5">
      <div className="container-fluid section-limit">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-md-6 left-section">
            <h1 className="main-title">
              <span className="highlight">Clean Energy  </span>
              <br />
              Futures
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 right-section">
           

           

            <ul className="points list-unstyled ">
              <li><span className="dot"></span>  Solar Innovation</li>
              <li><span className="dot"></span> Net Zero Missions</li>
              <li><span className="dot"></span> Carbon Reduction Models</li>
            </ul>
              <p className="right-text">
           Where sustainability meets technology to build planet-positive systems. 
            </p>
          </div>

        </div>
      </div>
    </section> 



  <section className="circle-wrapper py-5">
      <div className="container-fluid section-limit">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-md-6 left-section">
            <h1 className="main-title">
              <span className="highlight">Mobility </span>
              <br />
              2.0 
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 right-section">
            <ul className="points list-unstyled ">
              <li><span className="dot"></span>  EV Manufacturing</li>
              <li><span className="dot"></span> Charging Network</li>
              <li><span className="dot"></span>  Fleet Automation</li>
              <li><span className="dot"></span>  Zero-Emission Deliveries</li>
            </ul>
              <p className="right-text">
           Reimagining transportation from factories to last-mile logistics. 
            </p>
          </div>

        </div>
      </div>
    </section>


    <section className="circle-wrapper py-5">
      <div className="container-fluid section-limit">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-md-6 left-section">
            <h1 className="main-title">
              <span className="highlight"> Decentralized</span>
              <br />
              World 
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 right-section">
            <ul className="points list-unstyled ">
              <li><span className="dot"></span>  Frequency Chain X</li>
              <li><span className="dot"></span> DApp Development</li>
              <li><span className="dot"></span>  DeMask (Decentralized Meetings)</li>
              <li><span className="dot"></span>  Cliff Chat (Decentralized Communication)</li>
            </ul>
              <p className="right-text">
           Empowering industries with transparency, security, and limitless digital freedom.
            </p>
          </div>

        </div>
      </div>
    </section>


      <section className="circle-wrapper py-5">
      <div className="container-fluid section-limit">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-md-6 left-section">
            <h1 className="main-title">
              <span className="highlight">  Innovation </span>
              <br />
              Alliances 
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 right-section">
            <ul className="points list-unstyled ">
              <li><span className="dot"></span>  College Collaboration</li>
              <li><span className="dot"></span> Startup Partnerships</li>
              <li><span className="dot"></span>  Developer Community</li>
              <li><span className="dot"></span> Joint Ventures & Corporate Alliances</li>
            </ul>
              <p className="right-text">
           Co-creating solutions with the world’s brightest minds.
            </p>
          </div>

        </div>
      </div>
    </section>

      
    </div>
  </section>

    






     


                                      {/* Idea-to-Impact Pipeline */}

                                      <div className="container my-5">
      <div className="excel-wrapper  rounded-4 overflow-hidden">

        {/* ---- TOP HEADING SECTION ---- */}
        <div className="excel-top p-4 text-center">
          <h3 className="fw-bold text-white m-0">Idea-to-Impact Pipeline</h3>
          <p className="text-white mt-2 mb-0">
            A simple, powerful map of how TGPS turns ideas into global solutions.
          </p>
        </div>

        {/* ---- LIST SECTION ---- */}
        <div className="excel-bottom p-4">

          <ul className="list-unstyled m-0">

            <li className="d-flex mb-4">
              <span className="excel-dot"></span>
              <p className="m-0 text-white">
                <strong>Discover the Challenge:</strong> We identify real-world gaps in energy, mobility, or digital ecosystems.
              </p>
            </li>

            <li className="d-flex mb-4">
              <span className="excel-dot"></span>
              <p className="m-0 text-white">
                <strong>Prototype the Solution:</strong> Our engineers, developers, and research partners co-create functional models.
              </p>
            </li>

            <li className="d-flex mb-4">
              <span className="excel-dot"></span>
              <p className="m-0 text-white">
                <strong>Test, Validate & Improve:</strong> Proof-of-concept deployments, user trials, energy audits, and system evaluations.
              </p>
            </li>

            <li className="d-flex mb-4">
              <span className="excel-dot"></span>
              <p className="m-0 text-white">
                <strong>Scale Globally:</strong> Solutions become products, services, and technologies deployed across industries.
              </p>
            </li>

           

          </ul>
        </div>
      </div>
    </div>

                                  {/* Participation Zone */}


   <div className="d-flex justify-content-center py-5" style={{ background: "#001F82" }}>
  {/* Center rectangle */}
  <div
    className="w-100"
    style={{
      maxWidth: "900px",
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <h1 className="text-center text-white">Participation Zone</h1>
    <p className="text-white fw-bold text-center mb-5">
      Innovation grows faster when more minds enter the room.
    </p>

    {/* ---------- REUSABLE STYLE ---------- */}
    

    {/* ---------- ROW 1 ---------- */}
    <div className="row align-items-center py-4 mx-0" style={{ background: "#0d2abf" }}>
      <div className="col-md-3 text-center py-3  border-end border-light">
        <div
          className="d-flex justify-content-center align-items-center text-center fw-bold"
          style={{
            width: "120px",
            height: "120px",
            color: "#fff",
            fontSize: "clamp(16px, 3vw, 30px)",
            margin: "0 auto",
          }}
        >
          For Students
        </div>
      </div>

      <div className="col-md-9 text-white">
        <ul style={{ lineHeight: "1.6" }}>
          <li>Real-time industry projects</li>
          <li>Innovation challenges</li>
          <li>Internships & research access</li>
        </ul>
      </div>
    </div>

    {/* ---------- ROW 2 ---------- */}
    <div className="row align-items-center py-4 mx-0" style={{ background: "#203ccf" }}>
      <div className="col-md-3 text-center py-3 border-end border-light">
        <div
          className="d-flex justify-content-center align-items-center text-center fw-bold"
          style={{
            width: "120px",
            height: "120px",
            color: "#fff",
            fontSize: "clamp(16px, 3vw, 30px)",
            margin: "0 auto",
          }}
        >
          For Startups
        </div>
      </div>

      <div className="col-md-9 text-white">
        <ul style={{ lineHeight: "1.6" }}>
          <li>Acceleration and co-incubation</li>
          <li>Market access</li>
          <li>Tech integration & testing</li>
        </ul>
      </div>
    </div>

    {/* ---------- ROW 3 ---------- */}
    <div className="row align-items-center py-4 mx-0" style={{ background: "#0d2abf" }}>
      <div className="col-md-3 text-center py-3 border-end border-light">
        <div
          className="d-flex justify-content-center align-items-center text-center fw-bold"
          style={{
            width: "120px",
            height: "120px",
            color: "#fff",
            fontSize: "clamp(16px, 3vw, 30px)",
            margin: "0 auto",
          }}
        >
          For Developers
        </div>
      </div>

      <div className="col-md-9 text-white">
        <ul style={{ lineHeight: "1.6" }}>
          <li>Build on Frequency Chain X</li>
          <li>Attend hackathons</li>
          <li>API & SDK access</li>
        </ul>
      </div>
    </div>

    {/* ---------- ROW 4 ---------- */}
    <div className="row align-items-center py-4 mx-0" style={{ background: "#203ccf" }}>
      <div className="col-md-3 text-center py-3 border-end border-light">
        <div
          className="d-flex justify-content-center align-items-center text-center fw-bold"
          style={{
            width: "120px",
            height: "120px",
            color: "#fff",
            fontSize: "clamp(16px, 3vw, 30px)",
            margin: "0 auto",
          }}
        >
          For Corporates
        </div>
      </div>

      <div className="col-md-9 text-white">
        <ul style={{ lineHeight: "1.6" }}>
          <li>R&D partnerships</li>
          <li>Technology licensing</li>
          <li>Turnkey project solutions</li>
        </ul>
      </div>
    </div>

    {/* ---------- ROW 5 ---------- */}
    <div className="row align-items-center py-4 mx-0" style={{ background: "#0d2abf" }}>
      <div className="col-md-3 text-center py-3 border-end border-light">
        <div
          className="d-flex justify-content-center align-items-center text-center fw-bold"
          style={{
            width: "120px",
            height: "120px",
            color: "#fff",
            fontSize: "clamp(16px, 3vw, 30px)",
            margin: "0 auto",
          }}
        >
          For Innovators
        </div>
      </div>

      <div className="col-md-9 text-white">
        <ul style={{ lineHeight: "1.6" }}>
          <li>Submit ideas</li>
          <li>Join think tanks</li>
          <li>Get mentorship from TGPS experts</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

