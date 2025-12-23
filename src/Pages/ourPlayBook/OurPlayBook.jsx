import React from "react";
import { motion } from "framer-motion";
import "./Playbook.css";

const OurPlayBook = () => {
  const sections = [
    {
      title: "The Way We Think",
      subtitle: "Innovation as a daily discipline",
      text: "Innovation is not our event; it’s our everyday discipline.",
      card: "We believe progress happens when bold ideas meet responsible action. Our mindset blends curiosity, clarity, and courage—guiding every decision toward meaningful impact."
    },
    {
      title: "The Way We Work",
      subtitle: "Professional by principle",
      text: "Professionalism is our language; excellence is our accent.",
      card: "We operate with precision and accountability, protecting commitments at every level and building frameworks that endure beyond trends."
    },
    {
      title: "The Way We Lead",
      subtitle: "Responsibility over authority",
      text: "Leadership is not power; it is responsibility practiced consistently.",
      card: "We build leaders, not followers. Our leadership philosophy is rooted in growth, inclusiveness, and courage."
    },
    {
      title: "Corporate Ethos",
      subtitle: "Values that anchor decisions",
      card: "Transparency, respect, and integrity define who we are. We stand by sustainability, accountability, and people-first values."
    },
    {
      title: "Ethics Code",
      subtitle: "Trust as our foundation",
      card: "Ethics is not a chapter for us; it is the foundation of every success we build. Trust and honesty guide all decisions."
    }
  ];

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="playbook-page">

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container playbook-wrapper text-center">
          <h1 className="hero-text">Our Playbook</h1>
          <p className="hero-subtitle">
            How we think, work, lead, and grow—every single day
          </p>
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className="content">
        <div className="container playbook-wrapper">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              className={`row align-items-center playbook-row ${index % 2 !== 0 ? "flex-lg-row-reverse" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealVariant}
            >
              <div className="col-lg-6 order-2 order-lg-1">
                {sec.card && <Card text={sec.card} />}
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <h2 className="section-title">{sec.title}</h2>
                <h6 className="section-subtitle">{sec.subtitle}</h6>
                {sec.text && <p className="section-text fst-italic">{sec.text}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

const Card = ({ text }) => (
  <motion.div
    className="ui-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="chat-box">
      <span>{text}</span>
    </div>
  </motion.div>
);

export default OurPlayBook;
