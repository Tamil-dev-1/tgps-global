import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { GrLinkedin } from "react-icons/gr";
import { IoMailSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-5">
      {/* Top Purple Bar */}
      <div className="text-white py-3" style={{ backgroundColor: "#001F82" }}>
        <div className="container d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div className="d-flex align-items-center gap-2 fs-5">
           <FaShareAlt size={30}/>
            <span>Share this page</span>
          </div>
          <div className="d-flex gap-4 fs-5 align-items-center ms-3">
            <FaFacebookF />
            <FaXTwitter />
            <GrLinkedin />
           <IoMailSharp size={27} />


          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-5" style={{backgroundColor:'#F7F7EF'}}>
        <div className="container">
          <div className="row text-center text-md-start align-items-center">
            {/* Left */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold fs-1 fs-md-1 fs-lg-1" style={{color:'#005EFF'}}>
                Connect with us
              </h2>
              <p className="mt-3 mb-4 fs-6 fs-md-5">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo veniam enim autem nostrum repellat.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3" style={{color:'#9C44C0'}}>
                <FaXTwitter size={30} />
                <FaInstagram size={30} />
                <GrLinkedin size={30} />
              </div>
            </div>

            {/* Right */}
            <div className="col-md-6 ">
              <h2 className="fw-bold fs-1 fs-md-1 fs-lg-1" style={{color:'#005EFF'}}>
                Contact us
              </h2>
              <p className="mt-3 mb-4 fs-6 fs-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, similique voluptatem. Voluptatibus, veniam.
              </p>
              <button
                className="btn btn-info fw-semibold border-0 rounded-0 px-4 py-2"
                style={{ fontSize: "1rem", color:'#7705BC'}}
              >
                Contact us <FaArrowRight className="ms-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blue Footer */}
      <div
        className="bg-primary text-white "
        style={{ fontSize: "0.95rem",padding: "100px 0"  }}
      >
        <div className="container text-center text-md-start">
          <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-md-start gap-3 mb-4 pb-3">
            <Link to="/"
              className="text-white text-decoration-underline fw-semibold" style={{textDecorationColor:'#00BFFF'}}>
              Contact Thai Green Power Solution Company Limited
            
            </Link>
           <Link to='/aboutus'
              className="text-white text-decoration-underline fw-semibold">
              AboutUs
            
           </Link>
            <Link to='/the-group'
            className="text-white text-decoration-underline fw-semibold">
              The Group
            
            </Link>
           <Link to='/news'
             className="text-white text-decoration-underline fw-semibold">
              News
           
           </Link>
           <Link to='/careers'
             className="text-white text-decoration-underline fw-semibold">
              Careers
            
           </Link>
            <Link to='/contact'
             className="text-white text-decoration-underlinefw-semibold">
              Contact
            
            </Link>
            <a href="#" className="text-white text-decoration-underline fw-semibold">
              Accessibility
            </a>
            <a href="#" className="text-white text-decoration-underline fw-semibold">
              Privacy Notice
            </a>
          </div>

          <div className="text-center text-md-start mt-4">
            <h6 className="fw-semibold mb-3">Thai Green Power Solution Company Limited</h6>
            <small>
              © 2025 Copyright:TGPSAll rights Reserved |{" "}
              <a
                href="#"
                className="text-white text-decoration-underline fw-semibold"
              >
                Cookie Settings
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
