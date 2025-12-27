import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import "./News3.css";
import Missionary from "../../../assets/images/News/missionary.jpeg"

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
                MK Visionary Awards 2025: Empowering Young Minds Through Scholarships, Creativity, and Opportunity
              </h1>

              <div className="press-meta">
                <span>Published: November 23</span>
                <span className="dot">•</span>
                <span>Education, Youth & Social Impact</span>
              </div>

              <p className="press-desc">
                The MK Visionary Awards, held on November 23, marked a significant milestone in youth engagement, education, and talent recognition, bringing together students, educators, and changemakers under a shared vision of nurturing creativity, confidence, and future readiness.
              </p>

              <div className="press-image">
                <img
                  src={Missionary}
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                  Designed as a platform to identify, encourage, and empower young potential, the MK Visionary Awards focused on students across school and college levels, recognising not just academic performance, but also creativity, awareness, and personal initiative.
                </p>

                <p>
                  Scholarship Support: Recognising Potential and Effort
                </p>

                <p className="fw-bold">
                  As part of the awards, 31 students were granted scholarships, reinforcing the belief that opportunity should be driven by merit, effort, and promise:
                </p>

                <p>
                  22 school students were awarded scholarships for their enthusiasm, creativity, and emerging talent
                </p>

                <p>
                  9 college students received scholarships in recognition of their academic commitment and future potential
                </p>

                <p>
                 These scholarships were positioned not merely as financial assistance, but as acknowledgement of dedication, imagination, and the courage to dream bigger.
                </p>

                <p>
                  Student Competitions: Creativity with Purpose
                </p>

                <p className="fw-bold">
                  The event featured thoughtfully designed competitions that encouraged students to express ideas beyond textbooks and examinations:
                </p>
                <p>
                  A school-level drawing competition themed “Underwater World”, aimed at fostering environmental awareness and creative expression among young learners
                </p>

                <p>
                  A clay modelling competition for students above 10 years, themed “Farm to Plate Journey”, promoting conceptual thinking, sustainability awareness, and hands-on creativity
                </p>

                <p>
                  These activities provided students with a platform to translate imagination into expression while building confidence through participation.
                </p>

                <p>
                  <strong>College Engagement</strong>: Skills, Guidance, and Real-World Exposure
                </p>

                <p>
                  The MK Visionary Awards also extended strong support to college students through skill development initiatives and career guidance programs, helping them navigate academic-to-professional transitions with clarity and confidence.
                </p>

                <p>
                  In addition, 17 college students were offered internship opportunities during the year, enabling hands-on learning, practical skill development, and real-world exposure across domains. These internships were designed to bridge the gap between theory and application, equipping students with industry-relevant experience
                </p>

                <p>
                  A Commitment to the Future
                </p>

                <p>
                  The MK Visionary Awards stand as a reflection of a long-term commitment to youth empowerment, inclusive education, and opportunity creation. By combining scholarships, creative platforms, mentorship, and experiential learning, the initiative reinforces the belief that investing in young minds is the most powerful investment in the future.
                </p>

                <h5 className="text-center">
                  “When we recognise potential early, we shape leaders for tomorrow.”
                </h5><br />
                 <br />
                 <p>Celebrating creativity. Supporting talent. Empowering futures.</p>

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
