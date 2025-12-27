import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import "./News4.css";
import SportsImg from '../../../assets/images/News/sportsImg.jpeg'

const News4 = () => {
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
              Green Carpet Foundation Champions Inclusion Through Para Cricket Sponsorship in Coimbatore
              </h1>

              <div className="press-meta">
                <span>Published:  September 5–7</span>
                <span className="dot">•</span>
                <span>Coimbatore | Social Impact & Sports Inclusion</span>
              </div>

              <p className="press-desc">
                The Green Carpet Foundation marked a powerful milestone in its journey toward inclusive social development by owning and sponsoring a para cricket team during the Indian Para Cricket League, held in Coimbatore from 5th to 7th September.
              </p>

              <div className="press-image">
                <img
                  src={SportsImg}
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                 In partnership with Rotary, the Foundation owned the team Chennai Super Greens, signalling a strong commitment to advancing opportunities for the physically challenged community through sports. The initiative underscored the belief that athletic talent, discipline, and competitive spirit transcend physical limitations when given the right platform and support.
                </p>

                <p>
                 The Indian Para Cricket League brought together para-athletes from across the country, celebrating resilience, teamwork, and excellence. By stepping into team ownership and sponsorship, the Green Carpet Foundation entered a new phase of structured support for para sports, moving beyond advocacy to direct participation and long-term impact
                </p>

                <p>
                 This sponsorship reflects the Foundation’s core philosophy—equal opportunity, dignity, and inclusion are fundamental rights, not privileges. Sports, as demonstrated through the Chennai Super Greens, serve as a powerful catalyst for confidence-building, social visibility, and community integration for persons with disabilities.
                </p>

                <p>
                  Speaking on the occasion, the Foundation reiterated its commitment to creating inclusive ecosystems where individuals are empowered not by sympathy, but by access, respect, and opportunity. The partnership with Rotary further strengthened this mission, bringing together civic leadership and social responsibility to enable meaningful change.
                </p>

                <p>
                 The Green Carpet Foundation continues to explore initiatives that use sports, education, and sustainable development as tools for social transformation, with a strong focus on empowering underserved and underrepresented communities.
                </p>

                <h5 className="text-center">“Inclusion is not about accommodation. It is about equal access to opportunity.”</h5>
                <p>Owning Chennai Super Greens marks a new chapter in para-sports support.</p>

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

export default News4;
