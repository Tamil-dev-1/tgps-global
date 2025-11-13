import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Dummy.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollCinematicBrands = () => {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);

  const brands = [
    { id: 1, name: "Pepsi", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Pepsi_logo_2014.svg" },
    { id: 2, name: "Coca-Cola", img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Coca-Cola_logo.svg" },
    { id: 3, name: "Nike", img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { id: 4, name: "Adidas", img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
    { id: 5, name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 6, name: "Samsung", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { id: 7, name: "Toyota", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
    { id: 8, name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 9, name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
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
