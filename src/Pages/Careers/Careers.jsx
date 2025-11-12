import React from "react";
import bubbleImg from '..//..//assets/images/Careers/bubbles.jpg'
import waterdropImg from '..//..//assets/images/Careers/water-drops.jpg'

const Careers = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className=" text-center d-flex align-items-center justify-content-center"
        style={{
                  height: "30vh",
                 marginTop:'30px',
                 color:'#9C44C0'
                }}
      >
        <div>
          <h1 className="fw-bold display-3 mb-3">Life at TGPS</h1>
          <p className="lead mb-1">
            We’re building a future driven by creativity, passion, and innovation.
          </p>
          
        </div>
      </section>

      {/* ===== ABOUT / CULTURE SECTION ===== */}
      <section className="container mt-5  py-5 text-center" style={{ backgroundColor:'#9C44C0',
              
            }}>
        <h2 className="fw-bold mb-4 text-white">We TGPS</h2>
        <p className="text-white mb-5">
          At TGPS, collaboration and growth are part of everyday life.
          We encourage creativity and value every individual’s contribution.
        </p>

        <div className="row px-3 g-4">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              className="img-fluid rounded shadow-sm"
              alt="Team Collaboration"
            />
            <h5 className="mt-3 fw-semibold text-white">Team Collaboration</h5>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              className="img-fluid rounded shadow-sm"
              alt="Workspace"
            />
            <h5 className="mt-3 fw-semibold text-white">Modern Workspace</h5>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/6519176/pexels-photo-6519176.jpeg"
              className="img-fluid rounded shadow-sm"
              alt="Events"
            />
            <h5 className="text-white mt-3 fw-semibold">Fun Events</h5>
          </div>
        </div>
      </section>

      {/* ===== PERKS & BENEFITS ===== */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 text-primary">Why Work With Us?</h2>
          <div className="row g-4">
            {[
              { icon: "bi-heart", title: "Health Benefits" },
              { icon: "bi-laptop", title: "Flexible Work" },
              { icon: "bi-graph-up", title: "Career Growth" },
              { icon: "bi-lightbulb", title: "Learning Culture" },
            ].map((perk, i) => (
              <div className="col-md-3" key={i}>
                <i className={`bi ${perk.icon} fs-1 text-primary`}></i>
                <h6 className="mt-3">{perk.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section id="openings" className="container py-5">
        <h2 className="fw-bold text-center mb-4 text-primary">Current Openings</h2>
        <p className="text-center text-muted mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis est illo expedita?
        </p>

        <div className="row g-4">
          {[
            { title: "Frontend Developer", exp: "1–3 years", loc: "xyz" },
            { title: "UI/UX Designer", exp: "2–4 years", loc: "xyz" },
            { title: "Backend Engineer", exp: "3–5 years", loc: "xyz" },
          ].map((job, i) => (
            <div className="col-md-4" key={i}>
              <div className="card p-4 border-0 shadow-sm h-100" style={{backgroundColor:'#01D7C5'}}>
                <h5 className="fw-semibold">{job.title}</h5>
                <p className="text-light">
                  Experience: {job.exp} <br />
                  Location: {job.loc}
                </p>
                <a href="#apply" className="btn w-100" style={{backgroundColor:'#fff'}}>
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section
        id="apply"
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-center mb-4 text-primary">Apply for a Position</h2>
          <p className="text-center text-muted mb-5">
            Fill in your details below and we’ll get in touch with you soon.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="p-4 border rounded-3 shadow-sm bg-white">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Position Applied For</label>
                  <select className="form-select" required>
                    <option value="">Select a role</option>
                    <option>Frontend Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Backend Engineer</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Upload Resume</label>
                  <input type="file" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message (Optional)</label>
                  <textarea className="form-control" rows="4" placeholder="Tell us about yourself..."></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION / FOOTER ===== */}
    <section
  className="text-center p-5"
  style={{
    borderTop: "1px solid #001F82",
    color:'#0D6EFD',
    // borderBottom: "1px solid #001F82",
  }}
>
  <h3 className="fw-bold mb-3">Didn’t find your role?</h3>
  <p className="mb-4">
    We’re always looking for talented individuals — share your resume and
    we’ll get in touch.
  </p>
  <button className="btn btn-light text-white px-4" style={{backgroundColor:'#0D6EFD'}}>
    Send Resume
  </button>
</section>

    </div>
  );
};

export default Careers;
