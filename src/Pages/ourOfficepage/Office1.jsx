import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import Office1 from "../../assets/images/office/office1.png"
import "./office2.css";
// import Missionary from "../../../assets/images/News/missionary.jpeg"

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
                Leadership is not about power—it’s about building systems that empower the future
              </h1>

            


              <div className="press-image">
                <img
                  src={Office1}
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                  Every transformative organization is shaped by a singular force—a vision strong enough to challenge convention, and leadership courageous enough to build what does not yet exist. At TGPS Global, that force is Mr. MK., Founder, Chairman & Managing Director.
                </p>

                <p>
                 Mr. MK founded TGPS Global with a clear and uncompromising philosophy: progress must be sustainable, technology must be purposeful, and growth must benefit society at large. From its inception, TGPS Global was envisioned not as a single-business enterprise, but as a future-oriented ecosystem—one capable of integrating renewable energy, digital infrastructure, decentralization, and environmental responsibility into a unified global model.
                </p>
                <h5 className="fw-bold">
                    A Vision Rooted in Responsibility
                </h5>

                <p className="fw-bold">
                  Long before sustainability became a global mandate, Mr. MK recognized that the future of industry would depend on how responsibly it treated natural resources, communities, and trust itself. His leadership is deeply anchored in the belief that energy is not merely a commodity, but a catalyst for economic equality, technological advancement, and social stability.
                </p>

                <p>
                  Under his guidance, TGPS Global expanded into diverse yet interconnected domains—solar and renewable energy solutions, electric mobility, power storage and distribution, blockchain platforms, IT and Web3 technologies, and environmental initiatives. Each vertical was developed with a long-term perspective, ensuring that innovation was balanced with resilience, and scale with accountability.
                </p>

                <h5 className="fw-bold">
                    From Vision to Infrastructure
                </h5>

                <p>
                 What distinguishes Mr. MK’s leadership is his ability to convert abstract ideas into real-world, working infrastructure. He is known for asking not just “What is possible?” but “What is practical, scalable, and sustainable?” This execution-driven mindset has enabled TGPS Global to move beyond pilot projects and concepts, into deployable systems that create measurable impact
                </p>

                <p>
                By integrating decentralization and blockchain technology into energy and enterprise models, Mr.MK has positioned TGPS Global at the forefront of next-generation industrial transformation—where transparency, efficiency, and trust are embedded at the system level.
                </p>

                <h5 className="fw-bold">
                    Building Institutions, Not Just Enterprises
                </h5>

                <p>
                 For Mr.MK., leadership is not about short-term success or rapid expansion—it is about institution-building. He believes organizations must outlive their founders, guided by strong values, ethical governance, and a clear sense of purpose. This philosophy has shaped TGPS Global into a company that prioritizes long-term partnerships, community empowerment, and responsible innovation over quick wins.
                </p>

                

              
                <p>
                  His commitment to social and environmental responsibility is further reflected through initiatives aligned with climate action, carbon control, green mobility, and education-driven awareness. These efforts reinforce his belief that business and societal good are not opposing forces—but complementary ones.
                </p>

                <h5 className="fw-bold">
                    A Leadership Style Defined by Clarity and Conviction
                </h5>

                <p>
                  Known for his calm decisiveness and strategic foresight, he leads with clarity, discipline, and unwavering conviction. He encourages teams to think independently, act responsibly, and innovate fearlessly—while remaining grounded in ethics and accountability.
                </p>

                <p>
                  He views leadership as a responsibility to create opportunity, inspire confidence, and enable others to lead. This people-first approach has fostered a culture within TGPS Global that values collaboration, continuous learning, and purpose-driven performance.
                </p>

                 <h5 className="fw-bold">
                    Shaping the Future
                </h5>

                <p>
                    As global industries navigate the convergence of clean energy, digital transformation, and decentralized systems, Mr. MK continues to guide TGPS Global with a steady focus on the future. His vision extends beyond markets and technologies—it encompasses a redefinition of how progress itself is measured
                </p>

                <p>
                    Through TGPS Global, he is building a legacy rooted in sustainable innovation, institutional integrity, and global impact—one that seeks not only to meet the demands of today, but to responsibly shape the needs of tomorrow.
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
