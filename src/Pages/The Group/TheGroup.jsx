import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";

const TheGroup = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
     <section
  className="d-flex align-items-center text-center text-white position-relative overflow-hidden"
  style={{
    minHeight: "80vh",
    background:
      "linear-gradient(135deg, rgba(0,74,173,1) 0%, rgba(87,199,133,1) 100%)",
  }}
>
  <div className="container py-5 position-relative z-1">
    <motion.h1
      className="fw-bold mb-3"
      style={{
        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
        letterSpacing: "1px",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      The Group
    </motion.h1>
    <motion.p
      className="lead"
      style={{ maxWidth: "750px", margin: "0 auto" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      A family of companies united by shared values, a pioneering spirit, and a drive
      to make a global difference through innovation, sustainability, and excellence.
    </motion.p>
  </div>

  {/* WAVE DESIGN */}
  <div
    className="position-absolute bottom-0 start-0 w-100"
    style={{ lineHeight: 0 }}
  >
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <path
        d="M0.00,49.98 C150.00,150.00 349.33,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{
          stroke: "none",
          fill: "url(#waveGradient)",
        }}
      ></path>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0033cc" />
          <stop offset="100%" stopColor="#004AAD" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>


      {/* ===== ABOUT SECTION ===== */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #F9FBFD 0%, #FFFFFF 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.img
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg"
                alt="Our Group"
                className="img-fluid rounded-4 shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="col-lg-6">
              <motion.h2
                className="fw-bold mb-3"
                style={{ color: "#004AAD" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Our Group
              </motion.h2>
              <motion.p
                className="text-muted"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Established over two decades ago, our group stands as a symbol of trust and
                growth. From technology and manufacturing to sustainable development, we
                have consistently delivered excellence. Our legacy is built upon passion,
                partnership, and progress — values that guide every step we take.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #004AAD 0%, #57C785 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="fw-bold mb-5"
            style={{ fontSize: "2rem", letterSpacing: "1px" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Vision & Mission
          </motion.h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: <FaLightbulb size={45} color="#fff" />,
                title: "Our Vision",
                desc: "To create a globally respected group that empowers people and businesses to innovate and grow sustainably.",
              },
              {
                icon: <FaHandshake size={45} color="#fff" />,
                title: "Our Mission",
                desc: "To deliver excellence with integrity, nurture talent, and drive progress through continuous innovation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-lg-5 col-md-6 col-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="p-4 rounded-4 shadow-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="fw-bold mb-2">{item.title}</h4>
                  <p className="text-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="text-center fw-bold mb-5"
            style={{ color: "#003366", fontSize: "2rem" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🌍 Our Global Presence
          </motion.h2>

          <div className="row g-4 justify-content-center">
            {[
              {
                icon: <FaBuilding size={45} color="#004AAD" />,
                title: "Asia Operations",
                desc: "Headquartered in India, with key offices in Singapore and Malaysia driving growth in the region.",
                color: "linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%)",
              },
              {
                icon: <FaUsers size={45} color="#004AAD" />,
                title: "North America Team",
                desc: "Our US division leads in technology and strategic partnerships across major markets.",
                color: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
              },
              {
                icon: <FaGlobe size={45} color="#004AAD" />,
                title: "Europe Expansion",
                desc: "Strong presence in Germany, UK, and France, delivering innovation and sustainable business practices.",
                color: "linear-gradient(135deg, #C2FFD8 0%, #465EFB 100%)",
              },
            ].map((loc, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
              >
                <motion.div
                  className="card text-center border-0 shadow-lg p-4 w-100"
                  style={{
                    borderRadius: "20px",
                    background: loc.color,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="mb-3">{loc.icon}</div>
                  <h4 className="fw-bold mb-2">{loc.title}</h4>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                    {loc.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TheGroup;
