import React from "react";
import "./blogmain.css";
import {Link } from 'react-router-dom'
import IMG1 from '../../../assets/images/blog/img1.png'
import IMG2 from '../../../assets/images/blog/img2.jpg'
import IMG3 from '../../../assets/images/blog/img3.png'
import IMG4 from '../../../assets/images/blog/img4.jpeg'
import IMG5 from '../../../assets/images/blog/img5.jpg'
const BlogPage = () => {
  return (
    <>
    <section className="cinzil-font">
      {/* ===== HERO SECTION ===== */}
      <section className="blog-hero text-white d-flex align-items-center blog-page">
        <div className="container text-center">
          <h1 className="fw-bold">Our Insights & Stories</h1>
          <p className="mt-3">
            Premium articles on design, technology, sustainability, and
            innovation.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">

            {/* ===== BLOG LIST ===== */}
            <div className="col-lg-8">
              <div className="row g-4">

                {/* BLOG 1 */}
                <div className="col-md-6">
                 <Link to="/blog-1" className="text-decoration-none">
                  <div className="card blog-card h-100 border-0">
                    <div className="blog-img-wrapper">
                      <img
                        src={IMG2}
                        className="card-img-top"
                        alt="Sustainable Design"
                      />
                    </div>
                    <div className="card-body p-4">
                      <div className="blog-meta mb-2">
                       
                        <span className="dot"></span>
                        {/* <span>Dec 18, 2025</span> */}
                      </div>
                      <h5 className="fw-semibold">
                        The Role of Blockchain in Revolutionizing Renewable Energy Markets
                      </h5>
                      {/* <p className="text-muted">
                        Discover how sustainability is shaping the future of
                        modern architecture and digital products.
                      </p> */}
                      <p className="read-more">
                        Read More →
                      </p>
                    </div>
                  </div>
                 </Link>
                </div>

                {/* BLOG 2 */}
                <div className="col-md-6">
                <Link to='/blog-2' className="text-decoration-none">
                  <div className="card blog-card h-100 border-0">
                    <div className="blog-img-wrapper">
                      <img
                        src={IMG1}
                        className="card-img-top"
                        alt="Minimal UI"
                      />
                    </div>
                    <div className="card-body p-4">
                      <div className="blog-meta mb-2">
                        
                        
                        
                      </div>
                      <h5 className="fw-semibold">
                        Decentralized Energy: Benefits and Challenges
                      </h5>
                      {/* <p className="text-muted">
                        Why less is more in premium UI/UX design and how brands
                        are adopting minimal layouts.
                      </p> */}
                      <p className="read-more">
                        Read More →
                      </p>
                    </div>
                  </div>
                </Link>
                </div>

                {/* BLOG 3 */}
                <div className="col-md-6">
                  <Link to="/blog-3" className="text-decoration-none">
                    <div className="card blog-card h-100 border-0">
                      <div className="blog-img-wrapper">
                        <img
                          src={IMG3}
                          className="card-img-top"
                          alt="AI Creativity"
                        />
                      </div>
                      <div className="card-body p-4">
                        <div className="blog-meta mb-2">
                          
                        
                        </div>
                        <h5 className="fw-semibold">How Smart Grids Are Shaping the Future of Energy Distribution</h5>
                        {/* <p className="text-muted">
                          How artificial intelligence is changing the creative
                          industry forever.
                        </p> */}
                        <p className="read-more">
                          Read More →
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* BLOG 4 */}
                <div className="col-md-6">
                  <Link to="/blog-4" className="text-decoration-none">
                    <div className="card blog-card h-100 border-0">
                      <div className="blog-img-wrapper">
                        <img
                          src={IMG4}
                          className="card-img-top"
                          alt="Creative Tech"
                        />
                      </div>
                      <div className="card-body p-4">
                        <div className="blog-meta mb-2">
                         
                        </div>
                        <h5 className="fw-semibold">
                          Sustainable Energy Practices for Businesses
                        </h5>
                        {/* <p className="text-muted">
                          Exploring new possibilities where technology meets
                          creativity.
                        </p> */}
                        <p className="read-more">
                          Read More →
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>


                 {/* BLOG 5 */}
                <div className="col-md-6">
                  <Link to="/blog-5" className="text-decoration-none">
                    <div className="card blog-card h-100 border-0">
                      <div className="blog-img-wrapper">
                        <img
                          src={IMG5}
                          className="card-img-top"
                          alt="Creative Tech"
                        />
                      </div>
                      <div className="card-body p-4">
                        <div className="blog-meta mb-2">
                          
                        </div>
                        <h5 className="fw-semibold">
                          The Importance of Energy Transparency in Building Trust
                        </h5>
                      
                        <p className="read-more">
                          Read More →
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="col-lg-4">
              <div className="sidebar-box mb-4">
                <h6 className="fw-bold mb-3">Search</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search articles..."
                />
              </div>

              <div className="sidebar-box mb-4">
                <h6 className="fw-bold mb-3">Categories</h6>
                <ul className="list-unstyled category-list">
                  <li>Design</li>
                  <li>Technology</li>
                  <li>Sustainability</li>
                  <li>Business</li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h6 className="fw-bold mb-3">Popular Posts</h6>
                <p className="mb-1 fw-medium">The Role of Blockchain in Revolutionizing Renewable Energy Markets</p>
                {/* <small className="text-muted">Nov 25, 2025</small> */}
                <hr />
                <p className="mb-1 fw-medium">
                 Decentralized Energy: Benefits and Challenges
                </p>
                {/* <small className="text-muted">Nov 18, 2025</small> */}
              </div>
            </div>

          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default BlogPage;
