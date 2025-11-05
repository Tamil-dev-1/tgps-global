import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CarRevealSection = () => {
  const { scrollYProgress } = useScroll();

  // left side image: moves slightly left and fades in
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["-50vw", "0vw"]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // right side image: moves slightly right and fades in
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["50vw", "0vw"]);
  const rightOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      style={{
        height: "200vh",
        background: "#0d1117",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left (Sketch Image) */}
        <motion.div
          style={{
            x: leftX,
            opacity: leftOpacity,
            width: "50%",
            height: "100%",
            backgroundImage:
              "url('https://cdn.motor1.com/images/mgl/vJooLx/s3/chevrolet-traverse-sketch.jpg')", // sample sketch image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right (Real Car Image) */}
        <motion.div
          style={{
            x: rightX,
            opacity: rightOpacity,
            width: "50%",
            height: "100%",
            backgroundImage:
              "url('https://cdn.motor1.com/images/mgl/0ANw9b/s3/chevrolet-traverse-2024.jpg')", // sample car image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay Text */}
        <motion.div
          style={{
            position: "absolute",
            textAlign: "center",
            color: "white",
            opacity: rightOpacity,
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
            The Future of Design
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            From concept to creation — experience innovation.
          </p>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.7rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0066ff",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CarRevealSection;
