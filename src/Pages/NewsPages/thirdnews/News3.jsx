import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import "./News3.css";

const News3 = () => {
  return (
    <>
      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-bar">
        <div className="container py-2">
          <Link to="/" className="text-white"><span style={{fontSize:"15px"}}>Home</span></Link>
          <span>›</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="press-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <h1 className="press-title">
                Lorem, ipsum dolor. <br />
                Lorem ipsum dolor sit. <br />
                Lorem
              </h1>

              <div className="press-meta">
                <span>Published: 16 December 2025</span>
                <span className="dot">•</span>
                <span>Lorem ipsum dolor sit.</span>
              </div>

              <p className="press-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci debitis in sit magnam, animi ducimus numquam sed laborum reiciendis!
              </p>

              <div className="press-image">
                <img
                  src="https://images.pexels.com/photos/3944382/pexels-photo-3944382.jpeg"
                  alt="tgps-news"
                  
                />
              </div>

              <div className="press-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eaque assumenda debitis mollitia architecto laudantium sapiente pariatur tempore, error nulla eos, ut fugit cupiditate non porro quo accusantium numquam autem incidunt veniam voluptatibus quis aspernatur eligendi? Ut laudantium adipisci repudiandae sapiente repellat, debitis labore, fugit quod quidem sequi dolorum aliquam error deserunt beatae ipsum consequuntur quo quae vero. Eum corporis molestias, vel quasi repellat eos nisi tenetur ab asperiores, vitae laborum dolores libero quam harum numquam minus blanditiis nobis iusto rerum. Quaerat pariatur corrupti dignissimos, fugiat quod excepturi nam tenetur delectus earum quam et dolore eaque voluptate officiis molestias aliquam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro maxime numquam qui exercitationem dolores necessitatibus similique eligendi illo, blanditiis dicta minus debitis fugit id. Laudantium non corporis magnam voluptatum molestiae aliquid a fugiat officiis nemo dicta laborum excepturi eum facilis culpa amet, tempore libero est doloremque quia soluta assumenda. Maiores error quod, vitae soluta dignissimos ex nulla exercitationem omnis numquam officiis atque, nesciunt fugiat. Cupiditate dolor beatae blanditiis esse, cumque labore magni nemo, ea doloremque facere, expedita id mollitia!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure harum reiciendis libero? Explicabo omnis dicta, quae error accusamus nostrum excepturi inventore a maiores cum iste non quam, asperiores dolorem! Cumque, reprehenderit harum quidem quam tempora maiores quo assumenda consequatur nemo animi, ea id repellendus necessitatibus voluptates nostrum accusamus! Quod iure repudiandae ut quo dolorem in? Quam ducimus at a vitae consequatur saepe rerum, similique explicabo quos, adipisci modi obcaecati possimus optio ipsa reprehenderit impedit tenetur dicta fugiat cum sit.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At saepe deserunt minima fugit dolore est sed quos facilis atque, maxime, dolorem, architecto non optio repudiandae? Nesciunt officia libero, perspiciatis provident quaerat corporis quod. Modi explicabo non porro temporibus praesentium dolores minima corrupti. Quos esse vel sit doloremque earum quidem ex ipsam dolore voluptates, voluptatibus atque facilis in reiciendis tempora dolor necessitatibus minima ab, consequatur porro! Ex earum ea mollitia non! Quae reprehenderit, quod consequuntur maxime debitis cumque, cum cupiditate, velit suscipit ratione delectus nulla officia expedita fugit impedit error vitae facilis fuga sed dolores enim laudantium hic nemo quam! Deserunt.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt esse dolorem aspernatur repellat aliquid quis tempore velit ipsum! Possimus non fugiat soluta porro eius temporibus rem, qui saepe ratione voluptatibus suscipit dolorem illum ex? Dolorum voluptas facere laudantium placeat ex similique velit itaque unde? Nulla et, cum doloribus officia laborum excepturi voluptatum voluptatem vero quo sed unde. Deserunt blanditiis et quidem officia odit iure quia quibusdam? Officiis, quod deserunt.
                </p>

                <hr />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News3;
