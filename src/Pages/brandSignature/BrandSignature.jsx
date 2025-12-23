import React from "react";
import "./BrandSignature.css";
 import { motion } from "framer-motion";

import BSLogo from '..//..//assets/images/Bransign/bslogo.jpg'

const BrandSignature = () => {


  const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

  return (
    < >
    <div className="brand-header">
  <h1 className="brand-title">Brand Signature</h1>
</div>
                     

                      {/* SECTION ---------- 1 */}


    <div className="px-lg-5 mb-5">
      <motion.section className="text-section py-5" style={{backgroundColor:"#F7F7F7"}}
       variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}>
      <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1 className="text-title"
         variants={itemVariants}>
          The Circle –  A Complete Ecosystem
        </motion.h1>

        {/* Sub text */}
        <motion.p className="hero-subtext"
         variants={itemVariants}>
         The circular form represents wholeness, continuity, and global impact.It reflects our belief that energy, environment, technology, and humanity are not segmented efforts, they are one interconnected system.
        </motion.p>

        {/* Search Bar */}
        <motion.div className="search-box mx-auto border border-black"
        variants={itemVariants}>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">
            ✨ Search
          </button>
        </motion.div>

        {/* Popular Card */}
        <motion.div className="popular-card mx-auto text-start"
        variants={itemVariants}>
          <p className="popular-title">
            The circle stands for:
          </p>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              {/* <strong>Liam Hawthorne</strong> — Recruiter, 5+ years of experience, remote, full-time */}
              <strong>A unified global mission</strong>
            </p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              <strong>Sustainable cycles</strong> 
            </p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              <strong>Endless innovation</strong>
            </p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              <strong>A world moving toward greener choices</strong>
            </p>
          </div>
        </motion.div>

      </div>
      </div>
    </motion.section>
    </div>


                  {/* SECTION ------ 2 */}

    <div className="px-5 mb-5">
  <motion.section
    className="text-section py-5"
    style={{ backgroundColor: "#F7F7F7" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1
          className="text-title"
          variants={itemVariants}
        >
          The Green Gradient – Nature, Balance & Regeneration
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="hero-subtext"
          variants={itemVariants}
        >
          The shades of green symbolise renewable energy and environmental
          responsibility.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>

        {/* Popular Card */}
        <motion.div
          className="popular-card mx-auto text-start"
          variants={itemVariants}
        >
          <p className="popular-title">
            From deeper green to lighter tones, the gradient expresses:
          </p>
          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Growth</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Restoration</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              <strong>
                The shift from traditional to renewable power
              </strong>
            </p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p>
              <strong>
                A planet moving toward cleaner solutions
              </strong>
            </p>
          </div>

          <motion.p
            className="hero-subtext mt-3"
            variants={itemVariants}
          >
            It reflects our core promise:<br />
            <strong>
              To build solutions that honour the planet while empowering people.
            </strong>
          </motion.p>
        </motion.div>

      </div>
    </div>
  </motion.section>
</div>
      


                   {/* SECTION ------- 3   */}

     <div className="px-5 mb-5">
  <motion.section
    className="text-section py-5"
    style={{ backgroundColor: "#F7F7F7" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1
          className="text-title"
          variants={itemVariants}
        >
          The Yellow Lightning Bolt – Power, Speed, Technology
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="hero-subtext"
          variants={itemVariants}
        >
          The bold yellow lightning bolt is the heart of the logo, the spark of
          what drives TGPS Global.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>

        {/* Popular Card */}
        <motion.div
          className="popular-card mx-auto text-start"
          variants={itemVariants}
        >
          <p className="popular-title">
            It represents :
          </p>
          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Energy in motion</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Acceleration of innovation</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Electrification of industries</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>The strength of our technology</strong></p>
          </div>

          <motion.p
            className="hero-subtext mt-3"
            variants={itemVariants}
          >
            The yellow hue reflects <strong>optimism, clarity, and the bright future</strong> we
            are enabling through solar energy, green mobility, and advanced power
            solutions.
          </motion.p>
        </motion.div>

      </div>
    </div>
  </motion.section>
</div>
          


                   {/* SECTION ------ 4    */}

       <div className="px-5 mb-5">
  <motion.section
    className="text-section py-5"
    style={{ backgroundColor: "#F7F7F7" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1
          className="text-title"
          variants={itemVariants}
        >
          The Blue Outline – Trust, Intelligence & Precision
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>

        {/* Popular Card */}
        <motion.div
          className="popular-card mx-auto text-start"
          variants={itemVariants}
        >
          <p className="popular-title">
            The thin blue outline around the bolt signifies:
          </p>
          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Engineering excellence</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Smart systems</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Stability and trust</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Our technological backbone</strong></p>
          </div>

          <motion.p
            className="hero-subtext mt-3"
            variants={itemVariants}
          >
            Blue is the colour of intelligence. It reflects our purpose of
            building <strong>data-driven, connected, and future-ready energy ecosystems.</strong>
          </motion.p>
        </motion.div>

      </div>
    </div>
  </motion.section>
</div>


                 {/* SECTION -------- 5  */}


<div className="px-5 mb-5">
      <motion.section
        className="text-section py-5"
        style={{ backgroundColor: "#F7F7F7" }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="content-wrapper">
          <div className="container text-center">

            {/* 🔹 Heading */}
            <motion.h1 className="text-title mb-4" variants={itemVariants}>
              The Horizontal Lines – Structure, Direction & Transformation
            </motion.h1>

            {/* 🔹 Search Bar */}
            
           <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>
            {/* 🔹 Popular Card */}
            <motion.div
              className="popular-card mx-auto text-start mt-4"
              variants={itemVariants}
            >
              <p className="popular-title">
                The layered green lines within the circle symbolize:
              </p>

              {/* Item 1 */}
              <div className="candidate">
                <img src={BSLogo} alt="icon" />
                <p><strong>Energy flow</strong></p>
              </div>

              {/* Item 2 */}
              <div className="candidate">
                <img src={BSLogo} alt="icon" />
                <p>
                  <strong>
                    Transformation of old systems into new frameworks
                  </strong>
                </p>
              </div>

              {/* Item 3 Heading */}
              <div className="candidate">
                <img src={BSLogo} alt="icon" />
                <p><strong>The multi-vertical strength of TGPS:</strong></p>
              </div>

              {/* 🔽 Bottom 3 List */}
              <ul className="multi-list mt-2">
                <li>Power Generation</li>
                <li>Power Storage</li>
                <li>Power Distribution</li>
                <li>Power Trading</li>
                <li>Power Sharing</li>
              </ul>

              {/* Description */}
              <motion.p
                className="hero-subtext mt-3"
                variants={itemVariants}
              >
                The lines show that we bring structure to a world that is
                shifting rapidly and we guide that direction with clarity
                and resilience.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </div>
       


                  {/* SECTION ------ 6 */}

      <div className="px-5 mb-5">
  <motion.section
    className="text-section py-5"
    style={{ backgroundColor: "#F7F7F7" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1
          className="text-title"
          variants={itemVariants}
        >
          The Dual Tone Division – Balance of Nature & Technology
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>
            
          
        {/* Popular Card */}
        <motion.div
          className="popular-card mx-auto text-start"
          variants={itemVariants}
        >
           

          {/* Left Side */}
          <motion.p className="popular-title" variants={itemVariants}>
             <p className="popular-title">
                The logo is visually divided into two sides — a deliberate reflection of our philosophy:
              </p> <br /> Left side
          </motion.p>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Nature</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Sustainability</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Eco-conscious innovation</strong></p>
          </div>

          {/* Right Side */}
          <motion.p className="popular-title mt-4" variants={itemVariants}>
            Right side
          </motion.p>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Technology</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Efficiency</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Modernisation</strong></p>
          </div>

          <motion.p
            className="hero-subtext mt-3"
            variants={itemVariants}
          >
            Together, they show that the future is not Nature vs Technology,
            but <strong> Nature + Technology</strong>, in perfect harmony.
          </motion.p>

        </motion.div>

      </div>
    </div>
  </motion.section>
</div>
  


                     {/* SECTION ------ 7       */}

      <div className="px-5 mb-5">
  <motion.section
    className="text-section py-5"
    style={{ backgroundColor: "#F7F7F7" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="content-wrapper">
      <div className="container text-center">

        {/* Heading */}
        <motion.h1
          className="text-title"
          variants={itemVariants}
        >
          Our Logo, Our Identity
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="search-box mx-auto border border-black"
          variants={itemVariants}
        >
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <button className="btn search-btn">✨ Search</button>
        </motion.div>

        {/* Sub text */}
        <motion.p
          className="hero-subtext"
          variants={itemVariants}
        >
          
        </motion.p>

        {/* Popular Card */}
        <motion.div
          className="popular-card mx-auto text-start"
          variants={itemVariants}
        >
          <p className="popular-title">
            The TGPS Global logo stands for:
          </p>
          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Clean Energy</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Smart Technology</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Global Vision</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Sustainable Growth</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Responsible Innovation</strong></p>
          </div>

          <div className="candidate">
            <img src={BSLogo} alt="" />
            <p><strong>Human and Environmental Impact</strong></p>
          </div>

          <motion.p
            className="hero-subtext mt-3"
            variants={itemVariants}
          >
            It is the symbol of a company that is not just building power
            solutions <strong>but powering the future.</strong>
          </motion.p>
        </motion.div>

      </div>
    </div>
  </motion.section>
</div>
             
    </>
  );
};

export default BrandSignature;
