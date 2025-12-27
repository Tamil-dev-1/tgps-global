import React from "react";
import bgImage from "../../assets/images/About/about-bg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './OurCompany.css'
import Focus from "../../assets/images/ourcompany/focus2a.png";
import Playbook from "../../assets/images/ourcompany/playbook.jpg";
import Honourwall from "../../assets/images/ourcompany/honourwall1.png"
import Story from "../../assets/images/ourcompany/story.jpg";
import Innovation from "../../assets/images/ourcompany/innovation1.png";
import Brandsignature from "../../assets/images/ourcompany/tgps3.png";
import Guiding from "../../assets/images/ourcompany/guiding1.jpg";
// import LogoBrands from '..//..//Components/ourbrand/LogoBrands'
// import ErrorBoundary from "../../error/errorBoundary";

const AboutUs = () => {
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          minHeight: "30vh",
          backgroundColor: '#001F82',
          padding: "6rem 1.5rem",
        }}
      >
        {/* Main Heading */}
        <div className="">
          <h1
            className="fw-bold"
            data-aos="zoom-in"
            style={{
              fontSize: "clamp(3rem, 5vw, 6rem)", // 🔹 Larger headline
              letterSpacing: "2px",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Hello!
          </h1>
          <h2
            className="fw-semibold"
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 4rem)", // 🔹 Big subheading
              lineHeight: "1.3",
            }}
          >
            We are <span style={{ color: "#FFD700" }}>TGPS GLOBAL</span>
          </h2>
          <p style={{ fontWeight: '600' }}>On a mission to build a cleaner, smarter and sustainable world.</p>
        </div>



      </div>



      {/* SECTION ========= 2 */}


      <section style={{ background: "#001F82", paddingBottom: "40px" }}>
        <div className="container">

          {/* ROW */}
          <div className="row g-4 justify-content-center">

            {/* CARD */}
            {[
              {
                title: "In Focus",
                link: "/infocus",
                img: Focus,
              },
              {
                title: "Our Playbook",
                link: "/our-playbook",
                img: Playbook,
              },
              {
                title: "Guiding Force",
                link: "/guiding-force",
                img: Guiding,
              },
              // {
              //   title: "The TGPS Story",
              //   link: "/thetgps-story",
              //   img: Story,
              // },
              {
                title: "Innovation Hub",
                link: "/innovation-hub",
                img: Innovation,
              },
              {
                title: "The TGPS Honour Wall",
                link: "/the-tgpshonour",
                img: Honourwall,
              },
              {
                title: "Brand Signature",
                link: "/brand-signature",
                img: Brandsignature,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center"
              >
                <div className="card premium-card text-white border-0 w-100">
                  <img
                    src={item.img}
                    className="premium-img"
                    alt={item.title}
                  />
                  <div className="card-body text-center px-1 py-2">
                    <Link to={item.link} className="text-decoration-none">
                      <h6 className="fw-semibold m-0 text-light">
                        {item.title}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>

        {/* STYLE */}
        <style>
          {`
      .premium-img {
        height: 160px;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
      }

      .premium-card {
        background: transparent;
        transition: .3s ease;
      }

      .premium-card:hover {
        transform: translateY(-6px);
      }
    `}
        </style>
      </section>



      {/* PARAGRAP TEXT SECTIONS */}


      <div style={{ backgroundColor: '#77DDF5' }}>
        <div className="text center-section py-5">
          <p className="text-p">Partnering the World’s Clean Energy Transformation</p>
          <p>TGPS Global is a pioneering renewable energy and clean-tech company, committed to shaping a smarter, cleaner and more sustainable planet. Since our inception, we have been driven by a simple belief “what is good for the world is good for TGPS”. Today, we deliver advanced solar solutions, EV infrastructure, EV fleet management systems and blockchain-integrated energy technologies to industries, communities and enterprises across the globe.
          </p>
          <p>With a diverse portfolio and a strong capability ecosystem, we serve a rapidly growing global market demanding reliable, intelligent and sustainable energy systems. Our solutions are engineered to meet evolving expectations from smart solar deployments and clean mobility to next-generation digital energy platforms that support decentralization and transparency.
          </p>

          <p>Innovation is at the core of our journey. We continuously design purpose-led technologies that bring efficiency, affordability and environmental impact together. Through seamless customer engagement, digital-first strategies and strong partnerships, we create long-term value for our stakeholders while enabling the world’s transition to clean energy.
          </p>

          <p>As we accelerate toward a future of global green transformation, our foundation remains anchored in Sustainability, Technology and Purpose, guided by our core values of Integrity, Responsibility, Collaboration and Innovation. Our strong reputation in clean-tech and climate-aligned practices reflects our commitment to responsible energy leadership and a better future for the planet.
          </p>

          <p>TGPS Global stands at the intersection of renewable energy, advanced technology and global impact, empowering a world that is ready for the energy systems.
          </p>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
