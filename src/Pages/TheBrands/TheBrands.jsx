import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";
import OurBrands from "../../Components/BrandsList/OurBrands";
import './TheBrands.css';
import IndiaFlag from '../../assets/images/Thegroup/indianFlag.png'
import UAEFlag from '../../assets/images/Thegroup/UAEFlag.png'
import SrilankaFlag from '../../assets/images/Thegroup/SrilankaFlag.png'
import USAFlag from '../../assets/images/Thegroup/USAFlag.png'
import Transcent from '../../assets/images/Thegroup/transcent.png'
import Binshehab from '../../assets/images/Thegroup/binshehab.png'
import Savilinka from '../../assets/images/Thegroup/savilanka.png'
import Minerva from '../../assets/images/Thegroup/minerva.png'


// import Minerva from '../../assets/images/Thegroup/minerva.png'
const TheGroup = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
     <section
  className="d-flex align-items-center text-center position-relative overflow-hidden"
  style={{
    minHeight: "40vh",
    color:'#1F36C7',

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
      style={{ maxWidth: "750px", margin: "0 auto",fontSize: "1rem", }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     The TGPS Group brings together multiple businesses, platforms, and foundations under a shared mission of responsible innovation. From infrastructure to digital ecosystems, every initiative is engineered to deliver measurable impact and long-term value.
    </motion.p>
  </div>

  

</section>

      {/* ===== VISION & MISSION ===== */}
      <section

       
  className="py-5 text-center text-white"
  style={{ background: "#A14DC3" }}
>
  <div className="container">

    {/* TITLE */}
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

    {/* CONTENT */}
    <div className="row g-4 justify-content-center align-items-stretch">

      {[
        {
          icon: <FaLightbulb size={45} color="#fff" />,
          title: "Our Vision",
          desc:
            "To shape the future by building intelligent, sustainable ecosystems where technology and responsibility advance together.",
        },
        {
          icon: <FaHandshake size={45} color="#fff" />,
          title: "Our Mission",
          desc:
            "To develop interconnected businesses that apply innovation, decentralization, and sustainability to solve real-world challenges at global scale.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="col-lg-5 col-md-6 col-12 d-flex"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* CARD */}
          <div
            className="vision-card d-flex flex-column justify-content-center text-center p-4 w-100"
          >
            <div className="mb-3">{item.icon}</div>
            <h4 className="fw-bold mb-2">{item.title}</h4>
            <p className="text-light mb-0">{item.desc}</p>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* ===== GLOBAL PRESENCE ===== */}
  <section className="py-5 text-center bg-white"
  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className="container">
        {/* Heading */}
        <h2
          className="fw-bold mb-3"
          style={{
            fontSize: "2rem",
            color: "#1F36C7",
            letterSpacing: "0.5px",
          }}
        >
          Our Global Partners
        </h2>

        <p
          className="mb-5"
          style={{
            color: "#444",
            fontSize: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
         Strong global partnerships are the foundation of innovation, sustainability, and progress. Together, we don’t just build solutions—we shape the future
        </p>

        {/* Partners Grid */}
        <div className="row justify-content-center text-center g-4">
          {/* India */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <img
              src={Transcent}
              alt="Transcendent Energy"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src={IndiaFlag}
              alt="India Flag"
              className="img-fluid"
              style={{
                borderRadius: "6px",
                width: "180px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* UAE */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <img
              src={Binshehab}
              alt="Bin Shehab"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src={UAEFlag}
              alt="UAE Flag"
              className="img-fluid"
              style={{
                borderRadius: "6px",
                width: "180px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Sri Lanka */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <img
              src={Savilinka}
              alt="Savilanka Global"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src={SrilankaFlag}
              alt="Sri Lanka Flag"
              className="img-fluid"
              style={{
                borderRadius: "6px",
                width: "180px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* USA */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <img
              src={Minerva}
              alt="Minerva Energies"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src={USAFlag}
              alt="USA Flag"
              className="img-fluid"
              style={{
                borderRadius: "6px",
                width: "180px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>

             {/* Our Brands cards */}
    <OurBrands />

    

    
    </>
  );
};

export default TheGroup;