import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";
import OurBrands from "../../Components/Transcendent/OurBrands";

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
      style={{ maxWidth: "750px", margin: "0 auto" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur reprehenderit, cum neque eius in doloribus cumque hic exercitationem incidunt illo minima ad culpa molestias?
    </motion.p>
  </div>

  

</section>

      {/* ===== VISION & MISSION ===== */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "#A14DC3",
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
                desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati harum quasi similique quia ipsum maiores saepe.",
              },
              {
                icon: <FaHandshake size={45} color="#fff" />,
                title: "Our Mission",
                desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati harum quasi similique quia ipsum maiores saepe.",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, amet ab
          quis quibusdam beatae commodi autem sed. Delectus?
        </p>

        {/* Partners Grid */}
        <div className="row justify-content-center text-center g-4">
          {/* India */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://www.tgpsglobal.com/static/media/Transcent.904795fa136506397fa1.webp"
              alt="Transcendent Energy"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src="https://flagcdn.com/w320/in.png"
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
              src="https://www.tgpsglobal.com/static/media/binshehab.661590d1ddb501c1ed97.webp"
              alt="Bin Shehab"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src="https://flagcdn.com/w320/ae.png"
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
              src="https://www.tgpsglobal.com/static/media/savilanka.de3fcba2e64b374b8df3.webp"
              alt="Savilanka Global"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src="https://flagcdn.com/w320/lk.png"
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
              src="https://www.tgpsglobal.com/static/media/minerva.1884020a611cfeba1910.webp"
              alt="Minerva Energies"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <img
              src="https://flagcdn.com/w320/us.png"
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

    {/* ======================================== */}

    
    </>
  );
};

export default TheGroup;
