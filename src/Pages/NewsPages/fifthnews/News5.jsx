import React from "react";
import { Link } from "react-router-dom";
import NewsImg5 from "../../../assets/images/News/newsImg5.jpeg"
import "./News5.css";

const News5 = () => {
  return (
    <>
    <section className="IBM-font">
      {/* ===== BREADCRUMB BAR ===== */}
      <div className="breadcrumb-bar">
        <div className="container-fluid py-2">
          <Link to="/" className="text-white">
          <span>
            Home <span>▶</span> 
            {/* All news stories <span>▶</span>{" "}
            <strong>The science of fragrance, emotion, and self-confidence</strong> */}
          </span>
          </Link>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
     <section className="science-section">
  <div className="container-fluid p-0">
    <div className="row g-0 science-row">

      {/* LEFT IMAGE */}
      <div className="col-lg-7 left-image">
        <img
          src={NewsImg5}
          alt="Brain Research"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-5 right-content">
        <div className="content-inner">
          <h3>
            CEO Ponsana Flags Child Safety Concerns on Quick-Commerce Apps Industry Responds 
          </h3>

          <p className="date">
            Published: <strong>July 15 2025</strong>
          </p>

          <p className="date">
            <strong>India | Technology & Digital Responsibility</strong>
          </p>

          <p>
            Ponsana, CEO of Thai Green Power Solution (TGPS Global), recently sparked a nationwide conversation on child safety and digital responsibility after raising concerns about the lack of parental controls on popular quick-commerce platforms.
          </p>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque commodi nesciunt et minus cupiditate sed autem, ratione facilis vitae inventore optio vel sapiente impedit a nisi incidunt architecto, delectus, dolor dolorem obcaecati officia. Tenetur, quos!
          </p> */}
        </div>
      </div>

    </div>
  </div>
</section>

                               {/* SECTION ------- 2 */}

              <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <p className="intro-text">
             In a public post, Ponsana highlighted how children using grocery and instant-delivery apps for everyday needs are inadvertently exposed to adult and age-inappropriate product listings, due to the absence of effective content filters or age-based access controls. Speaking from personal experience as a parent, she described the issue as a growing challenge in today’s app-driven households. 
            </p>

            {/* TITLE */}
            {/* <h2 className="section-title">
             Lorem ipsum dolor sit amet consectetur.
            </h2> */}

            {/* CONTENT */}
            <p>
              Her comments quickly gained traction across social media and technology circles, prompting a public response from Zomato CEO Deepinder Goyal, whose company operates Blinkit. Acknowledging the concern, Goyal stated that the feedback was valid and confirmed that efforts are underway to address child-safety features on such platforms .
            </p>

            <p>
              The exchange has since evolved into a broader discussion on ethical technology design, parental safeguards, and platform accountability, particularly as quick-commerce apps become increasingly integrated into family life.
            </p>


          </div>
        </div>
      </div>
    </section>



                           {/* SECTION -------- 3 */}
 {/* FIXED HERO */}
<section className="fixed-hero">
  <img
    src={NewsImg5}
    alt="Hero"
    className="fixed-hero-img"
  />

  <div className="fixed-hero-content d-flex align-items-center">
    <div className="container text-white">
      {/* <h1 className="display-4 fw-bold">
        You are unstoppable
      </h1>
      <p className="fs-5">
        30H long lasting fragrance
      </p> */}
    </div>
  </div>
</section>

{/* NORMAL SCROLL SECTION */}
<section className="after-hero py-5">
  <div className="container">
    <h2></h2>
   
    <p style={{ height: "50vh" }}>
      
    </p>
  </div>
</section>



                            {/* SECTION ------- 4 */}

                  <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <p className="intro-text">
             
            </p>

            {/* TITLE */}
            {/* <h2 className="section-title">
              Lorem ipsum dolor sit, amet consectetur
            </h2> */}

            {/* CONTENT */}
            <p>
             At TGPS Global, this moment reinforces the organization’s long-standing belief that technology must grow responsibly—balancing convenience with care, innovation with ethics, and scale with social impact. As digital ecosystems expand, leaders and platforms alike are being called upon to design solutions that protect the most vulnerable users.
            </p>
             
              <p>
      Times of India <br />
      CEO flags child safety concerns on quick-commerce apps; Zomato CEO responds
       </p>

               <p>
      LiveMint <br />
      CEO’s post on lack of child-safety filters in quick-commerce apps sparks industry response
       </p>

               <p>
      Financial Express <br />
      Deepinder Goyal reacts after CEO raises concerns over adult products on delivery apps
       </p>

               <p>
      StartupPedia <br />
      CEO calls out quick-commerce platforms on parental control gaps; industry takes note
       </p>
       <a className="text-white" href="https://timesofindia.indiatimes.com/technology/social/ceo-calls-out-quick-commerce-apps-for-what-can-be-parents-nightmare-zomatos-deepinder-goyal-responds/articleshow/122495011.cms">Click Here...</a>
    <p>
      
    </p>
           

          </div>
        </div>
      </div>
    </section>                    
           </section>      

    </>
  );
};

export default News5;
