import React from "react";
import "./Dummy.css"; // we'll move CSS there

const DummySlider = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 9 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="https://images.pexels.com/photos/2379476/pexels-photo-2379476.jpeg" alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="images/dragon_2.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="images/dragon_3.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="images/dragon_4.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="images/dragon_5.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="images/dragon_6.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="images/dragon_7.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="images/dragon_8.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="images/dragon_9.jpg" alt="" />
        </div>
        {/* <div className="item" style={{ "--position": 10 }}>
          <img src="images/dragon_10.jpg" alt="" />
        </div> */}
      </div>

      {/* <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>Lorem</h2>
          <p>
            <b>Lorem</b>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="model"></div>
      </div> */}
    </div>
  );
};

export default DummySlider;
