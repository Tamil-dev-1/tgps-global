import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import AboutUs from '../Pages/About/AboutUs';
import TheGroup from '../Pages/The Group/TheGroup';
import News from '../Pages/News/News';
import Careers from '../Pages/Careers/Careers';
import Contact from '../Pages/Contact/Contact';
import Header from '../Components/Header/Header';
import Footer from '../Components/footer/Footer';
import AtAGlance from '../Pages/Glance/AtGlance';



const AppRouter = () => {
  return (
   
   <>
     {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/the-group" element={<TheGroup />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glance" element={<AtAGlance />} />
      </Routes>
      {/* <Footer /> */}
     <Footer />
    </>
  )
}

export default AppRouter
