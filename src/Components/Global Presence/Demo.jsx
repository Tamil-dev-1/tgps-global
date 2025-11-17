import React from "react";
import "./GlobalPresence.css";
import worldMap from "../../assets/images/Global/worldmap.jpg"; // your blue map image

const GlobalPresence = () => {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = worldMap;
//     link.download = "GlobalPresenceMap.jpg";
//     link.click();
//   };

  return (
    <div className="global-section text-center py-5">
      <h2 className="mb-4 fw-bold" style={{color:'#004AAD'}}>Global Presence</h2>

      <div className="map-container position-relative mx-auto">
        <img src={worldMap} alt="World Map" className="img-fluid world-map" />

        {/* Location Pins */}
        <div className="pin qatar" title="Qatar">
          📍
        </div>
        <div className="pin dubai" title="Dubai">
          📍
        </div>
        <div className="pin india" title="India">
          📍
        </div>
        <div className="pin thailand" title="Thailand">
          📍
        </div>
        <div className="pin srilanka" title="Sri Lanka">
          📍
        </div>
      </div>
{/* 
      <button className="btn btn-primary mt-4" onClick={handleDownload}>
        Download Map
      </button> */}
    </div>
  );
};

export default GlobalPresence;