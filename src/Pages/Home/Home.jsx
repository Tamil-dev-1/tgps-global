
import React from 'react' 
import "./Home.css";
import { motion } from "framer-motion";
import BlogCarousel from '../../Components/Blog/BlogCarousel';
import LatestNews from '../../Components/LatestNews/LatestNews';
import LogoBrands from '..//..//Components/ourbrand/LogoBrands'
import HorizontalScroll from '..//..//Components/horizontalScroll/HorizontalScroll'
import { Link } from 'react-router-dom';
import ErrorBoundary from "../../error/errorBoundary";
import HeroBgImg from '..//..//assets/images/Home/heroimg1.jpg'
import Tgps1 from '..//..//assets/images/Home/tgps-1.jpeg'
import Tgps2 from '..//..//assets/images/Home/tgps-2.jpeg'
import Tgps3 from '..//..//assets/images/Home/tgps-3.jpeg'
import SevenGoals from '..//..//assets/images/Home/sevengoals.png'
import WebsiteImg from '..//..//assets/images/Home/website.jpg'
import { Opacity } from '@mui/icons-material';
import Popup from '../../Components/popup/Popup'
// import Guid from '..//..//assets/images/Home/guid1.jpg'
// import Innovation from '..//..//assets/images/Home/innovation1.png'

const Home = () => {  

              // our brand logos image
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
  return (
    <div>
<section 


  id="home"
  className="hero-bg container-fluid p-0 m-0"
  // style={{
  //   background: "#6EE6F3",
  // }}

    style={{
    // background: "#005EFF",
  }}
>
  <div 
    className=" row g-0 align-items-center"
    style={{
      minHeight: "70vh",
    }}
  >
    {/* Left Side - Text */}
    <div className=" col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center p-5 text-center text-md-start">

      {/* <img src='' alt="" /> */}
      <h1
        className="mb-3 fw-bold"
        style={{
          // color: "#001F82",
          color:"#fff",
          fontWeight: 900,
          fontSize: "clamp(2rem, 4vw, 6.5rem)", 
          lineHeight: "1.2",
        }}
      >
        The World of <br />
        Thai Green Power Solution <br />
        Company Limited

      </h1>
    </div>

    {/* Right Side - Image */}
    <div className="col-lg-6 col-md-12 col-12">
      <img
        src={HeroBgImg}
        alt="Hero"
        className="img-fluid w-100 responsive-img"
      
      />
    </div>
  </div>
</section>



                        {/* SATISTICS CARD SECTION */}
    <section 
 
      className="container-fluid py-5 stats-section"
      // style={{ backgroundColor: "#fff" }}
      style={{ backgroundColor: "#001F82" }}
    >
      {/* 🔹 Section Heading */}
    <div className="mb-3 ps-lg-5 text-center text-md-start" data-aos="fade-right">
  <h2
    className="fw-bold mb-0"
    style={{
      // color: "#005EFF",
      color:"#fff",
      fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
    }}
  >
    We are TGPS Global, Thailand
  </h2>
</div>


      
      <div className="container px-3 text-center">
  <div className="row g-0 text-white justify-content-center align-items-stretch">
    
    {/* 1️⃣ Card */}
    <div className="col-lg-3 col-md-6 col-12">
      <div className="stat-card bg-primary-alt h-100">
        <h2 className="fw-bold mb-1">8+ years</h2>
        <h5 className="fw-bold mb-1"></h5>
        <p className="m-0">Driving Renewable Innovation <br /> Across Asia.</p>
      </div>
    </div>

    {/* 2️⃣ Card */}
    <div className="col-lg-3 col-md-6 col-12">
      <div className="stat-card bg-blue-alt h-100">
        <h6 className="fw-bold mb-1"></h6>
        <h2 className="fw-bold mb-1">Layer-1 Blockchain</h2>
        <p className="m-0 fw-bold">
        For the Global Energy Sector <br />(Frequency ChainX)
        </p>
      </div>
    </div>

    {/* 3️⃣ Card */}
    <div className="col-lg-3 col-md-6 col-12">
      <div className="stat-card bg-primary-alt h-100">
        <h1 className="fw-bold mb-1"></h1>
        <h2 className="fw-bold mb-1">Top Choice</h2>
        <p className="m-0">
          For Governments, Corporates & <br /> Clean-Tech Partners.
        </p>
      </div>
    </div>

    {/* 4️⃣ Card */}
    <div className="col-lg-3 col-md-6 col-12">
      <div className="stat-card bg-blue-alt h-100">
        <h2 className="fw-bold mb-1"> 100+ Green-Tech</h2>
        <h5 className="fw-bold mb-1"></h5>
        <p className="m-0">
          Deployments in Solar, Storage & <br />Power Management
        </p>
      </div>
    </div>

  </div>
</div>


      {/* 🔹 CTA Button */}
      <div className="mt-5 text-center"
      data-aos="fade-up"
     data-aos-duration="3000">
  <div
    className="d-inline-flex align-items-center btn-hover button"
    style={{
      borderRadius: 0,
      overflow: "hidden",
      backgroundColor: "#6EE6F3",
    }}
  >
    {/* Left side – text */}
    <Link
      to="/ourcompany"
      className="btn border-0 fw-semibold"
      style={{
        backgroundColor: "#6EE6F3",
        color: "#1E2DC7",
        fontSize: "1rem",
        borderRadius: 0,
        padding: "10px 24px",
      }}
    >
      Find out more about Our Company
    </Link>

    {/* Right side – arrow */}
    <a
      href="#"
      className="btn border-0"
      style={{
        backgroundColor: "#6EE6F3",
        color: "#1E2DC7",
        fontSize: "1.2rem",
        borderLeft: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 0,
        padding: "10px 16px",
        fontWeight: "bold",
      }}
    >
      →
    </a>
  </div>
</div>


       {/* ✅ Custom Styles */}
    
    </section>


  

{/* <div className="fullwidth-image">
  <img
    src={Dummy4}
    alt="Innovation"
    className="img-fluid w-100"
    style={{ objectFit: "contain", height: "" }}
  />
</div> */}



                     {/* SUSTAINABLE GOALS */}

                     {/* <LogoGoals /> */}





                  {/* THE GROUP SECTION */}
 {/* <section
  className="container-fluid py-5"
  style={{ background: "#FEA29A" }}
>
  <div className="row align-items-center justify-content-center g-4 px-4 px-md-5">

    
    <div className="col-lg-4 col-md-12" style={{ paddingLeft: "4%" }}>
      <h1
        className="fw-bold mb-3"
        style={{
          color: "#1F36C7",
          fontSize: "clamp(2rem, 1.5rem, 3.5rem)",
          lineHeight: "1.2",
        }}
      >
        Guiding Force
      </h1>
    </div>

   
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card guiding-card h-100 border-0 shadow-sm">
        <img
          src="https://images.pexels.com/photos/34446694/pexels-photo-34446694.jpeg"
          className="card-img-top"
          alt="Founder"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary fw-bold">
            Founder & CMD – Mr. MK
          </h5>

          <p className="card-text text-muted clamp-text">
            When I began this journey, I was not trying to build a company—I was trying to solve a problem
          </p>

          
            Read more →
          
        </div>
      </div>
    </div>

    
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card guiding-card h-100 border-0 shadow-sm">
        <img
          src="https://images.pexels.com/photos/34336341/pexels-photo-34336341.jpeg"
          className="card-img-top"
          alt="CEO"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary fw-bold">
            Chief Executive Officer – Ms. Ponsana DAVID
          </h5>

          <p className="card-text text-muted clamp-text">
            When I look at TGPS Global today, I don’t just see a group of businesses—I see a responsibility
          </p>

         
            Read more →
          
        </div>
      </div>
    </div>

  </div>
</section> */}
<Popup />

            {/* HORIZONTAL SCROLL --- SECTION */}

         <HorizontalScroll />   

     <ErrorBoundary>
      <LogoBrands />
      </ErrorBoundary>                    {/* OUR BRANDS--section */}


{/* <div style={{ backgroundColor: "#F7F7EF", padding: "60px 80px" }}> 
  <div className="container text-center">
   
    <h2 style={{ fontWeight: "700", color: "#0032A0" }}>Our Brands</h2>

    
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

   
    <div
      className="d-flex flex-wrap justify-content-center gap-4"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="responsive-brand-box p-3 border rounded-3 bg-white d-flex align-items-center justify-content-center shadow-sm"
          style={{
            flex: "1 1 calc(28% - 1rem)", 
            maxWidth: "260px", 
            height: "100px", 
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
</div> */}

                        {/* PEOPLE ARE THE ENGINE */}

           <div style={{ backgroundColor: "#FFFFFF",  }}>
      <div className="container py-5">
        {/* Heading Section */}
        <div className="text-start mb-5" 
       data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
          <h1 className='text-center' style={{ fontWeight: 700, color: "#0032A0" }}>
            People are the engine of our success
          </h1>
          <p className="mt-3 text-center" style={{ color: "#0032A0", fontSize: "1.1rem" }}>
            TGPS Global is not driven by hierarchy it’s driven by impact. Where purpose meets everyday work.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row g-4">
          {/*  Card---1 */}
<div className="col-lg-4 col-md-12 d-flex justify-content-center "
     data-aos="fade-up"
     data-aos-duration="3000">
  <div
    className="card border-0 rounded-0"
    style={{
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      width: "90%",
      maxWidth: "320px",
    }}
  >
    {/* Image with Wave */}
    <div style={{ position: "relative" }}>
      <img
        src={Tgps1}
        alt="Sustainability"
        className="img-fluid rounded-0 w-100"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      {/* Wave SVG */}
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50px",
        }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.44,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ fill: "#f9f9f9" }}
        ></path>
      </svg>
    </div>

    <div className="card-body text-center">
      <h5>
        <a
          href="#"
          className="text-decoration-none"
          style={{ color: "#0056d2", fontWeight: 700 }}
        >
          Life at TGPS Global
        </a>
      </h5>
      <p style={{ color: "#555", fontSize: "1rem" }}>
        Sustainability here isn’t a poster on the wall. It’s how decisions are made .....
        <Link to="/careers">Readmore</Link>
      </p>
    </div>
  </div>
</div>


          {/*  Card ---2 */}
 <div className="col-lg-4 col-md-12 d-flex justify-content-center"
     data-aos="fade-up"
     data-aos-duration="3000">
  <div
    className="card border-0 rounded-0"
    style={{
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      width: "90%",
      maxWidth: "320px",
    }}
  >
    {/* Image with Wave */}
    <div style={{ position: "relative" }}>
      <img
        src={Tgps2}
        alt="Sustainability"
        className="img-fluid rounded-0 w-100"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      {/* Wave SVG */}
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50px",
        }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.44,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ fill: "#f9f9f9" }}
        ></path>
      </svg>
    </div>

    <div className="card-body text-center">
      <h5>
        <a
          href="#"
          className="text-decoration-none"
          style={{ color: "#0056d2", fontWeight: 700 }}
        >
          Our Ethos
        </a>
      </h5>
      <p style={{ color: "#555", fontSize: "1rem" }}>
        Values that guide decisions, not just words. Innovation isn’t locked inside a department .....
        <Link to="/careers">Readmore</Link>
      </p>
    </div>
  </div>
</div>


                        {/* CARD===3 */}
           {/* <div className="col-lg-4 col-md-12 d-flex justify-content-center">
  <div className="card border-0 rounded-0" style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "#f9f9f9", width: "90%", maxWidth: "320px" }}>
    <img
      src="https://images.pexels.com/photos/53135/hydrangea-blossom-bloom-flower-53135.jpeg"
      alt="Sustainability"
      className="img-fluid"
    />
    <div className="card-body text-center">
      <h5>
        <a
          href="#"
          className="text-decoration-none"
          style={{ color: "#0056d2", fontWeight: 700 }}
        >
          lorem
        </a>
      </h5>
      <p style={{ color: "#555", fontSize: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        perspiciatis repellendus, quo commodi beatae et.
      </p>
    </div>
  </div>
</div> */}
<div className="col-lg-4 col-md-12 d-flex justify-content-center"
    data-aos="fade-up"
     data-aos-duration="3000">
  <div
    className="card border-0 rounded-0"
    style={{
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      width: "90%",
      maxWidth: "320px",
    }}
  >
    {/* Image with Wave */}
    <div style={{ position: "relative" }}>
      <img
        src={Tgps3}
        alt="Sustainability"
        className="img-fluid rounded-0 w-100"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      {/* Wave SVG */}
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50px",
        }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.44,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ fill: "#f9f9f9" }}
        ></path>
      </svg>
    </div>

    <div className="card-body text-center">
      <h5>
        <a
          href="#"
          className="text-decoration-none"
          style={{ color: "#0056d2", fontWeight: 700 }}
        >
          Work, Impact & Beyond
        </a>
      </h5>
      <p style={{ color: "#555", fontSize: "1rem" }}>
        Your work here shapes more than a career. But no role exists in isolation. Every .....
        <Link to="/careers">Readmore</Link>
      </p>
    </div>
  </div>
  </div>
  </div>
 </div>
</div>

<LatestNews />
     
{/* 

{/* <OurBrand /> */}
<BlogCarousel />


                               {/* final section */}

       <section>

    <div className="fullwidth-image">
  <img
    src={SevenGoals}
    alt="Innovation"
    className="img-fluid w-100"
    style={{ objectFit: "contain", height: "" }}
  />
</div>

 {/* <div className="fullwidth-image">
  <img
    src={WebsiteImg}
    alt="Innovation"
    className="img-fluid w-100"
    style={{ objectFit: "contain", height: "" }}
  />
</div> */}
  
</section>
                        



    </div>


  )
}

export default Home

