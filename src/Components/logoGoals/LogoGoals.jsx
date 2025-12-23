import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./logoGoal.css";

import UnitedNation from "../../assets/images/goals/unitednation.jpg"
import UNFCCC from "../../assets/images/goals/UNFCCC.jpg"
import Goals from "../../assets/images/goals/goals.jpeg"
import TGPSLOGO from "../../assets/images/goals/tgps.png"
import Transcendent from "../../assets/images/goals/transcendent.jpg"
import Savilinka2 from "../../assets/images/goals/savilinka2.jpg"
import Minerva from "../../assets/images/goals/minerva.jpg"
import INFOTECH  from "../../assets/images/goals/tgpsinfo.png"
import Binshehab  from "../../assets/images/goals/binshehab.jpg"
import SDGWheel  from "../../assets/images/goals/SDGWheel.png"
const LogoSection = () => {
  return (
    <div className="container py-5 text-center logos">

      {/* ROW 1 */}
      <div className="row justify-content-around mt-4">
  <div className="col-md-2 col-6">
    <img src={UnitedNation } className="logo-img" />
    {/* <p className="logo-desc">RESEARCH & DEVELOPMENT</p> */}
  </div>

  <div className="col-md-2 col-6">
    <img src={UNFCCC} className="small-logo" />
  </div>

  <div className="col-md-2 col-6">
    <img src={Goals} className="goal-logo" />
  </div>

  <div className="col-md-2 col-6">
    <img src={TGPSLOGO} className="logo-img" />
  </div>
  
</div>

      {/* ROW 2 CENTER */}
      {/* <div className="row justify-content-center mt-5 mb-1">
        <div className="col-md-4">
          <img src={TGPSLOGO} className="logo-img big-logo" />
        </div>
      </div> */}

      {/* ROW 3 */}
          <div className="row justify-content-around mt-4">
  <div className="col-md-2 col-6">
    <img src={Savilinka2} className="logo-img" />
  </div>

  <div className="col-md-2 col-6">
    <img src={Transcendent} className="logo-img" />
  </div>
</div>
                    {/* ROW --- 4 CENTER */}
                
<div className="row justify-content-center mb-5">
        {/* <div className="col-md-2 col-6">
    <img src={SDGWheel} className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div> */}
      </div>

      {/* ROW 5 */}
         <div className="row justify-content-around mt-4">
  <div className="col-md-2 col-6">
    <img src={Binshehab} className="logo-img" />
   
  </div>

  <div className="col-md-2 col-6">
    <img src={Minerva} className="logo-img" />
    {/* <p className="logo-desc">RESEARCH & DEVELOPMENT</p> */}
  </div>
  
</div>


     {/* ROW 6 IMAGES IN ONE ROW */}
<div className="row justify-content-center mt-4">
  <div className="col-md-2 col-6">
    <img src={INFOTECH} className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src={INFOTECH} className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src={INFOTECH}  className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src={INFOTECH} className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src={INFOTECH}  className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src={INFOTECH}  className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>
</div>

                  {/* ROW ----7 */}
<div className="row justify-content-center mt-4">
  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>
</div>

                   {/* row-----8 */}

<div className="row justify-content-center mt-4">
  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>
  
</div>

                   {/* ROW ----9 */}


<div className="row justify-content-center mt-4">
  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6 ">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>

  <div className="col-md-2 col-6">
    <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" className="logo-img" />
    <p className="logo-desc">RESEARCH & DEVELOPMENT</p>
  </div>
</div>


    </div>
  );
};

export default LogoSection;
