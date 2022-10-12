import React from "react";
import AVTR1 from "../../Assets/avatar1.jpg";
import AVTR2 from "../../Assets/avatar2.jpg";
import AVTR3 from "../../Assets/avatar3.jpg";
import AVTR4 from "../../Assets/avatar4.jpg";
import "./Testimonals.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sedexercitationem quam sint. Placeat veritatis doloribus numquam,dolorem quis incidunt corrupti voluptatibus, consequuntur autem eiusrerum, porro fugit veniam. Similique, vero.",
  },
  {
    avatar: AVTR2,
    name: "Bob Marlay",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sedexercitationem quam sint. Placeat veritatis doloribus numquam,dolorem quis incidunt corrupti voluptatibus, consequuntur autem eiusrerum, porro fugit veniam. Similique, vero.",
  },
  {
    avatar: AVTR3,
    name: "Ashley Anderson",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sedexercitationem quam sint. Placeat veritatis doloribus numquam,dolorem quis incidunt corrupti voluptatibus, consequuntur autem eiusrerum, porro fugit veniam. Similique, vero.",
  },
  {
    avatar: AVTR4,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sedexercitationem quam sint. Placeat veritatis doloribus numquam,dolorem quis incidunt corrupti voluptatibus, consequuntur autem eiusrerum, porro fugit veniam. Similique, vero.",
  },
];

const Testimonals = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonals;
