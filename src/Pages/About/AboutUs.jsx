import React from "react";
import bgImage from "../../assets/images/About/about-bg.png";
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          minHeight: "75vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "6rem 1.5rem", // more breathing space
        }}
      >
        {/* Main Heading */}
        <div className="mb-5">
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(3rem, 5vw, 6rem)", // 🔹 Larger headline
              letterSpacing: "2px",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Hello!
          </h1>
          <h2
            className="fw-semibold"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 4rem)", // 🔹 Big subheading
              lineHeight: "1.3",
            }}
          >
            We are <span style={{ color: "#FFD700" }}>TGPS GLOBAL</span>
          </h2>
        </div>

        {/* Top Navigation */}
        <div className="d-flex flex-wrap justify-content-center gap-5 mb-4">
  {[
    { name: "THE GROUP", path: "/the-group" },
    { name: "NEWS", path: "/news" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT", path: "/contact" },
  ].map((item, index) => (
    <Link
      key={index}
      to={item.path}
      className="text-white text-decoration-none fw-semibold"
      style={{
        fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
        letterSpacing: "1.2px",
        transition: "color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
      onMouseLeave={(e) => (e.target.style.color = "white")}
    >
      {item.name}
    </Link>
  ))}
</div>

        {/* Bottom Navigation */}
        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {[
            "At a glance",
            "Our strategy",
            "Our team",
            "Innovation and R&D",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white fw-semibold text-decoration-underline"
              style={{
                fontSize: "clamp(1.3rem, 2vw, 1.6rem)", // 🔹 Bigger underline links
                textUnderlineOffset: "6px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button Link */}
        <a
          href="#"
          className="btn border-0 px-5 py-3 fw-semibold"
          style={{
            borderRadius: 0,
            backgroundColor: "#FFD700",
            color: "#000",
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", // 🔹 Bigger button text
            letterSpacing: "0.6px",
          }}
        >
          View our company →
        </a>
      </div>
    </>
  );
};

export default AboutUs;
