import React, { useState } from "react";
import "./GlobalPresence.css";
import worldMap from "../../assets/images/Global/worldmap.jpg";

const locations = [
  {
    id: "qatar",
    name: "Qatar",
    address: "Doha, Qatar",
    brands: [
      "https://images.pexels.com/photos/3069345/pexels-photo-3069345.jpeg",
      "https://images.pexels.com/photos/2239422/pexels-photo-2239422.jpeg",
    ],
    position: { top: "42%", left: "61%" }
  },
  {
    id: "dubai",
    name: "Dubai",
    address: "Dubai, UAE",
    brands: [
      "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg",
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg",
    ],
    position: { top: "44%", left: "63%" }
  },
  {
    id: "india",
    name: "India",
    address: "Coimbatore, India",
    brands: [
      "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg",
      "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg",
    ],
    position: { top: "45%", left: "69%" }
  },
  {
    id: "thailand",
    name: "Thailand",
    address: "Bangkok, Thailand",
    brands: [
      "https://images.pexels.com/photos/208444/pexels-photo-208444.jpeg",
      "https://images.pexels.com/photos/2240361/pexels-photo-2240361.jpeg",
    ],
    position: { top: "48%", left: "76%" }
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    address: "Colombo, Sri Lanka",
    brands: [
      "https://images.pexels.com/photos/319892/pexels-photo-319892.jpeg",
      "https://media.istockphoto.com/id/521090024/photo/dambulla-cave-temple-buddha-statues-sri-lanka.jpg?s=2048x2048&w=is&k=20&c=YHt6hylgZJSjbmuGgkIdBfT5JcEtDnjUsfH8MSlVSj0=",
    ],
    position: { top: "52%", left: "70%" }
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
