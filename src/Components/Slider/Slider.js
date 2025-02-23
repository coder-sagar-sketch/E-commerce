import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider() {
  return (
    <div className="homeSlider w-full flex justify-center items-center bg-gray-100 py-6">
      <div className="container w-full max-w-screen-xl relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper rounded-xl shadow-lg"
        >
          {[
            "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740323065/1740323064412_New_Project_11.jpg",
            "https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg",
            "https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165930/1739165929706_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
            "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
            "https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg",
            "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
            "https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg",
            "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full  object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Small Navigation Arrows */}
        <button className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md transition hover:bg-red-600 hover:text-white">
          <FaChevronLeft size={10} />
        </button>

        <button className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md transition hover:bg-red-600 hover:text-white">
          <FaChevronRight size={10} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
