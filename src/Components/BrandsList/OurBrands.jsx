import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./OurBrands.css";
import Demask from '..//..//assets/images/Thegroup/demask.png'
import Metawatts from '..//..//assets/images/Thegroup/mettawatts.png'
import TgpsInfotech from '..//..//assets/images/Thegroup/tgpsinfotech.png'
import FrecX from '..//..//assets/images/Thegroup/frecx.png'
import FV from '..//..//assets/images/Thegroup/fv.png'
import FC from '..//..//assets/images/Thegroup/fc.png'
import Zigoo from '..//..//assets/images/Thegroup/zigoo.png'
import Frecfast from '..//..//assets/images/Thegroup/frecfast.png'
import Tetsol from '..//..//assets/images/Thegroup/tetsol1.png'
import ClifChat from '../../assets/images/Thegroup/clifchat.png'

const  OurBrands= () => {
  return (
    <section className="brand-section py-5">
      <h1 className="text-center fw-bold mb-4 font" style={{color:'#1F36C7'}}>Our Brand</h1>
      <div className="container position-relative">

                          {/* box----1 */}
       
               <div className="brand-box info-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left p-5">
            <h4 className="mb-3 text-top">The Technology Engine of the Group</h4>
            <p className="brand-text mb-4">
              
               TGPS Infotech delivers end-to-end Web 2.0 solutions while leading enterprises into Web 3.0 transformation. From digital platforms to blockchain-enabled systems, we design scalable, secure, and future-ready technology foundations.This is where innovation meets execution
            </p>

            

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
            TGPS Infotech
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={TgpsInfotech }
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>

              {/* =========2===== */}

                     <div className="brand-box frecx-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left  p-5">
            <h4 className="mb-3 text-top">Layer 1 Blockchain for the Renewable Energy World</h4>
            <p className="brand-text mb-4">
              
              Frequency Chain X is the world’s first Layer 1 blockchain purpose-built for the global renewable energy ecosystem. It enables transparency, decentralization, and trust across energy generation, distribution, and sustainability markets. A blockchain designed not for speculation—but for real-world impact.
            </p>

            

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Frequency Chain X
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={FrecX}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>


                          {/* =========3===== */}

           <div className="brand-box tetsol-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left  p-5">
            <h4 className="mb-3 text-top">Solar EPC Excellence</h4>
            <p className="brand-text mb-4">
              
              Tetssol provides end-to-end solar EPC solutions for residential, commercial, and industrial applications. From design to deployment, we deliver reliable, efficient, and scalable solar infrastructure. Empowering the transition to clean energy through precision and performance.
            </p>

            

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Tetsol
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={Tetsol}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>           


                             {/* =========4===== */}
        
               <div className="brand-box info-bg  d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left  p-5">
             <h4 className="mb-3 text-top">Electric Mobility for Everyone</h4>
            <p className="brand-text mb-4">
              Frequency EV accelerates the adoption of electric mobility through smart vehicles, fleets, and infrastructure. We focus on accessibility, efficiency, and future-ready mobility solutions. Driving cleaner cities and smarter transportation ecosystems.
            </p>

            

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Frequency Vehicle
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={FV}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>
      
         
            {/* =======5====== */}

             <div className="brand-box freccharge-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left p-5">
              <h4 className="mb-3 text-top">Charging Infrastructure, Simplified</h4>
            <p className="brand-text mb-4">
             FrecCharge builds intelligent EV charging networks that are fast, accessible, and scalable. Designed for urban and highway ecosystems, our infrastructure supports the growing demand for electric mobility.Powering movement with reliability and intelligence
            </p>


            <button className="btn btn-danger fw-bold px-4 py-2"data-aos="zoom-in">
              FreC Charge
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={FC}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>


                                  {/* =======6====== */}
       
         <div className="brand-box frecfast-bg  d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left text-white p-5">
             <h4 className="mb-3 text-top">EV-Based Fast Delivery Network</h4>
            <p className="brand-text mb-4">
              FrecFast redefines last-mile logistics using clean, electric mobility. By combining speed, sustainability, and smart routing, we enable efficient urban delivery at scale. Logistics built for the cities of tomorrow.?
            </p>

           

            <button className="btn btn-danger fw-bold px-4 py-2"data-aos="zoom-in">
              Frecfast
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={Frecfast}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>
                

                 {/* ======7====== */}
                  <div className="brand-box zigoo-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left text-white p-5">
            <h4 className="mb-3 text-top">Global E-Commerce, Reinvented</h4>
            <p className="brand-text mb-4">
             ZiGoo is a next-generation e-commerce platform built for transparency, trust, and smarter shopping. By integrating advanced digital technologies, ZiGoo enhances both seller efficiency and consumer confidence. A marketplace designed for the modern digital economy.
            </p>

            

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              ZiGoo
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={Zigoo}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>

              
             {/* ======8====== */}
           <div className="brand-box metta-bg  d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left text-white  p-5">
             <h4 className="mb-3 text-top">The Web3 Browser for Digital Freedom</h4>
            <p className="brand-text mb-4">
             MetaWatts is a Web3-native browser built for decentralized access, privacy, and control. It empowers users to navigate the internet without compromising data ownership. Your gateway to the decentralized digital world.
            </p>


            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Meta Watts
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={Metawatts}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "200px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>
       

                       {/* ======9====== */}

              <div className="brand-box clifchat-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left text-white p-5">
            <h4 className="mb-3 text-top">Secure, Decentralized Communication</h4>
            <p className="brand-text mb-4">
               CliffChat enables private, censorship-resistant communication through decentralized architecture.Built for individuals and organizations that value security and autonomy. Conversations without fear, powered by next-generation privacy technology
            </p>

           

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Clifchat
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={ClifChat}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>  

                     {/* =======10====== */}
                      <div className="brand-box dmask-bg d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative" style={{marginBottom:'90px'}}>
          {/* 🔸 Left Content Box */}
          <div className="brand-left text-white p-5">
             <h4 className="mb-3 text-top">Decentralized Virtual Meetings</h4>
            <p className="brand-text mb-4">
              Demask is a privacy-first virtual meeting platform designed for the decentralized era. It ensures secure, encrypted, and user-controlled digital collaboration. Reimagining how people connect, meet, and collaborate online.
            </p>

            <div className="d-flex flex-wrap gap-4 mb-4 justify-content-center justify-content-lg-start" >
              <div className="text-center">
                <i className="bi bi-link-45deg fs-3 d-block"></i>
                <small className="fw-bold">CRM</small>
              </div>
              <div className="text-center">
                <i className="bi bi-journal fs-3 d-block"></i>
                <small className="fw-bold">Books</small>
              </div>
              <div className="text-center">
                <i className="bi bi-envelope fs-3 d-block"></i>
                <small className="fw-bold">Mail</small>
              </div>
              <div className="text-center">
                <i className="bi bi-telephone fs-3 d-block"></i>
                <small className="fw-bold">Desk</small>
              </div>
            </div>

            <button className="btn btn-danger fw-bold px-4 py-2" data-aos="zoom-in">
              Demask
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src={Demask}
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            {/* <p className="fw-semibold mb-0">lorem.</p> */}
          </div>
        </div>


                  {/* =========11====== */}

        

</div>
      
    </section>
  );
};

export default OurBrands;
