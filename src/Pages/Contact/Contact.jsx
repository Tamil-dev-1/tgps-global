import React from "react";
import contactImg from '..//..//assets/images/Contact/contact-img.jpg'
import contactInfo from '..//..//assets/images/Contact/contactinfo.jpg'
import contact from '..//..//assets/images/Contact/contact.jpg'
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import GlobalPresence from "../../Components/Global Presence/GlobalPresence";
const Contact = () => {
 const locations = [
  {
    company: "Lorem Ipsum",
    country: "India",
    address: "Coimbatore, Tamil Nadu",
    flag: "https://flagcdn.com/h120/in.png",
  },
  {
    company: "Lorem Ipsum",
    country: "Thailand",
    address: "Bangkok",
    flag: "https://flagcdn.com/h120/th.png",
  },
  {
    company: "Lorem Ipsum",
    country: "Sri Lanka",
    address: "Colombo",
    flag: "https://flagcdn.com/h120/lk.png",
  },
  {
    company: "Lorem Ipsum",
    country: "Qatar",
    address: "Doha",
    flag: "https://flagcdn.com/h120/qa.png",
  },
];

  return (
    
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
       
      >
        <div>
         
          <p  className="text-center fw-bold mt-5 mb-5"
          style={{
           
            color: "#0D6EFD",
            letterSpacing: "1px",
            fontSize: "2rem",
          }} >
            We’d love to hear from you! Let’s start a conversation.
          </p>
        </div>
      </section>

      <GlobalPresence />
{/* 
      🌍 Our Global Presence */}
       {/* <section
      className="py-5"
      style={{
        background: "#fff",
      }}
    >
      <div className="container text-center fw-bold mb-4">
        <motion.h2
          className="fw-bold mb-5"
          style={{ fontWeight: 900,
    color: "#004AAD",
    letterSpacing: "1px",
    fontSize: "1.9rem",
    paddingBottom:'30px',
    marginTop:'30px' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
    
      Our Global Presence

        </motion.h2>

        <div className="row g-5 justify-content-center">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column align-items-center text-center">
                
                <FaMapMarkerAlt
                  size={34}
                  color="#004AAD"
                  className="mb-3"
                  style={{ marginBottom: "10px" }}
                />

                
                <h5
                  className="fw-bold mb-1"
                  style={{ color: "#003366", fontSize: "1.1rem" }}
                >
                  {loc.company}
                </h5>
                <h6
                  className="fw-semibold text-secondary mb-1"
                  style={{ fontSize: "0.9rem" }}
                >
                  {loc.country}
                </h6>
                <p
                  className="text-muted mb-3"
                  style={{ fontSize: "0.85rem", maxWidth: "240px" }}
                >
                  {loc.address}
                </p>

              
                <motion.img
                  src={loc.flag}
                  alt={loc.country}
                  className="shadow-sm"
                  style={{
                    width: "200px",
                    height: "110px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    objectFit: "cover",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
  

            {/* CONTACT INFO SECTION */}

{/* <section className="py-5"  style={{
        backgroundImage: `url(${contactInfo})`,
        
      }}>
  <div className="container">
    <div className="row align-items-center gy-5">
    
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

      
      <div className="col-lg-6 text-center position-relative">
       

        
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
</section> */}


      {/* ===== CONTACT FORM SECTION ===== */}
     <section
  className="py-5"
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



   

         {/* ===== CALL TO ACTION / FOOTER ===== */}
    <section
  className="text-center p-5"
  style={{
    borderTop: "1px solid #001F82",
    color:'#0D6EFD',
    // borderBottom: "1px solid #001F82",
  }}
>
  <h3 className="fw-bold mb-3">Let’s Work Together</h3>
  <p className="mb-4">
    Have a project in mind or just want to say hello? Drop us a line!
  </p>
  <button className="btn btn-light text-white px-4" style={{backgroundColor:'#0D6EFD'}}>
    Start a Conversation
  </button>
</section>
    </div>
  );
};

export default Contact;
