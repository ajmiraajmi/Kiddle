import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import B1 from "../../../assets/B1.jpg";
import B2 from "../../../assets/B2.jpg";
import B3 from "../../../assets/B3.jpg";

const Bannar = () => {
  return (
    <div className="mt-0 border border-white text-white">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] md:h-[40rem] object-cover"
              src={B3}
              alt="Jewelry Collection"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Elegant Toys
                </h3>
                <p className="text-xl md:text-lg text-white">
                  Discover our exquisite collection of fine Toys.
                </p>
                <button className="bg-amber-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[30rem] md:h-[36rem] object-cover"
              src={B2}
              alt="Luxury Skincare"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                 Study & Learn
                </h3>
                <p className="text-md md:text-lg text-cyan-400">
                   Best Learning Toys for your Kids.
                </p>
                <button className="bg-lime-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[30rem] md:h-[36rem] object-cover"
              src={B1}
              alt="Luxury Skincare"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-black">
                Study & Learn
                </h3>
                <p className="text-md md:text-lg text-black">
                Best Learning Toys for your Kids.
                </p>
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
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
