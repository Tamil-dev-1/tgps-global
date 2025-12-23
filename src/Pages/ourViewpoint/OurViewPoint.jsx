import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh", background: "#0f2027" }}
    >
      <div className="container text-white">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="display-4 fw-semibold"
        >
          Build the Future with Us
        </motion.h1>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-3 text-light"
        >
          Innovation. Design. Technology.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
