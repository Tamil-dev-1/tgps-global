import React, { useState } from "react";
import "./GlobalPresence.css";
import worldMap from "../../assets/images/Global/worldmap.jpg";

const locations = [
  {
    id: "qatar",
    name: "Qatar",
    address: "Doha, Qatar",
    brands: [
      "/assets/brands/brand1.png",
      "/assets/brands/brand2.png",
    ],
    position: { top: "40%", left: "55%" }
  },
  {
    id: "dubai",
    name: "Dubai",
    address: "Dubai, UAE",
    brands: [
      "https://media.istockphoto.com/id/525034854/photo/dubai-downtown-skyline-dubai-united-arab-emirates.jpg?b=1&s=612x612&w=0&k=20&c=nalJlp43d_Sp2d8g-hYBSmEgiA6hm1KPp42dv-q_EUc=",
      "/assets/brands/brand4.png",
    ],
    position: { top: "45%", left: "52%" }
  },
  {
    id: "india",
    name: "India",
    address: "Coimbatore, India",
    brands: [
      "/assets/brands/india1.png",
      "/assets/brands/india2.png",
    ],
    position: { top: "60%", left: "50%" }
  },
  {
    id: "thailand",
    name: "Thailand",
    address: "Bangkok, Thailand",
    brands: [
      "/assets/brands/thai1.png",
      "/assets/brands/thai2.png",
    ],
    position: { top: "55%", left: "58%" }
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    address: "Colombo, Sri Lanka",
    brands: [
      "/assets/brands/sl1.png",
      "/assets/brands/sl2.png",
    ],
    position: { top: "65%", left: "52%" }
  }
];

const GlobalPresence = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="global-section text-center py-5">
      <h2 className="mb-4 fw-bold" style={{ color: "#004AAD" }}>
        Global Presence
      </h2>

      <div className="map-container position-relative mx-auto">
        <img src={worldMap} alt="World Map" className="img-fluid world-map" />

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="pin"
            style={{ top: loc.position.top, left: loc.position.left }}
            onMouseEnter={() => setHovered(loc)}
            onMouseLeave={() => setHovered(null)}
          >
            📍

            {hovered?.id === loc.id && (
              <div className="tooltip-box">
                <h5>{loc.name}</h5>
                <p>{loc.address}</p>

                <div className="brand-row">
                  {loc.brands.map((b, index) => (
                    <img key={index} src={b} alt="brand" className="brand-img" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalPresence;
