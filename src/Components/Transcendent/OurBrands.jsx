import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./OurBrands.css";

const  OurBrands= () => {
  return (
    <section className="brand-section py-5">
      <h1 className="text-center fw-bold mb-4 font" style={{color:'#1F36C7'}}>Our Brand</h1>
      <div className="container position-relative">
        <div className="brand-box d-flex flex-lg-row flex-column align-items-center justify-content-between position-relative">
          {/* 🔸 Left Yellow Content Box */}
          <div className="brand-left text-dark p-5">
            <p className="brand-text mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              ab accusamus incidunt illo quae doloremque?
            </p>

            <div className="d-flex flex-wrap gap-4 mb-4 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <i className="bi bi-link-45deg fs-3 d-block"></i>
                <small className="fw-bold">CRM</small>
              </div>
              <div className="text-center">
                <i className="bi bi-journal fs-3 d-block"></i>
                <small className="fw-bold">Books</small>
              </div>
              <div className="text-center">
                <i className="bi bi-envelope fs-3 d-block"></i>
                <small className="fw-bold">Mail</small>
              </div>
              <div className="text-center">
                <i className="bi bi-telephone fs-3 d-block"></i>
                <small className="fw-bold">Desk</small>
              </div>
            </div>

            <button className="btn btn-danger fw-bold px-4 py-2">
              EXPLORE ZOHO
            </button>
          </div>

          {/* ⚪ Right White Logo Card */}
          <div className="brand-right bg-white shadow text-center">
            <img
              src="https://tgpsglobal.com/static/media/tets.12f9575cbbcda75fd882.png"
              alt="brand Logo"
              className="img-fluid mb-1"
              style={{ maxWidth: "350px" }}
            />
            <p className="fw-semibold mb-0">lorem.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
