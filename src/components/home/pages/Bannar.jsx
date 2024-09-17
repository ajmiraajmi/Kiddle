import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import B1 from "../../../assets/B1.jpg";
import B2 from "../../../assets/B2.jpg";
import B3 from "../../../assets/B3.jpg";

const Bannar = () => {
  return (
    <div className="mt-0 border border-white text-white">
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        spaceBetween={10}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] object-cover"
              src={B1}
              alt="Elegant Toys"
              style={{ height: "40rem", width: "100%" }} // Set a fixed height and width
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <div className="text-center p-4 max-w-3xl mx-auto">
                <h3 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-black">
                  Elegant Toys
                </h3>
                <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-black">
                  Discover our exquisite collection of fine Toys.
                </p>
                <button className="bg-amber-950 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] object-cover"
              src={B2}
              alt="Study & Learn"
              style={{ height: "40rem", width: "100%" }} // Set the same height and width
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <div className="text-center p-4 max-w-3xl mx-auto">
                <h3 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-emerald-400">
                  Study & Learn
                </h3>
                <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-emerald-400">
                  Best Learning Toys for your Kids.
                </p>
                <button className="bg-lime-950 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] object-cover"
              src={B3}
              alt="Innovative Learning"
              style={{ height: "40rem", width: "100%" }} // Same height and width
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <div className="text-center p-4 max-w-3xl mx-auto">
                <h3 className="text-[3rem] md:text-[4rem] lg:text-[4rem] font-bold text-white">
                  Innovative Learning
                </h3>
                <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-white">
                  Best Learning Toys for your Kids.
                </p>
                <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
