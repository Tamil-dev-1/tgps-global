import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./popup.css";
import Popup1 from '..//..//assets/images/popup/popup1.jpg'
import Popup2 from '..//..//assets/images/popup/popup2.png'
import { Link } from "react-router-dom";
const EnergySection = () => {
  return (
    <section className="energy-section py-5">
      <div className="container">
        <div className="row align-items-start">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="energy-title">
              Redefining Energy for a <br />
              Clean, Smart & <br />
              Decentralized
            </h2>

            <p className="energy-text">
              Whether it is renewable energy, advanced solar solutions, EV
              infrastructure, EV fleet management, or blockchain-integrated
              energy systems, our purpose remains clear: To build a greener,
              smarter, and more inclusive energy future for everyone.
            </p>

            <p className="energy-text">
              At TGPS Global, we believe that caring for communities,
              empowering industries, and protecting the planet is not just
              good business “it is the only way forward”.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-lg-7">
            <div className="row g-4">
              
              {/* CARD 1 */}
             
              <div className="col-md-6">
                <Link to="/guiding-force">
                <div className="energy-card">
                  <img
                    src={Popup1}
                    alt="Green Carpet"
                    className="energy-img"
                  />
                  <div className="energy-card-body">
                    <h5 className="card-title">Guiding Force</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
             

              {/* CARD 2 */}
              <div className="col-md-6">
                <div className="energy-card">
                  <img
                    src={Popup2}
                    alt="Ideology"
                    className="energy-img"
                  />
                  <div className="energy-card-body">
                    <h5 className="card-title">Innovation Hub</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnergySection;
