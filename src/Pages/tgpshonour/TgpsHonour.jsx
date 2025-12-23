import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tgpsHonour.css";

const posts = [
  {
    img: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    title: "Title one goes here",
    date: "25 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    title: "Second Image Title",
    date: "24 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    title: "Image Number Three",
    date: "23 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    title: "Aliquam sed magna risus",
    date: "22 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    title: "Lorem ipsum dolor sit",
    date: "21 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    title: "Praesent eget lectus mauris",
    date: "20 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    title: "Donec nec metus non",
    date: "15 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
    title: "Vestibulum faucibus lacus",
    date: "14 Jan 2084",
  },
  {
    img: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    title: "Pellentesque habitant morbi",
    date: "13 Jan 2084",
  },
];

const TgpsHonour = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    let iso;

    imagesLoaded(gridRef.current, () => {
      iso = new Isotope(gridRef.current, {
        itemSelector: ".post-masonry",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: {
          columnWidth: ".post-masonry",
        },
      });
    });

    return () => iso && iso.destroy();
  }, []);

  return (
    <section className="main-posts">
      <div className="container">
        <div className="blog-masonry" ref={gridRef}>
          {posts.map((post, index) => (
            <div className="post-masonry" key={index}>
              <div className="post-thumb">
                <img src={post.img} alt={post.title} />

                {/* TITLE OVER IMAGE */}
                <div className="title-over">
                  <h4>{post.title}</h4>
                </div>

                {/* HOVER */}
                <div className="post-hover">
                  <div className="inside">
                    <i className="fa fa-plus"></i>
                    <span className="date">{post.date}</span>
                    <h4>{post.title}</h4>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TgpsHonour;
