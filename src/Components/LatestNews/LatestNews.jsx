import React from "react";
import mainNewsImg from '../../assets/images/News/news1.jpeg'
import NewsImg1 from '../../assets/images/News/news2.jpeg'
import NewsImg2 from '../../assets/images/News/news3.jpg'
import NewsImg3 from '../../assets/images/News/news4.jpeg'
import NewsImg5 from '../../assets/images/News/newsImg5.jpeg'
import Missionary from "../../assets/images/News/missionary.jpeg"
import SportsImg from "../../assets/images/News/sportsImg.jpeg"
import EVCharge from '../../assets/images/News/evcharge.jpeg'
import FrecX from '../../assets/images/News/frecX.png'
import { Link } from "react-router-dom";

import './news.css'
import { RiHome4Fill } from "react-icons/ri";


const LatestNews = () => {
  return (
    <>
      <section
        className="py-5 hero-bg"
        // style={{
        //   backgroundColor: "#77DDF5",
        // }}
      >
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="row g-4 align-items-start">
            <h2
              className="fw-bold mb-4 text-center text-lg-start"
              style={{ fontSize: "1.9rem", color:"#ffff"  }}
              // color: "#1F36C7"
            >
              Latest News
            </h2>

            {/* LEFT MAIN CARD */}
           
            <div className="col-lg-5 col-md-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              
              <Link to="/news-sections">
                <div
                  className="card rounded-2 border-0 shadow-sm h-100"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={FrecX }
                    className="card-img-top rounded-0"
                    alt="Main news"
                  />
                  <div className="card-body left-card-bg">
                    <h5 className="card-title fw-bold mb-2">
                      <p
                        className="text-decoration text-white"
                        style={{ cursor: "pointer" }}
                      >
                       India’s Ethereum Has Arrived — Frequency Chain X Emerges as the Next-Gen Conscious Blockchain
                      </p>
                    </h5>
                    <p className="text-white mb-1 small mt-5">May 23, 2025</p>
                    <p className="card-text text-white" style={{ fontSize: "0.95rem" }}>
                      Frequency Chain X — the homegrown Layer-1 blockchain developed by TGPS InfoTech — is being hailed in multiple industry publications as “India’s Ethereum”, but with a purpose-driven evolution that goes beyond traditional blockchain narratives!
                    </p>
                  </div>
                </div>
               </Link>
            </div>
           

            {/* RIGHT SIDE SMALL CARDS */}
           <div
  className="col-lg-7 col-md-12 d-flex flex-column gap-3"
  data-aos="fade-left"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine"
>
  {/* CARD 1 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={EVCharge}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="news"
        />
      </div>
      <div className="col-8">
        <div className="card-body p-2">
          <h6 className="fw-semibold mb-1">
           <Link to="/news-sections-2">
            <p
              href="#"
              className="text-decoration-none text-white"
              style={{ cursor: "pointer", fontSize: "0.95rem" }}
            >
              Ponsana DAVID to Speak at EVCharge Live Thailand 2026 — Driving Conversation on EV Charging & Sustainable Mobility.
            </p>
           </Link>
          </h6>
          <p className="small mb-0">28–29 January 2026</p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={Missionary}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="news"
        />
      </div>
      <div className="col-8">
        <div className="card-body p-2">
          <h6 className="fw-semibold mb-1">
           <Link to="/news-sections-3">
            <p
              href="#"
              className="text-decoration-none text-white"
              style={{ cursor: "pointer", fontSize: "0.95rem" }}
            >
              MK Visionary Awards 2025: Empowering Young Minds Through Scholarships, Creativity, and Opportunity
            </p>
           </Link>
          </h6>
          <p className="small mb-0">November 23 </p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={SportsImg}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="news"
        />
      </div>
      <div className="col-8">
        <div className="card-body p-2">
          <h6 className="fw-semibold mb-1">
           <Link to="/news-sections-4">
            <p
              href="#"
              className="text-decoration-none text-white"
              style={{ cursor: "pointer", fontSize: "0.95rem" }}
            >
              Green Carpet Foundation Champions Inclusion Through Para Cricket Sponsorship in Coimbatore
            </p>
           </Link>
          </h6>
          <p className="small mb-0">September 5–7</p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={NewsImg5}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="news"
        />
      </div>
      <div className="col-8">
        <div className="card-body p-2">
          <h6 className="fw-semibold mb-1">
            <Link to="/news-sections-5">
            <p
              className="text-decoration text-white"
              style={{ cursor: "pointer", fontSize: "0.95rem" }}
            >
              
              CEO Ponsana Flags Child Safety Concerns on Quick-Commerce Apps, Industry Responds
              
            </p>
            </Link>
          </h6>
          <p className="small mb-0">July 15 2025</p>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      
    </>
  );
};

export default LatestNews;