import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeatureCarousel.css";

export default function FeatureCarousel() {
  const features = [
    {
      title: "Fast Performance",
      text: "Experience blazing fast speed with optimized architecture.",
    },
    {
      title: "Secure Platform",
      text: "Advanced protection ensures your data stays safe.",
    },
    {
      title: "Easy Integration",
      text: "Connect with APIs and tools in just minutes.",
    },
    {
      title: "Scalable Design",
      text: "Grow without limits using our flexible modules.",
    },
    {
      title: "24/7 Support",
      text: "Get expert help whenever you need.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Innovation</h2>

        <div className="feature-scroll d-flex gap-3">
          {features.map((item, index) => (
            <div className="feature-card p-4 shadow-sm rounded-4" key={index}>
              <h5 className="fw-bold mb-2">{item.title}</h5>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
