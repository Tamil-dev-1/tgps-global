import React from "react";
import mainNewsImg from '../../assets/images/News/news1.jpeg'
import NewsImg1 from '../../assets/images/News/news2.jpeg'
import NewsImg2 from '../../assets/images/News/news3.jpg'
import NewsImg3 from '../../assets/images/News/news4.jpeg'
import NewsImg4 from '../../assets/images/News/news5.jpg'
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
                    src={mainNewsImg}
                    className="card-img-top rounded-0"
                    alt="Main news"
                  />
                  <div className="card-body left-card-bg">
                    <h5 className="card-title fw-bold mb-2">
                      <p
                        className="text-decoration text-white"
                        style={{ cursor: "pointer" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, modi?
                      </p>
                    </h5>
                    <p className="text-white mb-1 small mt-5">28 October 2025</p>
                    <p className="card-text text-white" style={{ fontSize: "0.95rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores incidunt reiciendis dolores aspernatur iure sunt
                      amet aut enim omnis, sed deserunt recusandae ipsa excepturi
                      dolore, debitis doloremque quis!
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
          src={NewsImg1}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, a.
            </p>
           </Link>
          </h6>
          <p className="small mb-0">27 October 2025</p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={NewsImg2}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, a.
            </p>
           </Link>
          </h6>
          <p className="small mb-0">23 October 2025</p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={NewsImg3}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, a.
            </p>
           </Link>
          </h6>
          <p className="small mb-0">10 October 2025</p>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="card border-0 shadow-sm rounded-2" style={{ overflow: "hidden" }}>
    <div className="row g-0 align-items-center card-bg">
      <div className="col-4">
        <img
          src={NewsImg4}
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
              
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, a.
              
            </p>
            </Link>
          </h6>
          <p className="small mb-0">05 October 2025</p>
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