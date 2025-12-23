import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogCarousel = () => {


  
  return (
    <>
    <motion.div
    initial={{opacity: 0, scale: 0}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 2}}
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
                src="https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg"
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
                  BY Lorem Ipsum - 14 Jan, 2024
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  simply dummy text of the printing and typesetting industry.
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
                src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
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
                  BY Lorem Ipsum - 14 Jan, 2024
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  simply dummy text of the printing and typesetting industry.
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
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
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
                  BY Lorem Ipsum - 14 Jan, 2024
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  simply dummy text of the printing and typesetting industry.
                </h6>
              </div>
            </div>
           </Link>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
           <Link to='/blog-5' className="text-decoration-none">
            <div className="card border-0" style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
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
                  BY Lorem Ipsum - 14 Jan, 2024
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  simply dummy text of the printing and typesetting industry.
                </h6>
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
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
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
                  BY Lorem Ipsum - 14 Jan, 2024
                </p>
                <h6 style={{ fontWeight: "600" }}>
                  simply dummy text of the printing and typesetting industry.
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
    </motion.div>
    </>
  );
};

export default BlogCarousel;
