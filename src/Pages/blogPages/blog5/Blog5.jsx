
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG5 from '../../../assets/images/blog/img5.jpg'

const Blog5 = () => {
  return (
    <section style={{ background: "#F4F6FA", padding: "70px 0" }}>
      <div className="container">
        <div className="row g-5">

          {/* ===== LEFT CONTENT ===== */}
          <div className="col-lg-8">

            {/* IMAGE */}
            <div className="mb-4">
              <img
                src={IMG5}
                alt="Blog"
                className="img-fluid w-100"
                style={{
                  borderRadius: "14px",
                  height: "420px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* META */}
            <div className="mb-3">
              <span className="text-muted me-3">
                {/* BY <strong>Lorem Ipsum</strong> */}
              </span>
              
            </div>

            {/* TITLE */}
            <h2 className="fw-bold mb-4">
             The Importance of Energy Transparency in Building Trust
Introduction
            </h2>

            {/* CONTENT */}
            <p style={{ lineHeight: "1.9" }}>
             Trust is a critical factor in today’s evolving energy landscape. Historically, the energy sector has struggled with opaque pricing, unclear sourcing, and limited consumer visibility. As the world transitions toward renewable and decentralized energy systems, transparency is no longer optional—it is essential for building long-term trust between energy providers and consumers.
            </p>

            <h5 className="fw-bold">
              Role of Transparency
            </h5>

            <p style={{ lineHeight: "1.9" }}>
             Transparency forms the foundation of trust in the energy sector. When consumers have clear and accurate information about energy sources, pricing, and environmental impact, they are more confident in their choices. For energy companies, openness leads to stronger customer loyalty, improved brand credibility, and a more sustainable business model.
            </p>

            <p style={{ lineHeight: "1.9" }}>
            By closing the information gap, transparency empowers consumers to make informed, sustainability-driven decisions. As environmental awareness grows, companies that prioritize clarity and openness naturally stand out as trustworthy and responsible leaders.
            </p>

            <h5 className="fw-bold">
              Blockchain as a Solution
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Blockchain technology addresses transparency challenges by providing secure, immutable, and real-time records of energy transactions. It enables consumers to verify energy sources, track distribution, and monitor emissions while reducing reliance on intermediaries. This added accountability minimizes fraud and enhances trust, especially in peer-to-peer energy trading models.
            </p>

             <h5 className="fw-bold">
              Real-World Examples
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Companies like Power Ledger use blockchain to enable transparent peer-to-peer solar energy trading, creating open marketplaces where pricing and sourcing are visible. Similarly, WePower allows consumers to purchase tokenized renewable energy with full transparency into its origin and cost. These examples demonstrate how transparency can deliver tangible benefits for both businesses and consumers.
            </p>

             <h5 className="fw-bold">
              Challenges
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Despite its importance, achieving transparency comes with challenges. Data privacy concerns, regulatory constraints, and the complexity of integrating new technologies into legacy systems can slow adoption. Balancing openness with data protection and regulatory compliance is essential for sustainable implementation.
            </p>

            {/* QUOTE */}
            <div
              className="p-4 my-5"
              style={{
                background: "#fff",
                borderLeft: "4px solid #24A7F7",
                borderRadius: "10px",
              }}
            >
              <h5>
                Conclusion
              </h5>
              <p className="mb-0 fst-italic">
               Transparency in energy production, distribution, and pricing builds stronger consumer trust and engagement.
              </p>
            </div>

            {/* FOOTER */}
            <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
              <span className="text-muted">
                Category: <strong>Technology</strong>
              </span>
              <span className="text-muted">
                Share this article
              </span>
            </div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="col-lg-4">

            {/* AUTHOR CARD */}
            

            {/* RECENT POSTS */}
            <div
              className="mb-4 p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">Recent post</h5>

              <div className="mb-3">
                <h6 className="mb-1">Benefits and Challenges</h6>
                <small className="text-muted"></small>
              </div>

              <div className="mb-3">
                <h6 className="mb-1"> Energy Distribution</h6>
                <small className="text-muted"></small>
              </div>

              <div>
                <h6 className="mb-1">Sustainable Energy</h6>
                <small className="text-muted"></small>
              </div>
            </div>

            {/* TAGS */}
            <div
              className="p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark border">Blockchain</span>
                <span className="badge bg-light text-dark border">Decentralized Energy</span>
                <span className="badge bg-light text-dark border">Energy Distribution</span>
                <span className="badge bg-light text-dark border">Sustainable Energy</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog5;


