import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogCarousel = () => {
  const blogs = [
    {
      img: "https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg",
      author: "Lorem Ipsum",
      date: "14 Jan, 2024",
      title: "simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      author: "Lorem Ipsum",
      date: "14 Jan, 2024",
      title: "simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      author: "Lorem Ipsum",
      date: "14 Jan, 2024",
      title: "simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      author: "Lorem Ipsum",
      date: "14 Jan, 2024",
      title: "simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      author: "Lorem Ipsum",
      date: "14 Jan, 2024",
      title: "simply dummy text of the printing and typesetting industry. ",
    },
  ];

  return (
    <div style={{ padding: "60px 0", backgroundColor: "#24A7F7" }} >
      <div className="container text-center">
        <h2 style={{ fontWeight: "700", color: "#fff" }}>Our Blogs</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="mt-5"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                    BY {blog.author} - {blog.date}
                  </p>
                  <h6 style={{ fontWeight: "600" }}>{blog.title}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogCarousel;
