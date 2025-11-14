import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSlideSection = () => {
   const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Pepsi_logo_2014.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Coca-Cola_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nestle_textlogo_blue.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Unilever.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/P%26G_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Colgate_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/LG_logo_%282015%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Samsung_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Honda_logo.svg",
    
  ];
  const { scrollYProgress } = useScroll();

  // Section 2 slides from right (100%) → left (0%)
  const x = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div style={{ overflowX: "hidden" }}>
      

      {/* SECTION 2 — slides in from the right */}
      <motion.section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background:
            "#FFEB81",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "900",
          x,
          opacity,
          zIndex: 2,
        }}
      >
        
          <div style={{ backgroundColor: "#FFEB81", padding: "60px 80px" }}> {/* Increased side padding */}
  <div className="container text-center">
    {/* Heading */}
    <h2 style={{ fontWeight: "700", color: "#0032A0" }}>Our Brands</h2>

    {/* Paragraph */}
    <p
      className="mt-3 mb-5"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        color: "#555",
        fontSize: "1.1rem",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam,
      corrupti nemo dolores maxime aperiam deleniti recusandae corporis nisi,
      eveniet ipsa delectus ea veritatis alias! Quidem, porro cupiditate.
      Ducimus, deleniti?
    </p>

    {/* Logo Grid */}
    <div
      className="d-flex flex-wrap justify-content-center gap-4"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="responsive-brand-box p-3 border rounded-3 bg-white d-flex align-items-center justify-content-center shadow-sm"
          style={{
            flex: "1 1 calc(28% - 1rem)", // narrower cards
            maxWidth: "260px", // reduced width
            height: "100px", // slightly smaller height
          }}
        >
          <img
            src={logo}
            alt={`Brand ${index + 1}`}
            className="img-fluid"
            style={{ maxHeight: "50px", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  </div>
</div>
        
      </motion.section>
    </div>
  );
};

export default ScrollSlideSection;





 import DemaskLogo from "../../assets/images/logo/demask.png"
 import frecx from "../../assets/images/logo/frecx.png"
 import Fun from "../../assets/images/logo/Fun.png"
 import fv from "../../assets/images/logo/fv.png"
 import greenc from "../../assets/images/logo/greenc.png"
 import mettawatts from "../../assets/images/logo/mettawatts.png"
 import tgpsinfo from "../../assets/images/logo/tgpsinfo.png"
 import zigoo from "../../assets/images/logo/zigoo.png"
 import transcendent from "../../assets/images/logo/transcendent.png"
 import freccharge from "../../assets/images/logo/freccharge.png"



// import React, { useEffect, useRef } from "react";
// import "./Dummy.css";

// const ScrollJackEffect = () => {
//   const wrapperRef = useRef(null);
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const wrapper = wrapperRef.current;
//       const overlay = overlayRef.current;
//       if (!wrapper || !overlay) return;

//       const rect = wrapper.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculate how far the section is in view
//       let progress = 1 - rect.top / windowHeight;
//       progress = Math.min(Math.max(progress, 0), 1);

//       // Animate overlay sliding in from the right
//       overlay.style.clipPath = `inset(0 0 0 ${100 - progress * 100}%)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="scrolljack-wrapper" ref={wrapperRef}>
//       <div className="base-section">
//         <div className="content">
//           <h2>Engineered for today and tomorrow</h2>
//           <p>
//             A car should be built to go the distance with you. It’s why we design
//             every feature to make your drive safer and more enjoyable.
//           </p>
//           <a href="#" className="btn">Learn More</a>
//         </div>
//       </div>

//       <div className="overlay-section" ref={overlayRef}>
//         <div className="content dark">
//           <h2>Built for the Future</h2>
//           <p>
//             Every new generation of engineering brings us closer to a more
//             efficient and connected world.
//           </p>
//           <a href="#" className="btn light">Explore</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollJackEffect;







// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// /* Wrapper fits in normal page flow */
// .scrolljack-wrapper {
//   position: relative;
//   height: 100vh; /* only one full screen section */
//   overflow: hidden;
// }

// /* Base white background */
// .base-section {
//   position: absolute;
//   inset: 0;
//   background: #fff;
//   z-index: 1;
// }

// /* Overlay dark background */
// .overlay-section {
//   position: absolute;
//   inset: 0;
//   background: #111;
//   color: #fff;
//   clip-path: inset(0 0 0 100%);
//   z-index: 2;
//   transition: clip-path 0.3s ease-out;
// }

// /* Text content */
// .content {
//   max-width: 700px;
//   margin: 0 auto;
//   padding: 200px 20px;
// }

// .content h2 {
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// }

// .content p {
//   font-size: 1.1rem;
//   line-height: 1.6;
// }

// .btn {
//   display: inline-block;
//   margin-top: 20px;
//   padding: 10px 25px;
//   background: #000;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 6px;
//   transition: all 0.3s ease;
// }

// .btn.light {
//   background: #fff;
//   color: #000;
// }

// .btn:hover {
//   transform: translateY(-3px);
// }
