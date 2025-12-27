import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./guiding.css";
import Pic1 from '..//..//assets/images/guiding/pic1.png'
import Pic2 from '..//..//assets/images/guiding/pic2.jpg'
import ImgBanner from '..//..//assets/images/guiding/newImg2.png'





const GuidingForce = () => {
  return (
    <section className="guiding-page">

      {/* HERO */}
     <div className="guiding-hero text-center">
  <div className="container position-relative">
    <h1 className="guiding-title">Our Guiding Force</h1>
    <p className="guiding-subtitle">
      Leadership that shapes our vision, values, and future
    </p>

    {/* SIGNATURE */}
    <div className="hero-signature">
      {/* <span>— Mr. MK</span> */}
    </div>
  </div>
</div>

                {/* SECTION ------ 2 */}

        <section className="leadership-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          
          {/* CARD 1 */}
          <div className="col-md-6 col-lg-5">
            <div className="leader-card">
              <img
                src="https://images.pexels.com/photos/8430298/pexels-photo-8430298.jpeg"
                alt="Nitin Paranjpe"
                className="leader-img"
              />
              <div className="leader-info">
                <h4 className="leader-name">Name</h4>
                <p className="leader-role">Non-Executive Chairman</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-6 col-lg-5">
            <div className="leader-card">
              <img
                src="https://images.pexels.com/photos/7947713/pexels-photo-7947713.jpeg"
                alt="Priya Nair"
                className="leader-img"
              />
              <div className="leader-info darker">
                <h4 className="leader-name underline">Priya Nair</h4>
                <p className="leader-role">
                  Chief Executive Officer & Managing Director
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>         


           



      
    </section>
  );
};

export default GuidingForce;
