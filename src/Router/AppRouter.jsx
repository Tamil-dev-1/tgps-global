import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import OurCompany from '../Pages/ourcompany/OurCompany';
import TheBrands from '../Pages/TheBrands/TheBrands';
import News from '../Pages/News/News';
import Careers from '../Pages/Careers/Careers';
import Contact from '../Pages/Contact/Contact';
import Header from '../Components/Header/Header';
import Footer from '../Components/footer/Footer';
import InFocus from '../Pages/Infocus/InFocus';
// import OurPlayBook from '../Pages/ourPlayBook/OurPlayBook';
import GuidingForce from '../Pages/guidingforce/GuidingForce';
import TheTgpsStory from '../Pages/TheTGPSstory/TheTgpsStory'
import Innovation from '../Pages/innovation/Innovation';
import TgpsHonour from '../Pages/tgpshonour/TgpsHonour';
import BrandSignature from '../Pages/brandSignature/BrandSignature';
import OurViewPoint from '../Pages/ourViewpoint/OurViewPoint';
import OurPlayBook from '../Pages/ourPlayBook/OurPlayBook'



const AppRouter = () => {
  return (
   
   <>
     {/* Header */}
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/the-brands" element={<TheBrands />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infocus" element={<InFocus />} />
        <Route path="/our-playbook" element={<OurPlayBook />} />
        <Route path="/guiding-force" element={<GuidingForce />} />
        <Route path="/thetgps-story" element={<TheTgpsStory />} />
        <Route path="/innovation-hub" element={<Innovation />} />
        <Route path="/the-tgpshonour" element={<TgpsHonour />} />
        <Route path="/brand-signature" element={<BrandSignature />} />
        <Route path="/view-point" element={<OurViewPoint />} />

      </Routes>
      {/* <Footer /> */}
     <Footer />
    </>
  )
}

export default AppRouter
