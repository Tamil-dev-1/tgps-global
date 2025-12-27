import React from "react";
import { Link } from "react-router-dom"
import "./News1.css";
import FrecX from '..//..//assets/images/News/frecx.png'
const News1 = () => {
  return (
    <>
    <section className="IBM-font">
      {/* ===== BREADCRUMB BAR ===== */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <span>
            <Link to='/' className="text-white">Home <span>▶</span></Link> 
            {/* All news stories <span>▶</span>{" "}
            <strong>The science of fragrance, emotion, and self-confidence</strong> */}
          </span>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
     <section className="science-section">
  <div className="container-fluid p-0">
    <div className="row g-0 science-row">

      {/* LEFT IMAGE */}
      <div className="col-lg-7 left-image">
        <img
          src={FrecX}
          alt="Brain Research"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-5 right-content">
        <div className="content-inner">
          <h4>
            India’s Ethereum Has Arrived — Frequency Chain X Emerges as the Next-Gen Conscious Blockchain
          </h4>

          <p className="date">
            Published: <strong>May 23, 2025</strong>
          </p>

          <p className="date">
             <strong>New Delhi | Web3 Innovation & Sustainable Tech</strong>
          </p>

          <p>
           Frequency Chain X — the homegrown Layer-1 blockchain developed by TGPS InfoTech — is being hailed in multiple industry publications as “India’s Ethereum”, but with a purpose-driven evolution that goes beyond traditional blockchain narratives
          </p>

          

          <p>
            
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

                               {/* SECTION ------- 2 */}

              <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <h5>
            India Technology News
          </h5>
            <p className="intro-text">
              Positioned not as a replication but as a next-generation blockchain designed for real-world impact, Frequency Chain X combines sustainability, performance, and social utility to demonstrate how Web3 can serve both people and the planet. 
India Technology News
            </p>

            {/* TITLE */}
            <h5>
              Pushing Beyond Ethereum’s Limits
            </h5>

            {/* CONTENT */}
            <p>
             While global attention has long been on Ethereum’s innovation, Frequency Chain X was built with a distinct philosophy — to solve persistent challenges like high gas fees, network bottlenecks, and environmental trade-offs. This is achieved through its proprietary S2PoS (Solid Split Proof of Stake) consensus mechanism, which delivers high transaction throughput, ultra-low energy consumption, and robust decentralization without compromising performance. 
India Technology News
            </p>

            <p>
             This technology enables the blockchain to operate efficiently and sustainably — addressing issues that traditional proof-of-work or even some proof-of-stake systems struggle with. 
India Technology News
            </p>

            <h5>
              Leadership and Purpose-Driven Innovation
            </h5>

            <p>
             Frequency Chain X’s evolution reflects years of deliberate strategy and engineering — beginning with the Frequency Token on Polygon as a sustainability-reward utility token and progressing through successful beta deployments. 
India Technology News
            </p>

            <p>
              Murugesan Kandaswamy (MK), Founder of the project, envisioned a blockchain that goes beyond hype, focusing instead on ethical technology and infrastructure for sustainable development. 
            </p>

          </div>
        </div>
      </div>
    </section>



                           {/* SECTION -------- 3 */}
 {/* FIXED HERO */}
<section className="fixed-hero">
  <img
    src={FrecX}
    alt="frecX"
    className="fixed-hero-img"
  />

  <div className="fixed-hero-content d-flex align-items-center">
    <div className="container text-white">
      {/* <h1 className="display-4 fw-bold">
        You are unstoppable
      </h1>
      <p className="fs-5">
        30H long lasting fragrance
      </p> */}
    </div>
  </div>
</section>

{/* NORMAL SCROLL SECTION */}
<section className="after-hero py-5">
  <div className="container">
    <h2></h2>
    <p>
      
    </p>
    <p style={{ height: "100vh" }}>
      
    </p>
  </div>
</section>



                            {/* SECTION ------- 4 */}

                  <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <h5>
              India Technology News
            </h5>
            <p className="intro-text">
              Alongside him, Ms. Ponsana David, CEO of TGPS Global, has been highlighted for her leadership in steering the project with clarity, purpose, and long-term impact orientation — treating decentralization as a human right and emphasizing the need for technology that respects both people and the environment. 
India Technology News
            </p>

            {/* TITLE */}
            <h5 >
              Real-World Adoption and Ecosystem Integration
            </h5>
            <br />

            {/* CONTENT */}
            <p className="fw-bold">
             Frequency Chain X is already powering practical applications that span key sectors:
            </p>

            <p >
           Frequency Vehicle — supporting EV data, energy use, and charging transparency with blockchain-powered integrity
            </p>

            <p>
              MetaWatts — a low-carbon Web3 browser designed for conscious digital interaction
            </p>
            <p>
              EnergyFit — a clean-energy community staking platform rewarding sustainable action
            </p>
            <p>
              Cliff Chat & DeMask — private communication and identity tools free from surveillance
            </p>
            <p>
              FreC Fast — logistics and mobility solutions backed by blockchain transparency
            </p>

            <h5>
              India Technology News
            </h5>
            <p>
              These dApps demonstrate that Frequency Chain X isn’t just theoretical — it’s operational and integrated into sectors prioritizing sustainability and real utility. 
India Technology News
            </p>

            <h5>
              Alpha Launch and Momentum
            </h5>
            <p>
              With its Alpha release live, Frequency Chain X is moving toward broader ecosystem adoption, onboarding validators, expanding partnerships across EV, energy, logistics and clean tech spaces, and positioning for Tier-1 and Tier-2 exchange listings. Early community and developer engagement continue to grow as the project scales.
            </p>

          </div>
        </div>
      </div>
    </section>                    
                 

                 
</section>
    </>
  );
};

export default News1;
