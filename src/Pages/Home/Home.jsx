
import React from 'react'
 
import "./Home.css";
const Home = () => {
  return (
    <>
<section
  id="home"
  className="container-fluid p-0 m-0"
  style={{
    background: "#77DDF5",
  }}
>
  <div
    className="row g-0 align-items-center"
    style={{
      minHeight: "70vh", // 👈 overall height (adjusts with zoom)
    }}
  >
    {/* Left Side - Text */}
    <div className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center p-5 text-center text-md-start hero-title">
      <h1
        className="mb-3 fw-bold"
        style={{
          color: "#0047BA",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 5vw, 6.5rem)", // responsive text
          lineHeight: "1.2",
        }}
      >
        Welcome to <br />
        Thai Green Power Solution
      </h1>
    </div>

    {/* Right Side - Image */}
    <div className="col-lg-6 col-md-12 col-12">
      <img
        src="https://images.pexels.com/photos/31314841/pexels-photo-31314841.jpeg"
        alt="Hero"
        className="img-fluid w-100"
        style={{
          objectFit: "cover",
          height: "70vh", // 👈 image height matches section height
        }}
      />
    </div>
  </div>
</section>



                        {/* SATISTICS CARD SECTION */}
    <section
      className="container-fluid py-5 my-5 stats-section"
      style={{ backgroundColor: "#fff" }}
    >
      {/* 🔹 Section Heading */}
      <div className="mb-3">
        <h2
          className="fw-bold mb-0"
          style={{
            color: "#0047BA",
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
          }}
        >
          We are Thai Green Power Solution
        </h2>
      </div>

      {/* 🔹 Stats Row */}
      <div className="container px-3 text-center">
        <div className="row g-0 text-white justify-content-center">
          {/* 1️⃣ Card */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="stat-card bg-primary-alt">
              <h1 className="fw-bold mb-1">90+</h1>
              <h5 className="fw-bold mb-1">years</h5>
              <p className="m-0">Lorem, ipsum dolor.</p>
            </div>
          </div>

          {/* 2️⃣ Card */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="stat-card bg-blue-alt">
              <h1 className="fw-bold mb-1">50+</h1>
              <h5 className="fw-bold mb-1">FMCG brands</h5>
              <p className="m-0">Lorem, ipsum </p>
            </div>
          </div>

          {/* 3️⃣ Card */}
          <div className="col-lg-3 col-md-6 col-12 border-top">
            <div className="stat-card bg-primary-alt">
              <h1 className="fw-bold mb-1">No. 1</h1>
              <h5 className="fw-bold mb-1">employer</h5>
              <p className="m-0"> Lorem, ipsum dolor.</p>
            </div>
          </div>

          {/* 4️⃣ Card */}
          <div className="col-lg-3 col-md-6 col-12  border-top">
            <div className="stat-card bg-blue-alt">
              <h1 className="fw-bold mb-1">₹60,680</h1>
              <h5 className="fw-bold mb-1">crore turnover</h5>
              <p className="m-0">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 CTA Button */}
      <div className="mt-5 text-center">
  <div
    className="d-inline-flex align-items-center btn-hover"
    style={{
      borderRadius: 0,
      overflow: "hidden",
      backgroundColor: "#6EE6F3",
    }}
  >
    {/* Left side – text */}
    <a
      href="#"
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
    </a>

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
      <style jsx>{`
        /* Base Styles */
        .stat-card {
          border-radius: 0;
          min-height: 140px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.2rem;
          margin-right: 1.5px;
        }

        .bg-primary-alt {
          background-color: #0054e5;
        }
        .bg-blue-alt {
          background-color: #005eff;
        }

        /* Text sizes */
        .stat-card h1 {
          font-size: 3rem;
        }
        .stat-card h5 {
          font-size: 1.5rem;
        }
        .stat-card p {
          font-size: 0.95rem;
        }

        /* ✅ When zoomed out (large viewport width >1800px) */
        @media (min-width: 1800px) {
          .container {
            max-width: 80% !important;
          }
          .stat-card {
            min-height: 160px;
            padding: 2rem 1rem;
          }
          .stat-card h1 {
            font-size: 3.3rem;
          }
          .stat-card h5 {
            font-size: 1.6rem;
          }
          .stat-card p {
            font-size: 1rem;
          }
        }

        /* Smaller devices (stack cards) */
        @media (max-width: 768px) {
          .stat-card {
            margin-bottom: 10px;
            min-height: auto;
          }
        }
      `}</style>
    </section>






                  {/* THE GROUP SECTION */}
 <section
  className="container-fluid py-5"
  style={{
    background: "#FEA29A",
  }}
>
  <div
    className="row align-items-center justify-content-center text-center text-md-start g-4 px-4 px-md-5"
    style={{
      maxWidth: "100%",
    }}
  >
    {/* 1️⃣ FIRST COLUMN - Heading & text */}
    <div
      className="col-lg-4 col-md-12"
      style={{
        paddingLeft: "4%",
      }}
    >
      <h1
        className="fw-bold mb-3"
        style={{
          color: "#0047BA",
          fontSize: "clamp(2rem, 3vw + 1rem, 3.5rem)",
          lineHeight: "1.2",
        }}
      >
        <span style={{ color: "#1F36C7" }}>The Group</span>
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 0.8vw + 0.5rem, 1.25rem)",
          color: "#1F36C7",
          maxWidth: "450px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        veniam cupiditate, enim suscipit autem delectus. Veritatis.
      </p>
    </div>

    {/* 2️⃣ SECOND COLUMN - Image Card 1 */}
    <div className="col-lg-4 col-md-6 col-12">
      <div
        className="card border-0 shadow-sm h-100"
        style={{
          borderRadius: "0",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <img
          src="https://images.pexels.com/photos/34446694/pexels-photo-34446694.jpeg"
          className="card-img-top"
          alt="Sustainability"
          style={{
            height: "280px",
            objectFit: "cover",
            borderRadius: 0,
          }}
        />
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">Sustainability</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>

    {/* 3️⃣ THIRD COLUMN - Image Card 2 */}
    <div className="col-lg-4 col-md-6 col-12">
      <div
        className="card border-0 shadow-sm h-100"
        style={{
          borderRadius: "0",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <img
          src="https://images.pexels.com/photos/34336341/pexels-photo-34336341.jpeg"
          className="card-img-top"
          alt="Wind Energy"
          style={{
            height: "280px",
            objectFit: "cover",
            borderRadius: "0",
          }}
        />
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">Ideology</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>


  )
}

export default Home

