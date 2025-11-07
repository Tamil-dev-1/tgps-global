import React from "react";

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
            <div className="col-lg-5 col-md-12">
              <div
                className="card rounded-2 border-0 shadow-sm h-100"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
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
            <div className="col-lg-7 col-md-12 d-flex flex-column gap-3">
              {[
                {
                  img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg",
                  date: "27 October 2025",
                },
                {
                  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
                  date: "23 October 2025",
                },
                {
                  img: "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg",
                  date: "10 October 2025",
                },
                {
                  img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg",
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
