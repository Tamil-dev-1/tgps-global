import React from "react";
import mainNewsImg from '../../assets/images/News/news1.jpeg'
import NewsImg1 from '../../assets/images/News/news2.jpeg'
import NewsImg2 from '../../assets/images/News/news3.jpg'
import NewsImg3 from '../../assets/images/News/news4.jpeg'
import NewsImg4 from '../../assets/images/News/news5.jpg'


const LatestNews = () => {
  return (
    <>
      <section
        className="py-5"
        style={{
          backgroundColor: "#77DDF5",
        }}
      >
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="row g-4 align-items-start">
            <h2
              className="fw-bold mb-4 text-center text-lg-start"
              style={{ fontSize: "1.9rem", color: "#1F36C7" }}
            >
              Latest News
            </h2>

            {/* LEFT MAIN CARD */}
            <div className="col-lg-5 col-md-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <div
                className="card rounded-2 border-0 shadow-sm h-100"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={mainNewsImg}
                  className="card-img-top rounded-0"
                  alt="Main news"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">
                    <a
                      href="#"
                      className="text-decoration-none text-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita, modi?
                    </a>
                  </h5>
                  <p className="text-muted mb-1 small">28 October 2025</p>
                  <p className="card-text" style={{ fontSize: "0.95rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores incidunt reiciendis dolores aspernatur iure sunt
                    amet aut enim omnis, sed deserunt recusandae ipsa excepturi
                    dolore, debitis doloremque quis!
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE SMALL CARDS */}
            <div className="col-lg-7 col-md-12 d-flex flex-column gap-3"
             data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              {[
                {
                  img: NewsImg1,
                  date: "27 October 2025",
                },
                {
                  img: NewsImg2,
                  date: "23 October 2025",
                },
                {
                  img: NewsImg3,
                  date: "10 October 2025",
                },
                {
                  img: NewsImg4,
                  date: "05 October 2025",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card border-0 shadow-sm rounded-2"
                  style={{ overflow: "hidden" }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img
                        src={item.img}
                        className="img-fluid w-100 h-100 object-fit-cover"
                        alt="news"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body p-2">
                        <h6 className="fw-semibold mb-1">
                          <a
                            href="#"
                            className="text-decoration-none text-primary"
                            style={{ cursor: "pointer", fontSize: "0.95rem" }}
                          >
                            Lorem ipsum dolor sit amet
                          </a>
                        </h6>
                        <p className="text-muted small mb-0">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default LatestNews;