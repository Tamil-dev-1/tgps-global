import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LogoBrands.css";

import DemaskLogo from "../../assets/images/logo/demask.png";
import frecx from "../../assets/images/logo/frecx.png";
import Fun from "../../assets/images/logo/Fun.png";
import fv from "../../assets/images/logo/fv.png";
import greenc from "../../assets/images/logo/greenc.png";
import mettawatts from "../../assets/images/logo/mettawatts.png";
import tgpsinfo from "../../assets/images/logo/tgpsinfo.png";
import zigoo from "../../assets/images/logo/zigoo.png";
import transcendent from "../../assets/images/logo/transcendent.png";
import freccharge from "../../assets/images/logo/freccharge.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollCinematicBrands = () => {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);

  const brands = [
    { id: 7, name: "Tgpsinfo", img: tgpsinfo },
    { id: 2, name: "FrcX", img: frecx },
    { id: 9, name: "Transcendent", img: transcendent },
    { id: 4, name: "Fv", img: fv },
     { id: 10, name: "Freccharge", img: freccharge },
    { id: 3, name: "Fun", img: Fun },
    { id: 8, name: "Zigoo", img: zigoo },
     { id: 6, name: "Mettawatts", img: mettawatts },
    
    { id: 5, name: "Green Carpet", img: greenc },
   
    
    
    
   
    { id: 1, name: "DEMASKLOGO", img: DemaskLogo },
    
  ];

  useEffect(() => {
    // Ensure refs are valid before applying GSAP animations
    if (!wrapperRef.current || !overlayRef.current) return;

    let trigger;
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { clipPath: "inset(0 100% 0 0)" });

      trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
        animation: gsap.to(overlayRef.current, {
          clipPath: "inset(0 0% 0 0)",
          ease: "power2.inOut",
        }),
      });
    }, wrapperRef);

    // Cleanup GSAP animations
    return () => {
      if (trigger) trigger.kill(); // Kill the specific ScrollTrigger instance
      if (ctx) ctx.revert(); // Ensure GSAP context is reverted
    };
  }, []);

  return (
    <div className="cinematic-wrapper" ref={wrapperRef}>
      {/* SECTION 1 – Base (Black & White Logos) */}
      <div className="base-section">
        <div className="inner-content">
          <h1 className="brand-heading light">Our Brands</h1>
          <div className="brand-grid">
            {brands.map((brand) => (
              <div className="logo-box" key={brand.id}>
                <img src={brand.img} alt={brand.name} className="grayscale-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2 – Overlay (Colored Logos) */}
      <div className="overlay-section" ref={overlayRef}>
        <div className="inner-content">
          <h1 className="brand-heading dark">Our Brands</h1>
          <div className="brand-grid">
            {brands.map((brand) => (
              <div className="logo-box" key={brand.id}>
                <img src={brand.img} alt={brand.name} className="color-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCinematicBrands;