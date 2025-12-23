import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog1 = () => {
  return (
    <section style={{ background: "#F4F6FA", padding: "70px 0" }}>
      <div className="container">
        <div className="row g-5">

          {/* ===== LEFT CONTENT ===== */}
          <div className="col-lg-8">

            {/* IMAGE */}
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg"
                alt="Blog"
                className="img-fluid w-100"
                style={{
                  borderRadius: "14px",
                  height: "420px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* META */}
            <div className="mb-3">
              <span className="text-muted me-3">
                BY <strong>Lorem Ipsum</strong>
              </span>
              <span className="text-muted">14 Jan, 2024</span>
            </div>

            {/* TITLE */}
            <h2 className="fw-bold mb-4">
              Simply dummy text of the printing and typesetting industry
            </h2>

            {/* CONTENT */}
            <p style={{ lineHeight: "1.9" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

            <p style={{ lineHeight: "1.9" }}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>

            <p style={{ lineHeight: "1.9" }}>
              A reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </p>

            {/* QUOTE */}
            <div
              className="p-4 my-5"
              style={{
                background: "#fff",
                borderLeft: "4px solid #24A7F7",
                borderRadius: "10px",
              }}
            >
              <p className="mb-0 fst-italic">
                “Good design is obvious. Great design is transparent.”
              </p>
            </div>

            {/* FOOTER */}
            <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
              <span className="text-muted">
                Category: <strong>Technology</strong>
              </span>
              <span className="text-muted">
                Share this article
              </span>
            </div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="col-lg-4">

            {/* AUTHOR CARD */}
            <div
              className="mb-4 p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">About Author</h5>
              <p className="text-muted mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Author with passion for design and technology.
              </p>
            </div>

            {/* RECENT POSTS */}
            <div
              className="mb-4 p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">Recent Posts</h5>

              <div className="mb-3">
                <h6 className="mb-1">Premium UI design trends</h6>
                <small className="text-muted">10 Jan, 2024</small>
              </div>

              <div className="mb-3">
                <h6 className="mb-1">Why UX matters in 2024</h6>
                <small className="text-muted">08 Jan, 2024</small>
              </div>

              <div>
                <h6 className="mb-1">Modern web development</h6>
                <small className="text-muted">05 Jan, 2024</small>
              </div>
            </div>

            {/* TAGS */}
            <div
              className="p-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h5 className="fw-bold mb-3">Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark border">Design</span>
                <span className="badge bg-light text-dark border">UI/UX</span>
                <span className="badge bg-light text-dark border">Technology</span>
                <span className="badge bg-light text-dark border">React</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;

