import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
// import Office1 from "../../assets/images/office/office1.png"
import "./office2.css";
// import Missionary from "../../../assets/images/News/missionary.jpeg"
import Office2 from '../../assets/images/office/office2.jpg'
const News3 = () => {
  return (
    <>
    <section className="IBM-font">
      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-bar">
        <div className="container py-2">
          <Link to="/" className="text-white"><span style={{fontSize:"15px"}}>Home</span></Link>
          <span>›</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="press-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <h1 className="press-title">
                True leadership is the ability to grow boldly—without losing sight of people, purpose, and the planet.
              </h1>

            


              <div className="press-image">
                <img
                  src={Office2}
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                 At the heart of TGPS Global’s execution, expansion, and ethical compass stands Ms. Ponsana David, the Chief Executive Officer of TGPS Global and Chairman of the Green Carpet Foundation. She represents the bridge between vision and velocity, ensuring that ambition translates into action—and growth remains grounded in responsibility.
                </p>

                <p>
                 Ms. Ponsana David leads with a rare balance of strategic discipline and human-centered leadership. Her approach to governance is rooted in the belief that sustainable enterprises are built not only through innovation and capital, but through clarity of purpose, accountability, and social consciousness.
                </p>
                <h5 className="fw-bold">
                    Driving Strategy with Purpose
                </h5>

                <p className="fw-bold">
                 As CEO of TGPS Global, Ms. Ponsana David plays a pivotal role in steering the organization across its diverse verticals—renewable energy, electric mobility, blockchain ecosystems, IT solutions, and sustainability-driven initiatives. She oversees the alignment of operations, partnerships, and long-term strategy, ensuring that every business vertical contributes meaningfully to the Group’s larger mission.
                </p>

                <p>
                  Her leadership focuses on structured growth, operational excellence, and ecosystem thinking. Under her direction, TGPS Global continues to strengthen its internal systems, global collaborations, and implementation frameworks—transforming complex ideas into reliable, scalable solutions.
                </p>

                <h5 className="fw-bold">
                    Leadership Beyond the Boardroom
                </h5>

                <p>
                 What sets Ms. Ponsana David apart is her conviction that leadership must extend beyond commercial success. As Chairman of the Green Carpet Foundation, she champions environmental responsibility, climate awareness, and inclusive development—advocating for a future where economic progress does not come at the cost of ecological balance or social equity.
                </p>

                <p>
              Through the Foundation, she actively supports initiatives centered on carbon control, sustainability education, community empowerment, and green transitions, reinforcing TGPS Global’s belief that businesses must be active participants in shaping a better world.
                </p>

                <h5 className="fw-bold">
                   A People-First Leadership Philosophy
                </h5>

                <p>
                 Ms. Ponsana David is known for her people-centric leadership style. She believes organizations thrive when individuals are empowered, heard, and trusted. Her focus on collaboration, transparency, and continuous learning has helped foster a culture where teams operate with ownership and purpose.
                </p>

                

              
                <p>
                  She views leadership not as authority, but as responsibility—to create environments where innovation is encouraged, ethics are non-negotiable, and long-term thinking is rewarded.
                </p>

                <h5 className="fw-bold">
                    Steering Growth with Integrity
                </h5>

                <p>
                 In an era of rapid technological change and environmental urgency, Ms. Ponsana David ensures that TGPS Global remains agile without compromising its values. She emphasizes governance, compliance, and ethical decision-making as foundational pillars of sustainable scale.
                </p>

                <p>
                  Her ability to navigate complex stakeholder ecosystems—spanning investors, partners, communities, and policymakers—has been instrumental in strengthening the Group’s credibility and global outlook.
                </p>

                 <h5 className="fw-bold">
                   Shaping a Conscious Future
                </h5>

                <p>
                  Ms. Ponsana David’s leadership reflects a deeper commitment to conscious capitalism—where success is measured not only by growth metrics, but by impact, trust, and legacy. She believes that the future belongs to organizations that can combine innovation with empathy, speed with stability, and ambition with accountability.
                </p>

                <p>
                    As the guiding force behind TGPS Global’s day-to-day leadership and its broader societal initiatives, she continues to shape an organization that is resilient, responsible, and future-ready.
                </p>

                <hr />
              </div>

            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default News3;
