import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./guiding.css";

const ModernDummyPage = () => {
  return (
    <div className="dummy-wrapper">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-lg-7 col-md-10 text-center">
            
            <div className="dummy-card">
              <span className="badge bg-primary mb-3">Coming Soon</span>

              <h1 className="dummy-title">
                This Page Is Under Construction
              </h1>

              <p className="dummy-text">
                We’re working hard to bring you a modern and meaningful experience.
                This section will be available soon.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-primary px-4">
                  Go Home
                </button>
                <button className="btn btn-outline-secondary px-4">
                  Contact Us
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernDummyPage;
