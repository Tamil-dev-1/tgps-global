import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./popu.css";

const cards = [
  {
    icon: "⚙️",
    popupIcon: "⚙️",
    color: "#ff5722",
    title: "Life at TGPS Global",
    desc: "Where purpose meets everyday work.",
    content: `We operate where renewable energy, technology, blockchain, and sustainability collide.
These are not “easy” industries. They move fast, break assumptions, and demand thinkers—not passengers.

Which means no two days look the same, and boredom rarely shows up.`
  },
  {
    icon: "💬",
    popupIcon: "💬",
    color: "#0d6efd",
    title: `Our Ethos: 
    What We Stand For`,
    desc: "Values that guide decisions, not just words.",
    content: `Our culture runs on clarity, not confusion.
   
    At TGPS, we choose:

    Integrity over shortcuts (even when shortcuts look tempting)

    Ownership over excuses

    Learning over ego

    Freedom with accountability

    Innovation isn’t locked inside a department—it’s expected from everyone. Leadership isn’t announced; it’s demonstrated. Titles may open doors, but actions decide who leads.`
  },
  {
    icon: "🔐",
    popupIcon: "🔐",
    color: "#198754",
    title: "What We Expect From You",
    desc: "Mindset matters more than resumes.",
    content: `Before you apply, here’s the honest part.

    We’re looking for people who:

    Take ownership beyond bullet points

    Learn fast—and unlearn faster

    Work independently without disappearing

    Respect time, people, and outcomes

    Welcome feedback instead of avoiding it

    This is a high-trust, high-accountability environment. Builders thrive here. Problem-solvers grow here. If you need constant instructions or comfort-driven routines, this may feel uncomfortable—and that’s okay. Clarity saves everyone time.
`
  },
  {
    icon: "🧠",
    popupIcon: "🧠",
    color: "#6f42c1",
    title: "What You Can Expect From Us",
    desc: "Growth, trust, and meaningful opportunity.",
    content: `If you bring commitment, we bring opportunity.

    At TGPS, you can expect:

    Real autonomy—not micromanagement

    Exposure to global, future-facing projects

    Learning through challenges, not just training decks

    Direct, honest feedback

    Growth based on contribution, not tenure
Careers here don’t move in straight lines. They move upward through responsibility, learning, and results. Titles follow impact—not the other way around.
`
  },
  {
    icon: "🤖",
    popupIcon: "🤖",
    color: "#fd7e14",
    title: "Work, Impact & Beyond",
    desc: "Your work here shapes more than a career.",
    content: `Work at TGPS spans across:

Renewable Energy & Sustainability

Blockchain & Web3 Technologies

IT & Digital Solutions

Operations, Strategy & Ecosystem Building

But no role exists in isolation. Every contribution feeds into a larger mission—building systems that serve planet, people, and prosperity. Beyond daily work, teams engage in climate action, community initiatives, and knowledge sharing.

Here, your work doesn’t stop at delivery—it creates ripple effects.

`
  },
  {
    icon: "📊",
    popupIcon: "📊",
    color: "#20c997",
    title: "Before You Apply",
    desc: "Clarity before commitment.",
    content: `Before hitting “Apply,” pause for a moment:
Are you comfortable with responsibility?

Do you enjoy learning—and unlearning?

Can you work with freedom and accountability?

Do you want to build something that actually matters?

Our hiring process values thinking, mindset, and values alignment as much as experience. We look for curious minds, principled actions, and people driven by purpose—not noise.

If this resonates, explore our opportunities and join us in decoding the green future.`
  }
];

const AIConsultingSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <section className="ai-section py-5">
        <div className="container">
          <div className="row g-4">
            {cards.map((card, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="info-card"
                  onClick={() => setActiveCard(card)}
                >
                  <div className="icon">{card.icon}</div>
                  <h6>{card.title}</h6>
                  <p>{card.desc} </p>
                <p><span className="read-more text-primary">Readmore....</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPUP ===== */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              className="popup-box"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="popup-close"
                onClick={() => setActiveCard(null)}
              >
                ×
              </button>

              <div
                className="popup-icon"
                style={{ background: activeCard.color }}
              >
                {activeCard.popupIcon}
              </div>

              <h4
                className="popup-title"
                style={{ color: activeCard.color }}
              >
                {activeCard.title}
              </h4>

              <div className="popup-text">
                {activeCard.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConsultingSection;
