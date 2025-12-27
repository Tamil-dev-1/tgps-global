import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG3 from '../../../assets/images/blog/img3.png'

const Blog3 = () => {
  return (
    <section style={{ background: "#F4F6FA", padding: "70px 0" }}>
      <div className="container">
        <div className="row g-5">

          {/* ===== LEFT CONTENT ===== */}
          <div className="col-lg-8">

            {/* IMAGE */}
            <div className="mb-4">
              <img
                src={IMG3}
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
             How Smart Grids Are Shaping the Future of Energy Distribution
            </h2>

            {/* CONTENT */}
            <h5 className="fw-bold">
              Introduction
            </h5>
            <p style={{ lineHeight: "1.9" }}>
              The energy landscape is undergoing a radical transformation, and at the heart of this change is the concept of smart grids. A smart grid is a modernized electrical grid that uses advanced technology to enhance the efficiency, reliability, and sustainability of electricity distribution. These grids incorporate digital communication systems, sensors, and automation to create a dynamic and responsive power network. As global demand for energy increases, the importance of smart grids becomes clearer, especially in the context of renewable energy integration and the need for more resilient infrastructure.
            </p>

              <h5 className="fw-bold">
              Components of Smart Grids
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Smart grids are composed of various sophisticated components that work together to optimize energy distribution and consumption.
            </p>

             <h5 className="fw-bold">
              Advanced Metering Infrastructure (AMI)
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              AMI is a key component of smart grids, enabling two-way communication between utilities and consumers. Smart meters provide real-time data on energy usage, allowing utilities to better manage supply and demand. For consumers, this means more control over energy consumption and potential cost savings through dynamic pricing models.
            </p>





             <h5 className="fw-bold">
              Energy Management Systems (EMS)
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Energy management systems are software platforms that monitor and control the generation, transmission, and distribution of electricity. EMS integrates renewable energy sources, manages energy storage, and optimizes load balancing, ensuring that the grid operates efficiently while minimizing outages and energy waste. This real-time data analytics capability allows for proactive management of the power network.
            </p>

             <h5 className="fw-bold">
             Benefits of Smart Grids
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              Smart grids offer a multitude of benefits that make them a game-changer in the energy sector.
            </p>

             <h5 className="fw-bold">
              Technological and Financial Barriers
            </h5>

            <p style={{ lineHeight: "1.9" }}>
              The technology required for smart grids—such as sensors, communication networks, and software platforms—is costly to develop and implement. Utilities face significant upfront investment, and the long-term benefits, while substantial, may not be immediately apparent. This financial burden, coupled with the need for technological upgrades, has slowed the widespread adoption of smart grids
            </p>

             <h5 className="fw-bold">
              Case Studies
            </h5>

            <p style={{ lineHeight: "1.9" }}>
             Several countries and regions have already implemented smart grid technologies, providing valuable lessons for the future.
            </p>

            <h5 className="fw-bold">
              Europe: Italy’s Enel Distribuzione
            </h5>

            <p style={{ lineHeight: "1.9" }}>
             Italy's Enel Distribuzione is a leading example of a successful smart grid implementation. The company has installed millions of smart meters and developed a highly automated grid that improves energy efficiency, enhances monitoring capabilities, and facilitates better energy management across the country.
            </p>

            <h5 className="fw-bold">
              United States: Pacific Gas and Electric (PG&E)
            </h5>

            <p style={{ lineHeight: "1.9" }}>
            PG&E has been at the forefront of smart grid technology with its extensive rollout of smart meters and grid automation. The company’s initiatives have resulted in significant reductions in outage durations, improved grid reliability, and better integration of renewable energy into the grid.
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
                Smart grids enhance efficiency, reliability, and sustainability, shaping the future of energy distribution.
Despite cost and cybersecurity challenges, their long-term benefits make them vital for resilient and renewable-ready power networks
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
            {/* <div
              className="mb-4 p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">About Author</h5>
              <p className="text-muted mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Author with passion for design and technology.
              </p>
            </div> */}

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

export default Blog3;

