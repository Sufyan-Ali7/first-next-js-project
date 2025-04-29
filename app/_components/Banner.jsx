"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {[1, 2, 3].map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <div className="relative max-w-2xl">
                  <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold py-4">
                    Alowishus Delicious Coffee
                  </h1>
                  <p className="py-4 text-base md:text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam expedita porro sed praesentium et enim maxime
                    dolorum quaerat quisquam dolorem.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 py-6">
                    <Button className="p-4 md:p-6 text-sm md:text-lg">
                      Download App
                    </Button>
                    <Button
                      className="p-4 md:p-6 text-sm md:text-lg"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  <div className="absolute top-58 right-4 md:right-[190px] hidden md:block">
                    <Image src="/cafe.png" width={80} height={80} alt="Logo" />
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={
                      slide === 1
                        ? "/hero1.png"
                        : slide === 2
                        ? "/coffee-mid.png"
                        : "/man-holding.png"
                    }
                    alt={
                      slide === 1
                        ? "Hero"
                        : slide === 2
                        ? "Coffee Mid"
                        : "Man Holding Coffee"
                    }
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-1 right-12 hidden md:block">
                    <Image
                      src="/cafe.png"
                      width={120}
                      height={120}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
