import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import EVCharge from '../../../assets/images/News/evcharge.jpeg'
import "./News2.css";

const News2 = () => {
  return (
    <>
    <section className="IBM-font">
      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-bar">
        <div className="container py-2">
          <Link to="/" className="text-white"><span style={{fontSize:"15px"}}>Home</span></Link>
          <span>›</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="press-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <h1 className="press-title">
                Ponsana DAVID to Speak at EVCharge Live Thailand 2026 — Driving Conversation on EV Charging & Sustainable Mobilityṣ
              </h1>

              <div className="press-meta">
                <span>Published: 28–29 January 2026</span>
                <span className="dot">•</span>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>

              <p className="press-desc">
                Ponsana DAVID, Chairman of the Green Carpet Foundation and CEO of TGPS Global, has been invited as a featured speaker at EVCharge Live Thailand 2026, one of Southeast Asia’s most influential events focused on electric vehicles (EVs) and charging infrastructure. The event will take place on 28–29 January 2026 at BITEC, Bangkok, Thailand. 
Terrapinn
              </p>

              <div className="press-image">
                <img
                  src={EVCharge}
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                  EVCharge Live Thailand 2026 is a premier business-to-business exhibition and conference that brings together the entire EV ecosystem — from policymakers, industry leaders, and infrastructure developers to technology providers and investors. The event is designed to address the rapid evolution of electric mobility, particularly the charging infrastructure, which is considered a cornerstone for accelerating EV adoption across Thailand and the ASEAN region. 
Terrapinn
                </p>

                <p>
                  Over two days, the event will feature interactive sessions, expert presentations, product demonstrations, and networking opportunities aimed at advancing thought leadership and collaboration in the EV sector. Attendees will gain deep insights into key themes such as fast charging technology, fleet and battery management, data platforms, business models, investment strategies, last–mile logistics, regulatory frameworks, and emerging trends in energy integration and maintenance. 
Terrapinn
                </p>

                <p>
                  Ponsana David joins a distinguished lineup of global and regional industry speakers, contributing her perspective on sustainable mobility, infrastructure development, and the role of multi-sector collaboration in shaping resilient, equitable transportation ecosystems. Her participation highlights the Green Carpet Foundation’s ongoing commitment to promoting innovative, environmentally responsible solutions and fostering partnerships that support the growth of green technologies and infrastructure. 
Terrapinn
                </p>
                    In addition to keynote talks and sessions, the event will host over 150 expert speakers, hands-on product demos, and exhibits, allowing delegates to explore the latest innovations driving the future of EV charging. Delegates will also have opportunities for networking and strategic dialogues, essential for forming partnerships that will influence the adoption and integration of next-generation EV technologies.Terrapinn
                <p>
                  As Thailand continues to build out its EV ecosystem — supported by government initiatives and private sector investment — platforms like EVCharge Live Thailand are pivotal for sharing knowledge, spotlighting emerging trends, and catalysing collaboration across borders and industries. 
Terrapinn
                </p>

                <p>
                  
                </p>

                <hr />
              </div>

            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default News2;
