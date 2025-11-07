import React from "react";
import contactImg from '..//..//assets/images/Contact/contact-img.jpg'
import contactInfo from '..//..//assets/images/Contact/contactinfo.jpg'
import contact from '..//..//assets/images/Contact/contact.jpg'
const Contact = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: "60vh",
          backgroundImage:`url(${contact})`,
             
        
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="fw-bold display-4 mb-3">Contact Us</h1>
          <p className="lead">
            We’d love to hear from you! Let’s start a conversation.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Our Office</h5>
              <p className="text-muted">
                123 Business Street, Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <i className="bi bi-envelope fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Email Us</h5>
              <p className="text-muted">contact@yourcompany.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <i className="bi bi-telephone fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Call Us</h5>
              <p className="text-muted">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

            {/* CONTACT INFO SECTION */}

<section className="py-5"  style={{
        backgroundImage: `url(${contactInfo})`,
        
      }}>
  <div className="container">
    <div className="row align-items-center gy-5">
      {/* LEFT SIDE — Contact Info */}
      <div className="col-lg-6">
        <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", color: "#1F36C7" }}>
          Contact Info
        </h2>
        <p className="text-muted mb-5" style={{ fontSize: "1.1rem" }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequuntur adipisci ad temporibus magnam reiciendis?
        </p>

        <div
          className="p-4 rounded-4 shadow-sm"
          style={{ backgroundColor: "#F9FBFF" }}
        >
          {/* Address */}
          <div className="d-flex align-items-start mb-4">
            <div
              className="me-3 d-flex align-items-center justify-content-center rounded-4"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#E8F7FF",
              }}
            >
              <i
                className="bi bi-house-door-fill"
                style={{ color: "#1F36C7", fontSize: "1.8rem" }}
              ></i>
            </div>
            <div>
              <p className="mb-1 fw-semibold" style={{ fontSize: "1.1rem" }}>
                123 Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="mb-0 fw-semibold" style={{ fontSize: "1.1rem" }}>
                163 Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="d-flex align-items-start mb-4">
            <div
              className="me-3 d-flex align-items-center justify-content-center rounded-4"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#E8F7FF",
              }}
            >
              <i
                className="bi bi-telephone-fill"
                style={{ color: "#1F36C7", fontSize: "1.8rem" }}
              ></i>
            </div>
            <div>
              <p className="mb-1 fw-semibold" style={{ fontSize: "1.1rem" }}>
                +1 (123) 456 7890
              </p>
              <p className="mb-0 fw-semibold" style={{ fontSize: "1.1rem" }}>
                +1 (123) 456 7896
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="d-flex align-items-start">
            <div
              className="me-3 d-flex align-items-center justify-content-center rounded-4"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#E8F7FF",
              }}
            >
              <i
                className="bi bi-envelope-fill"
                style={{ color: "#1F36C7", fontSize: "1.8rem" }}
              ></i>
            </div>
            <div>
              <p className="mb-1 fw-semibold" style={{ fontSize: "1.1rem" }}>
                abc@atoli.com
              </p>
              <p className="mb-0 fw-semibold" style={{ fontSize: "1.1rem" }}>
                xyz@atoli.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — New Image */}
      <div className="col-lg-6 text-center position-relative">
       

        {/* Main Image */}
        <img
          src={ contactImg}
          alt="Contact team"
          className="img-fluid shadow-lg position-relative"
          style={{
            borderRadius: "30px",
            objectFit: "cover",
            width: "420px",
            height: "520px",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  </div>
</section>


      {/* ===== CONTACT FORM SECTION ===== */}
     <section
  className="py-2"
  style={{
    background: "linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 col-md-10">
        <div
          className="card border-0 p-4 p-md-5"
          style={{
            borderRadius: "0px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(6px)",
          }}
        >
          <h2
            className="fw-bold text-center mb-4"
            style={{
              color: "#1e3a8a",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Send Us a Message
          </h2>

          <form>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control sharp-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control sharp-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Subject</label>
                <input
                  type="text"
                  className="form-control sharp-input"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control sharp-input"
                  rows="5"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button
                  type="submit"
                  className="btn bg-info text-white sharp-btn px-5 py-2 fw-semibold"
                >
                  Send Message →
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== GOOGLE MAP (OPTIONAL) ===== */}
      <section className="p-0 m-0">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3419858264175!2d80.24229921533664!3d12.971598590858837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ad1d30d9e9%3A0x1a547f6c19f18a43!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1634637361872!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section
        className="text-center text-white p-5"
        style={{
          background:
            "linear-gradient(90deg, #0047BA 0%, #36BDC2 50%, #57C785 100%)",
        }}
      >
        <h3 className="fw-bold mb-2">Let’s Work Together</h3>
        <p className="mb-4">
          Have a project in mind or just want to say hello? Drop us a line!
        </p>
        <button className="btn btn-light px-4">Start a Conversation</button>
      </section>
    </div>
  );
};

export default Contact;
