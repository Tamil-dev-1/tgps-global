import React from 'react'
const LatestNews = () => {
  return (
    <>
     <div className="container-fluid py-5 px-4 px-md-5" style={{backgroundColor:'#77DDF5',}}>
  <div className=" row g-4 align-items-center" >
      
        <h2 style={{ fontSize: "1.9rem", fontWeight: "900",color:"#1F36C7" }}>Lates News</h2>
      
    {/* <!-- LEFT MAIN CARD --> */}
    <div className="col-lg-6 col-md-12 ">
      <div className="card rounded-0 h-100 border-0 shadow-sm pb-5">
        <img src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg" 
             className="card-img-top rounded-0" alt="Main news image" />
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{backgroundColor:'#005EF'}}>
            <a href="">
              <span className="text-decoration-underline text-primary link-underline-opacity-0 link-underline-opacity-100-hover"  style={{ cursor: "pointer" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, modi?</span>
              </a>  
          </h5>
          <p className="text-muted mb-1">28 October 2025</p>
          <p className="card-text"style={{fontSize:'0.95rem'}}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, doloremque! Maiores incidunt reiciendis dolores aspernatur iure sunt amet aut enim omnis, sed deserunt recusandae ipsa excepturi dolore, debitis, doloremque quis!
          </p>
        </div>
      </div>
    </div>

    {/* <!-- RIGHT SIDE SMALL CARDS --> */}
    <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
      
      {/* <!-- Card 1 --> */}
      <div className=" card border-0 shadow-sm rounded-0">
        <div className="row g-0 align-items-center">
          <div className="col-4 rounded-0">
            <img src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg"
                 className="img-fluid " alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <h6 className="card-title fw-bold" style={{backgroundColor:'#005EF'}} >
                 <a href="">
              <span className="text-decoration-underline text-primary link-underline-opacity-0 link-underline-opacity-100-hover"  style={{ cursor: "pointer" }}>Lorem ipsum dolor sit, amet </span>
              </a>
              </h6>
              <p className="text-muted small mb-0">27 October 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="card border-0 shadow-sm rounded-0">
        <div className="row g-0 align-items-center">
          <div class="col-4 rounded-0">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                 className="img-fluid" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <h6 className="card-title fw-bold" style={{backgroundColor:'#005EF'}}> <a href="">
              <span className="text-decoration-underline text-primary link-underline-opacity-0 link-underline-opacity-100-hover"  style={{ cursor: "pointer" }}>Lorem ipsum dolor sit, amet </span>
              </a></h6>
              <p className="text-muted small mb-0">23 October 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="card border-0 shadow-sm rounded-0">
        <div className="row g-0 align-items-center">
          <div className="col-4 rounded-0">
            <img src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg"
                 className="img-fluid" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <h6 className="card-title fw-bold" style={{backgroundColor:'#005EF'}}>
                 <a href="">
              <span className="text-decoration-underline text-primary link-underline-opacity-0 link-underline-opacity-100-hover"  style={{ cursor: "pointer" }}>Lorem ipsum dolor sit, amet </span>
              </a></h6>
              <p className="text-muted small mb-0">10 October 2025</p>
            </div>
          </div>
        </div>
      </div>

       {/* <!-- Card 4 --> */}
      <div className=" card border-0 shadow-sm rounded-0">
        <div className="row g-0 align-items-center">
          <div className="col-4 rounded-0">
            <img src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg"
                 className="img-fluid " alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <h6 className="card-title fw-bold" style={{backgroundColor:'#005EF'}} >
                 <a href="">
              <span className="text-decoration-underline text-primary link-underline-opacity-0 link-underline-opacity-100-hover"  style={{ cursor: "pointer" }}>Lorem ipsum dolor sit, amet </span>
              </a>
              </h6>
              <p className="text-muted small mb-0">27 October 2025</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

    </>
  )
}

export default LatestNews

