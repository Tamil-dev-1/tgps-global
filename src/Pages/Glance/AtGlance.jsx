import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaBuilding, FaChartLine, FaLeaf, FaClock } from "react-icons/fa";

const AtAGlance = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "80vh",
          background:
            "linear-gradient(135deg, rgba(0,74,173,1) 0%, rgba(87,199,133,1) 100%)",
        }}
      >
        <div className="container py-5">
          <motion.h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              letterSpacing: "1px",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            At a Glance
          </motion.h1>
          <motion.p
            className="lead"
            style={{ maxWidth: "700px", margin: "0 auto" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A quick look at who we are — our reach, people, values, and the impact we make globally.
          </motion.p>
        </div>
      </section>

      {/* ===== KEY STATISTICS ===== */}
      <section className="py-5" style={{ background: "#F9FBFD" }}>
        <div className="container text-center">
          <motion.h2
            className="fw-bold mb-5"
            style={{ color: "#004AAD" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Key Highlights
          </motion.h2>

          <div className="row g-4">
            {[
              { icon: <FaUsers size={40} color="#004AAD" />, title: "10,000+", subtitle: "Employees Worldwide" },
              { icon: <FaBuilding size={40} color="#004AAD" />, title: "25+", subtitle: "Global Offices" },
              { icon: <FaGlobe size={40} color="#004AAD" />, title: "15+", subtitle: "Countries of Operation" },
              { icon: <FaChartLine size={40} color="#004AAD" />, title: "20%+", subtitle: "Annual Growth Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="col-lg-3 col-md-6 col-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-4 rounded-4 shadow-lg bg-white"
                  style={{
                    border: "1px solid #eaeaea",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="mb-3">{stat.icon}</div>
                  <h3 className="fw-bold" style={{ color: "#004AAD" }}>
                    {stat.title}
                  </h3>
                  <p className="text-muted">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY JOURNEY ===== */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="fw-bold text-center mb-5"
            style={{ color: "#004AAD" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>

          <div className="row g-4 justify-content-center">
            {[
              {
                year: "2000",
                title: "Founded",
                desc: "Started with a small team of innovators and a big dream to change industries.",
              },
              {
                year: "2010",
                title: "Global Expansion",
                desc: "Opened offices in Asia and Europe, expanding our impact across continents.",
              },
              {
                year: "2020",
                title: "Digital Revolution",
                desc: "Embraced AI, data, and sustainability as pillars for future growth.",
              },
              {
                year: "2025",
                title: "Next Chapter",
                desc: "Moving toward a greener, smarter, and more connected future.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className="card border-0 shadow-lg text-center p-4 rounded-4 h-100"
                  style={{
                    background:
                      "linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 100%)",
                  }}
                >
                  <div
                    className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#004AAD",
                      color: "white",
                      fontSize: "1.3rem",
                      fontWeight: "700",
                    }}
                  >
                    {item.year}
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL IMPACT ===== */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #004AAD 0%, #57C785 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="fw-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Global Impact
          </motion.h2>

          <motion.p
            className="mb-5 mx-auto"
            style={{ maxWidth: "700px", fontSize: "1.05rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            We believe progress and sustainability go hand in hand — empowering communities, 
            fostering innovation, and protecting our planet.
          </motion.p>

          <div className="row g-4 justify-content-center">
            {[
              { icon: <FaLeaf size={45} />, title: "Sustainability", desc: "50% of operations powered by renewable energy." },
              { icon: <FaClock size={45} />, title: "Efficiency", desc: "Reduced carbon footprint by 35% in the last 5 years." },
              { icon: <FaUsers size={45} />, title: "Empowerment", desc: "Over 10,000 lives impacted through CSR initiatives." },
            ].map((impact, i) => (
              <motion.div
                key={i}
                className="col-lg-4 col-md-6 col-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-4 rounded-4 shadow-lg"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <div className="mb-3">{impact.icon}</div>
                  <h5 className="fw-bold">{impact.title}</h5>
                  <p className="text-light">{impact.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AtAGlance;
