import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Marquee.css";

const Marquee = () => {
  const openPDF = (path) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="overflow-hidden top-section">
      <div className="container-fluid">

        <div className="marquee-wrapper">
          <div className="marquee-track">

            {/* ===== ORIGINAL ===== */}
            <div
              className="marquee-card "
              onClick={() => openPDF("/dummy pdf.pdf#view=FitH")}
            >
              <p>
                Innovation drives everything we build and scale for the future.
                Innovation drives everything we build and scale for the future.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/design.pdf#view=FitH")}
            >
              <p>
                Design is not just how it looks, but how it works seamlessly.
                Design is not just how it looks, but how it works seamlessly.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/strategy.pdf#view=FitH")}
            >
              <p>
                Strategy aligns vision, execution, and long-term growth.
                Strategy aligns vision, execution, and long-term growth.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/technology.pdf#view=FitH")}
            >
              <p>
                Technology empowers transformation across every industry.
                Technology empowers transformation across every industry.
              </p>
            </div>

            {/* ===== DUPLICATE FOR INFINITE LOOP ===== */}
            <div
              className="marquee-card"
              onClick={() => openPDF("/dummy.pdf#view=FitH")}
            >
              <p>
                Innovation drives everything we build and scale for the future.
                Innovation drives everything we build and scale for the future.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/design.pdf#view=FitH")}
            >
              <p>
                Design is not just how it looks, but how it works seamlessly.
                Design is not just how it looks, but how it works seamlessly.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/strategy.pdf#view=FitH")}
            >
              <p>
                Strategy aligns vision, execution, and long-term growth.
                Strategy aligns vision, execution, and long-term growth.
              </p>
            </div>

            <div
              className="marquee-card"
              onClick={() => openPDF("/technology.pdf#view=FitH")}
            >
              <p>
                Technology empowers transformation across every industry.
                Technology empowers transformation across every industry.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Marquee;
