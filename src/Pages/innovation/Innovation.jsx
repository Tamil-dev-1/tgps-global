// InnovationHubPremium.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  './innovation.css';

const InnovationHub = () => {
  return (
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

      {/* Innovation Stories Carousel */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Innovation Stories</h2>
          <div className="d-flex overflow-auto story-carousel gap-4 py-3">
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
            ].map((story, idx) => (
              <div key={idx} className="card story-card shadow-sm flex-shrink-0">
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar + Main Content Layout */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="sidebar shadow-sm p-4 rounded">
                <h5 className="fw-bold mb-3">Quick Navigation</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#future-tracks" className="nav-link">Future Tracks</a></li>
                  <li className="nav-item"><a href="#pipeline" className="nav-link">Idea-to-Impact Pipeline</a></li>
                  <li className="nav-item"><a href="#participation" className="nav-link">Participation Zone</a></li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {/* Future Tracks */}
              <div id="future-tracks" className="mb-5">
                <h2 className="mb-4">Future Tracks</h2>
                <div className="row g-4">
                  {[
                    {
                      title: "Clean Energy Futures",
                      items: ["Solar Innovation", "Net Zero Missions", "Carbon Reduction Models"],
                      desc: "Where sustainability meets technology to build planet-positive systems."
                    },
                    {
                      title: "Mobility 2.0",
                      items: ["EV Manufacturing", "Charging Networks", "Fleet Automation", "Zero-Emission Deliveries"],
                      desc: "Reimagining transportation from factories to last-mile logistics."
                    },
                    {
                      title: "Decentralized World",
                      items: ["Frequency Chain X", "DApp Development", "DeMask", "Cliff Chat"],
                      desc: "Empowering industries with transparency, security, and digital freedom."
                    },
                    {
                      title: "Innovation Alliances",
                      items: ["College Collaboration", "Startup Partnerships", "Developer Community", "Joint Ventures & Corporate Alliances"],
                      desc: "Co-creating solutions with the world’s brightest minds."
                    }
                  ].map((track, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="card track-card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title">{track.title}</h5>
                          <ul>
                            {track.items.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                          <p className="card-text">{track.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Idea-to-Impact Pipeline */}
              <div id="pipeline" className="mb-5">
                <h2 className="mb-4">Idea-to-Impact Pipeline</h2>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">Discover the Challenge: Identify gaps in energy, mobility, or digital ecosystems.</li>
                  <li className="list-group-item">Prototype the Solution: Engineers and research partners co-create functional models.</li>
                  <li className="list-group-item">Test, Validate & Improve: Proof-of-concept deployments and user trials.</li>
                  <li className="list-group-item">Scale Globally: Solutions become products, services, and technologies deployed worldwide.</li>
                </ol>
              </div>

              {/* Participation Zone */}
              <div id="participation">
                <h2 className="mb-4">Participation Zone</h2>
                <div className="row g-4">
                  {[
                    {title: "Students 🎓", items: ["Real-time industry projects", "Innovation challenges", "Internships & research access"]},
                    {title: "Startups 🚀", items: ["Acceleration & co-incubation", "Market access", "Tech integration & testing"]},
                    {title: "Developers 💻", items: ["Build on Frequency Chain X", "Hackathons", "API & SDK access"]},
                    {title: "Corporates 🏢", items: ["R&D partnerships", "Technology licensing", "Turnkey project solutions"]},
                    {title: "Innovators 💡", items: ["Submit ideas", "Join think tanks", "Mentorship from TGPS experts"]}
                  ].map((zone, idx) => (
                    <div key={idx} className="col-md-6 col-lg-4">
                      <div className="card participation-card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title">{zone.title}</h5>
                          <ul>
                            {zone.items.map((item,i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-5 text-center text-white cta-section">
        <div className="container">
          <h2>Join the Innovation Hub</h2>
          <p>Shape the future with TGPS. Together, we engineer the world of tomorrow.</p>
        </div>
      </section>
    </div>
  );
};

export default InnovationHub;
