import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Dummy.css";

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

// import DemaskLogo from "../../assets/images/logo/DEMASKLOGO.png"
gsap.registerPlugin(ScrollTrigger);

const ScrollCinematicBrands = () => {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);

  const brands = [
    { id: 1, name: "DEMASKLOGO", img: DemaskLogo},
    { id: 2, name: "FrcX", img: frecx},
    { id: 3, name: "Fun", img: Fun },
    { id: 4, name: "Fv", img: fv },
    { id: 5, name: "Green Carpet", img:greenc },
    { id: 6, name: "Mettawatts", img: mettawatts},
    { id: 7, name: "Tgpsinfo", img: tgpsinfo},
    { id: 8, name: "Zigoo", img: zigoo},
    { id: 9, name: "transcendent", img: transcendent},
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { clipPath: "inset(0 100% 0 0)" });

      gsap.to(overlayRef.current, {
        clipPath: "inset(0 0% 0 0)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=1800",
          scrub: true,
          pin: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="cinematic-wrapper" ref={wrapperRef}>
      {/* SECTION 1 – Base (Black & White Logos) */}
      <div className="base-section">
        <div className="inner-content">
          <h1 className="brand-heading light">Our Brands</h1>
          {/* <p className="brand-text light">
            Discover the world’s leading brands that trust us to deliver excellence.
          </p> */}
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
          {/* <p className="brand-text dark">
            Experience the vibrant energy of our global partners.
          </p> */}
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
