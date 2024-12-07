import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "../assets/hero-1.jpg";
import Hero2 from "../assets/hero-2.jpg";
import Hero3 from "../assets/hero-3.jpg";

const HeroSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full bg-[#fff] rounded-md relative">
            {/* header */}
            <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
              <div>
                <div className="w-full lg:w-[80%]">
                  <p>Hi there!</p>
                  <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
                    <span className="text-[#3B9DF8]">Become</span> a
                    changemaker!
                  </h1>
                  <p className="mt-2 text-[1rem]">
                    🫰Tap into the world of regular donations
                  </p>
                </div>
                <section className="w-[80%] mt-10 ">
                  <div className="bg-sky-100 md:py-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="stat">
                        <h2 className="text-2xl font-bold">12.9K</h2>
                        <p className="text-gray-600">Lives saved </p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">1.2M</h2>
                        <p className="text-gray-600">Donors</p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">15.9K</h2>
                        <p className="text-gray-600">Trusted Campaign</p>
                      </div>
                    </div>
                  </div>
                  <button className=" p-3 rounded-lg text-white bg-[#3B9DF8]  mt-5">
                    Donation Now{" "}
                  </button>
                </section>
              </div>

              <div className="w-full lg:w-[55%] ">
            
                <img className="path" src={Hero} alt="" />
              </div>
            </header>

            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-[#fff] rounded-md relative">
            {/* header */}
            <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
              <div>
                <div className="w-full lg:w-[80%]">
                  <p>Hi there!</p>
                  <h1 className="text-[40px] sm:text-[40px] font-semibold leading-[45px] sm:leading-[70px]">
                    <span className="text-[#3B9DF8]">Comparing the</span> a
                     Top Online Crowdfunding Platforms
                  </h1>
                  <p className="mt-2 text-[1rem]">
                  Crowdfunding is a way to raise money for an individual or organization
                  </p>
                </div>
                <section className="w-[80%] mt-10 ">
                  <div className="bg-sky-100 md:py-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="stat">
                        <h2 className="text-2xl font-bold">12.9K</h2>
                        <p className="text-gray-600">Lives saved </p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">1.2M</h2>
                        <p className="text-gray-600">Donors</p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">15.9K</h2>
                        <p className="text-gray-600">Trusted Campaign</p>
                      </div>
                    </div>
                  </div>
                  <button className=" p-3 rounded-lg text-white bg-[#3B9DF8]  mt-5">
                    Donation Now{" "}
                  </button>
                </section>
              </div>

              <div className="w-full lg:w-[40%] ">
                
                <img className="path" src={Hero2} alt="" />
              </div>
            </header>

            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>  <div className="w-full bg-[#fff] rounded-md relative">
            {/* header */}
            <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
              <div>
                <div className="w-full lg:w-[80%]">
                  <p>Hi there!</p>
                  <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
                    <span className="text-[#3B9DF8]">Become</span> a
                    changemaker!
                  </h1>
                  <p className="mt-2 text-[1rem]">
                    🫰Tap into the world of regular donations
                  </p>
                </div>
                <section className="w-[80%] mt-10 ">
                  <div className="bg-sky-100 md:py-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="stat">
                        <h2 className="text-2xl font-bold">12.9K</h2>
                        <p className="text-gray-600">Lives saved </p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">1.2M</h2>
                        <p className="text-gray-600">Donors</p>
                      </div>
                      <div className="stat">
                        <h2 className="text-2xl font-bold">15.9K</h2>
                        <p className="text-gray-600">Trusted Campaign</p>
                      </div>
                    </div>
                  </div>
                  <button className=" p-3 rounded-lg text-white bg-[#3B9DF8]  mt-5">
                    Donation Now{" "}
                  </button>
                </section>
              </div>

              <div className="w-full lg:w-[40%] ">
                
                <img className="path" src={Hero3} alt="" />
              </div>
            </header>

            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
          </div></SwiperSlide>
      
       
      </Swiper>
    </div>
  );
};

export default HeroSection;
