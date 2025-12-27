import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Marquee.css";
import { FaLightbulb, FaPencilRuler, FaChartLine, FaMicrochip } from "react-icons/fa";

const Marquee = () => {
  const openPDF = (path) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="overflow-hidden festive-glow top-section mono-font">
      <div className="container-fluid">
        <div className="marquee-wrapper">
          <div className="marquee-track">

            {/* ===== CARD 1 ===== */}
            <div
              className="marquee-card gradient-1"
              onClick={() => openPDF("/dummy.pdf#view=FitH")}
            >
              <div className="card-header">
                <FaLightbulb className="card-icon" />
                <h6>Engineering the Future</h6>
              </div>
              <p>
                At TGPS Global, we don’t wait for tomorrow—we design it. From clean energy to decentralized technology,<br /> we build systems that empower industries, communities, and the planet to evolve sustainably.
              </p>
            </div>

            {/* ===== CARD 2 ===== */}
            <div
              className="marquee-card gradient-2"
              onClick={() => openPDF("/design.pdf#view=FitH")}
            >
              <div className="card-header">
                <FaPencilRuler className="card-icon" />
                <h6>Power Beyond Energy</h6>
              </div>
              <p>
                Energy is just the beginning. TGPS Global integrates innovation, blockchain, and purpose <br/> to create ecosystems where power flows not only through grids—but through people and progress
              </p>
            </div>

            {/* ===== CARD 3 ===== */}
            <div
              className="marquee-card gradient-3"
              onClick={() => openPDF("/strategy.pdf#view=FitH")}
            >
              <div className="card-header">
                <FaChartLine className="card-icon" />
                <h6>Where Vision Becomes Infrastructure</h6>
              </div>
              <p>
                Ideas alone don’t change the world—implementation does. TGPS Global transforms bold visions into <br/>real-world infrastructure that drives renewable adoption, digital trust, and global impact
              </p>
            </div>

            {/* ===== CARD 4 ===== */}
            <div
              className="marquee-card gradient-4"
              onClick={() => openPDF("/technology.pdf#view=FitH")}
            >
              <div className="card-header">
                <FaMicrochip className="card-icon" />
                <h6>Building Impact at Scale</h6>
              </div>
              <p>
                From local communities to global markets, TGPS Global scales solutions that matter. Our work blends technology,<br/> sustainability, and decentralization to  create growth that is responsible, resilient, and future-ready.
              </p>
            </div>

            {/* ===== DUPLICATE FOR LOOP ===== */}
            <div className="marquee-card gradient-1">
              <div className="card-header">
                <FaLightbulb className="card-icon" />
                <h6>Engineering the Future</h6>
              </div>
              <p> At TGPS Global, we don’t wait for tomorrow—we design it. From clean energy to decentralized technology,<br /> we build systems that empower industries, communities, and the planet to evolve sustainably.</p>
            </div>

            <div className="marquee-card gradient-2">
              <div className="card-header">
                <FaPencilRuler className="card-icon" />
                <h6>Power Beyond Energ</h6>
              </div>
              <p>Energy is just the beginning. TGPS Global integrates innovation, blockchain, and purpose<br/> to create ecosystems where power flows not only through grids—but through people and progress.</p>
            </div>

            <div className="marquee-card gradient-3">
              <div className="card-header">
                <FaChartLine className="card-icon" />
                <h6>Where Vision Becomes Infrastructure</h6>
              </div>
              <p> Ideas alone don’t change the world—implementation does. TGPS Global transforms bold visions into <br/>real-world infrastructure that drives renewable adoption, digital trust, and global impact</p>
            </div>

            <div className="marquee-card gradient-4">
              <div className="card-header">
                <FaMicrochip className="card-icon" />
                <h6>Building Impact at Scale</h6>
              </div>
              <p>From local communities to global markets, TGPS Global scales solutions that matter. Our work blends technology,<br/> sustainability, and decentralization to  create growth that is responsible, resilient, and future-ready.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
