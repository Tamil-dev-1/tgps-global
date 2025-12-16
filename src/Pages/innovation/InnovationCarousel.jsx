import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InnovationCarousel() {
  const features = [
    {
      title: "“The Solar Shift”",
      text: "How high-efficiency solar grids are powering industries and reducing energy dependency.",
    },
    {
      title: "“Mobility Without Emissions”",
      text: "From EV manufacturing to predictive fleet management, we’re redefining how the world moves.",
    },
    {
      title: "“The Rise of Decentralized Work”",
      text: "DeMask — an identity-secure, decentralized meeting platform transforming communication.",
    },
    {
      title: "“Blockchain for a Greener Planet”",
      text: "How Frequency Chain X is turning renewable energy tracking into a transparent, global system.",
    },
  ];

  return (
    <section className="py-5" style={{backgroundColor:"#001F82"}}>
      <div className="container">
        <h2 className="fw-bold text-center mb-4 text-white">Innovation Stories</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="feature-slide-card p-4 rounded-4 shadow-sm">
                <h5 className="fw-bold mb-2" style={{color:'#001F82',fontSize:'25px'}}>{item.title}</h5>
                <p className="fw-bold" style={{color:'#001F82'}}>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
