import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSlideSection = () => {
   const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Pepsi_logo_2014.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Coca-Cola_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nestle_textlogo_blue.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Unilever.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/P%26G_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Colgate_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/LG_logo_%282015%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Samsung_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Honda_logo.svg",
    
  ];
  const { scrollYProgress } = useScroll();

  // Section 2 slides from right (100%) → left (0%)
  const x = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div style={{ overflowX: "hidden" }}>
      

      {/* SECTION 2 — slides in from the right */}
      <motion.section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background:
            "#FFEB81",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "900",
          x,
          opacity,
          zIndex: 2,
        }}
      >
        
          <div style={{ backgroundColor: "#FFEB81", padding: "60px 80px" }}> {/* Increased side padding */}
  <div className="container text-center">
    {/* Heading */}
    <h2 style={{ fontWeight: "700", color: "#0032A0" }}>Our Brands</h2>

    {/* Paragraph */}
    <p
      className="mt-3 mb-5"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        color: "#555",
        fontSize: "1.1rem",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam,
      corrupti nemo dolores maxime aperiam deleniti recusandae corporis nisi,
      eveniet ipsa delectus ea veritatis alias! Quidem, porro cupiditate.
      Ducimus, deleniti?
    </p>

    {/* Logo Grid */}
    <div
      className="d-flex flex-wrap justify-content-center gap-4"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="responsive-brand-box p-3 border rounded-3 bg-white d-flex align-items-center justify-content-center shadow-sm"
          style={{
            flex: "1 1 calc(28% - 1rem)", // narrower cards
            maxWidth: "260px", // reduced width
            height: "100px", // slightly smaller height
          }}
        >
          <img
            src={logo}
            alt={`Brand ${index + 1}`}
            className="img-fluid"
            style={{ maxHeight: "50px", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  </div>
</div>
        
      </motion.section>
    </div>
  );
};

export default ScrollSlideSection;
