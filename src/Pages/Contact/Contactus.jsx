import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <>
           {/* ======CONTACT MAP===== */}
           
<div className="container my-5">
      <div className="card border-0 shadow-sm">
        <h1 className="text-primary mb-5 pt-5">GET IN TOUCH</h1>
        <div className="card-body p-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.474836896211!2d-6.264891123355826!3d53.34191687997795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b8e3e72db%3A0x3efb40f3f7a63e1b!2s1-2%20Adam%20Court%2C%20Sraid%20Grafton%2C%20Dublin%202%2C%20D02%20W0Y7%2C%20Ireland!5e0!3m2!1sen!2sie!4v1730900000000!5m2!1sen!2sie"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* <div className="card-footer bg-dark text-white">
          <h5 className="mb-1">1–2 Adam Court</h5>
          <p className="mb-0">
            1–2 Adam Court, Sráid Grafton, Dublin 2, D02 W0Y7, Ireland
          </p>
        </div> */}
      </div>
    </div>


   {/* ===== FORM SECTION ===== */}


    <div className="container my-5">
      <div className="row">
        {/* Left Side - Contact Form */}
        <div className="col-md-5 mb-4">
          <div
            className="card text-white border-0 h-100 py-4 px-4"
            style={{
              backgroundColor: "#24A7F7",
              minHeight: "650px", // <-- Increase height here
            }}
          >
            <div
              className="card-header border-0"
              style={{ backgroundColor: "", paddingBottom:'50px' }}
            >
              <h4 className="mb-0">Get in touch with us</h4>
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <form className="flex-grow-1 d-flex flex-column  rounded-0" style={{paddingBottom:'50px'}}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="transparent-input form-control border-0"
                    placeholder="Name"
                    style={{ width: "90%",
                       borderBottom:'2px solid #6EE6F3'  
                     }}/>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className=" transparent-input form-control  text-white border-0"
                    placeholder="Email"
                  style={{ width: "90%",  }}/>
                </div>
                <div className="mb-3 flex-grow-1">
                  <textarea
                    rows="8"
                    className=" transparent-input form-control  text-light border-0 h-75"
                    placeholder="Message"
                  style={{ width: "90%" }}></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ backgroundColor: "#005EFF", }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Office Cards */}
        <div className="col-md-7">
          <div className="d-flex flex-column gap-3">
            {/*  Office----1 */}
            <div
              className="card text-white border-0"
              style={{ backgroundColor: "#24A7F7" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="flex-grow-1 p-3"
                  style={{ backgroundColor: "" }}
                >
                  <h5 className="mb-0">Office-1</h5>
                </div>
                <div
                  className="p-3 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#005EFF" }}
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>
              </div>
              <div className="card-body text-white">
                <p className="mb-1">
                  100-120 xyz NE, Demo, DC 20011
                </p>
                <p className="mb-1">Phone: +1 202-415-7234</p>
                <p className="mb-0" style={{color:'#001F82'}}>Email: xyz@gmail.com</p>
              </div>
            </div>

            {/*  Office----2 */}
            <div
              className="card text-white border-0"
              style={{ backgroundColor: "#24A7F7" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="flex-grow-1 p-3"
                  style={{ backgroundColor: "" }}
                >
                  <h5 className="mb-0">Office-2</h5>
                </div>
                <div
                  className="p-3 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#005EFF" }}
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>
              </div>
              <div className="card-body text-white">
                <p className="mb-1">
                  110-115 xyz NE, xyz, AB 20031
                </p>
                <p className="mb-1">Phone: +1 272-436-4524</p>
                <p className="mb-0" style={{color:'#001F82'}}>Email: xyz@gmail.com</p>
              </div>
            </div>

            {/* Boston Office */}
            <div
              className="card text-white border-0"
              style={{ backgroundColor: "#24A7F7" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="flex-grow-1 p-3"
                  style={{ backgroundColor: "" }}
                >
                  <h5 className="mb-0"> Office-3</h5>
                </div>
                <div
                  className="p-3 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#005EFF" }}
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>
              </div>
              <div className="card-body text-white">
                <p className="mb-1">
                  100-120 xyz NE, xyz, DC 20017
                </p>
                <p className="mb-1">Phone: +1 252-925-7564</p>
                <p className="mb-0 " style={{color:'#001F82'}}>Email: xyz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
