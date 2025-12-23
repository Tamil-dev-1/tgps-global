import React from "react";
import { Link } from "react-router-dom"
import "./News1.css";

const News1 = () => {
  return (
    <>
      {/* ===== BREADCRUMB BAR ===== */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <span>
            <Link to='/' className="text-white">Home <span>▶</span></Link> 
            {/* All news stories <span>▶</span>{" "}
            <strong>The science of fragrance, emotion, and self-confidence</strong> */}
          </span>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
     <section className="science-section">
  <div className="container-fluid p-0">
    <div className="row g-0 science-row">

      {/* LEFT IMAGE */}
      <div className="col-lg-7 left-image">
        <img
          src="https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg"
          alt="Brain Research"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-5 right-content">
        <div className="content-inner">
          <h1>
            Lorem ipsum dolor sit amet consectetur 
          </h1>

          <p className="date">
            Published: <strong>19 December 2025</strong>
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab consequuntur adipisci labore error. Ipsum nemo culpa quos nam saepe deleniti? Dolorum facere nesciunt nulla voluptatem, quam rem. Quasi quas ex velit. Dicta aliquid eligendi veritatis praesentium voluptate quaerat, autem aspernatur deserunt deleniti iure aut ratione, ipsum qui facilis cumque..
          </p>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque commodi nesciunt et minus cupiditate sed autem, ratione facilis vitae inventore optio vel sapiente impedit a nisi incidunt architecto, delectus, dolor dolorem obcaecati officia. Tenetur, quos!
          </p> */}
        </div>
      </div>

    </div>
  </div>
</section>

                               {/* SECTION ------- 2 */}

              <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <p className="intro-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eaque, optio, iste dolores veritatis voluptate magnam nulla tempore ipsam, consequatur iure! Illo vero labore placeat excepturi! Et reiciendis officiis aut nihil cumque est laboriosam illo perferendis quas. Enim veniam ducimus laboriosam sit! Quos harum ipsa ab eum sit, dicta cupiditate et ex atque rerum dolor impedit alias quae nostrum architecto ipsum officia corporis magni neque provident veniam illo ratione? Rerum autem voluptate obcaecati amet velit ipsa error sequi voluptatum consequuntur, dolore, praesentium a repellendus mollitia excepturi accusamus ipsum iusto, magni quae! Aspernatur facilis repellendus minus libero nobis asperiores repudiandae expedita!
            </p>

            {/* TITLE */}
            <h2 className="section-title">
              Lorem ipsum dolor sit amet consectetur.
            </h2>

            {/* CONTENT */}
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt quae necessitatibus officia nulla vitae deserunt quos molestias saepe sed inventore fugiat soluta quam quisquam dolore ipsum earum quibusdam exercitationem cum. Cupiditate animi culpa quos quisquam aperiam consequuntur incidunt nostrum!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis totam laudantium dolor cupiditate in incidunt sequi unde perspiciatis id doloribus, aut velit quod, delectus pariatur odit minima eos possimus ipsum repellat tenetur illum obcaecati voluptatum? Laboriosam cumque mollitia delectus quis at totam voluptatum tenetur aut odio ad exercitationem adipisci, voluptas sint omnis quidem possimus expedita, dolores aliquam quos, laudantium architecto. Odit aspernatur repudiandae neque fugit, vel eos facilis perspiciatis nulla dolore. Officiis iure non quis quibusdam eaque? Sit, quos nulla, esse ex molestiae dolorum deserunt laboriosam tenetur animi illum fugit corporis vero ducimus reprehenderit! Molestias recusandae accusamus tenetur sapiente?
            </p>

            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi. Minima pariatur amet mollitia est alias neque, deleniti dolores quia quidem sed natus excepturi minus temporibus illum, iure, in facilis?
            </p>

          </div>
        </div>
      </div>
    </section>



                           {/* SECTION -------- 3 */}
 {/* FIXED HERO */}
<section className="fixed-hero">
  <img
    src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg"
    alt="Hero"
    className="fixed-hero-img"
  />

  <div className="fixed-hero-content d-flex align-items-center">
    <div className="container text-white">
      {/* <h1 className="display-4 fw-bold">
        You are unstoppable
      </h1>
      <p className="fs-5">
        30H long lasting fragrance
      </p> */}
    </div>
  </div>
</section>

{/* NORMAL SCROLL SECTION */}
<section className="after-hero py-5">
  <div className="container">
    <h2></h2>
    <p>
      
    </p>
    <p style={{ height: "100vh" }}>
      
    </p>
  </div>
</section>



                            {/* SECTION ------- 4 */}

                  <section className="fragrance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">

            {/* INTRO TEXT */}
            <p className="intro-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum tenetur facilis facere quia non, laboriosam eligendi incidunt. Nisi vero blanditiis velit qui fugit aut, voluptatibus, dignissimos fuga a debitis soluta quos possimus unde earum ex expedita at neque distinctio ea? Vero libero ab sequi deserunt expedita, hic dolorem incidunt.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas veritatis deserunt nam explicabo voluptatum ut. Culpa cum et nisi!
            </p>

            {/* TITLE */}
            <h2 className="section-title">
              Lorem ipsum dolor sit, amet consectetur
            </h2>

            {/* CONTENT */}
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque quae id in, error cupiditate expedita praesentium iure ad sequi aut, ex ratione possimus voluptatum vitae voluptate, quibusdam similique eaque repellat eligendi nulla? Quos quasi culpa quisquam iure reprehenderit delectus quidem velit, itaque quibusdam fugit nostrum, dolore dolores pariatur officia fuga voluptatibus magni similique alias cupiditate accusamus optio ullam nihil.
            </p>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio rerum alias quasi fugiat eum similique natus. Assumenda dolorem saepe nostrum voluptatum voluptatibus est possimus ducimus vitae perferendis a eveniet exercitationem laboriosam cupiditate ea nam quia, alias nemo adipisci debitis autem sunt velit consectetur eius? Voluptatum ipsa delectus itaque assumenda, culpa enim officiis, magni neque sunt quia eum, accusantium at..
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veritatis quod fugit, optio nulla iure voluptatibus voluptates laudantium dolore unde mollitia tenetur aut perspiciatis maxime eos, officiis et, velit corrupti!
            </p>

          </div>
        </div>
      </div>
    </section>                    
                 

    </>
  );
};

export default News1;
