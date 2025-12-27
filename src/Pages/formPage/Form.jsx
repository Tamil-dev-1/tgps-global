import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './form.css'
const PremiumCompanyForm = () => {
  return (
    <section
      className="py-5"
      style={{ background: "#f5f7fb" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">

            {/* FORM CARD */}
            <div
              className="card border-0 shadow-lg p-4 p-md-5"
              style={{ borderRadius: "22px" }}
            >
              {/* HEADING */}
              <h2 className="fw-bold text-center mb-2 section-title">
                Let’s Work Together
              </h2>

              <p className="text-center text-muted mb-4">
                Share your requirements and our team will contact you shortly
              </p>

              {/* FORM */}
              <form>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control "
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Service */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Select Service
                  </label>
                  <select className="form-select form-select-lg">
                    {/* <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI / UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Consulting</option> */}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg text-white"
                    style={{
                      background: "linear-gradient(135deg, #06298A, #4f7cff)",
                      borderRadius: "30px",
                    }}
                  >
                    Send Request
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCompanyForm;
