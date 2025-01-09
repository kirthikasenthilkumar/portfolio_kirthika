import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/app.jpg";
import profilePic2 from "../../img/blockchain.jpg";
import profilePic3 from "../../img/art.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I constantly explore the latest trends in app development to build scalable and efficient solutions that enhance user experience.I am passionate about blending my technical skills in app development with my creativity, developing applications that not only function well but also offer visually appealing designs.",
    },
    {
      img: profilePic2,
      review:
        "My interest in blockchain development stems from its transformative potential in revolutionizing industries like finance, healthcare, and supply chain management.I aim to leverage blockchain to create decentralized applications that prioritize security, privacy, and transparency in a rapidly evolving digital landscape.",
    },
    {
      img: profilePic3,
      review:
        "Artistic work is a great outlet for me to explore visual design, and I am always looking for new ways to merge creativity with cutting-edge technology. Artistic work fuels my creative process, helping me think outside the box when developing user interfaces and user experiences in my tech projects.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Passions and Interests That Drive</span>
        <span> My Creativity</span>
      
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
