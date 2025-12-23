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
import News1 from '../Pages/NewsPages/News1'
import News2 from '../Pages/NewsPages/second news/News2'
import News3 from '../Pages/NewsPages/thirdnews/News3';
import News4 from '../Pages/NewsPages/fourthnews/News4';
import News5 from '../Pages/NewsPages/fifthnews/News5';
import Blog1 from '../Pages/blogPages/blog1/Blog1';
import Blog2 from '../Pages/blogPages/blog2/Blog2';
import Blog3 from '../Pages/blogPages/blog3/Blog3';
import Blog4 from '../Pages/blogPages/blog4/Blog4';
import Blog5 from '../Pages/blogPages/blog5/Blog5';

import BlogMain from '../Pages/blogPages/main/BlogMain'


const AppRouter = () => {
  return (
   
   <>
     {/* Header */}
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/the-group" element={<TheBrands />} />
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
        <Route path="/news-sections" element={<News1 />} />
        <Route path="/news-sections-2" element={<News2 />} />
        <Route path="/news-sections-3" element={<News3 />} />
        <Route path="/news-sections-4" element={<News4 />} />
        <Route path="/news-sections-5" element={<News5 />} />
        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="/blog-4" element={<Blog4 />} />
        <Route path="/blog-5" element={<Blog5 />} />
        <Route path="/blogs" element={<BlogMain />} />

      </Routes>
      {/* <Footer /> */}
     <Footer />
    </>
  )
}

export default AppRouter
