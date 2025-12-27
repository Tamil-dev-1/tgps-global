import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom"
import IMG1 from "../../assets/images/blog/img1.png"
import IMG2 from "../../assets/images/blog/img2.jpg"
import IMG3 from "../../assets/images/blog/img3.png"
import IMG4 from "../../assets/images/blog/img4.jpeg"
import IMG5 from "../../assets/images/blog/img5.jpg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogCarousel = () => {


  
  return (
    <>
    <div
   
     style={{ padding: "60px 0", backgroundColor: "#24A7F7" }}>
      <div className="container text-center">
        <h2 style={{ fontWeight: "700", color: "#fff" }}>Our Blogs</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="mt-5"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <Link to='/blog-1' className="text-decoration-none">

            <div
              className="card border-0"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={IMG2}
                alt="Blog"
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                  
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  Blockchain’s Role <br /> in Renewable Energy
                </h6>
              </div>
            </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <Link to='/blog-2' className="text-decoration-none">

            <div className="card border-0" style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}>
              <img
                src={IMG1}
                alt="Blog"
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                  
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  Decentralized Energy: <br /> Benefits and Challenges
                </h6>
              </div>
            </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
           <Link to='/blog-3' className="text-decoration-none">
            <div className="card border-0" style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}>
              <img
                src={IMG3}
                alt="Blog"
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  How Smart Grids Are Shaping the Future of Energy Distribution
                </h6>
              </div>
            </div>
           </Link>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
           <Link to='/blog-4' className="text-decoration-none">
            <div className="card border-0" style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}>
              <img
                src={IMG4}
                alt="Blog"
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                  
                </p>
                <p style={{ fontWeight: "600" }}>
                  Sustainable Energy Practices for Businesses
                </p>
              </div>
            </div>
           </Link>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
           <Link to='/blog-5' className="text-decoration-none">

            <div className="card border-0" style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}>
              <img
                src={IMG5}
                alt="Blog"
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                  
                </p>
                <h6 style={{ fontWeight: "600" }}>
                   The Importance of Energy Transparency in Building Trust Introduction
                </h6>
              </div>
            </div>
           </Link>
          </SwiperSlide>
        </Swiper>

        
        {/* ===== VIEW MORE BUTTON ===== */}
        <div className="mt-5 text-center">
          <Link to="/blogs">
            <button
              className="btn px-5 py-2 fw-semibold"
              style={{
                backgroundColor: "#fff",
                color: "#24A7F7",
                borderRadius: "30px",
                border: "2px solid #fff",
                transition: "all 0.3s ease",
              }}
            >
              View More Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogCarousel;
