"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
// import "swiper/css/navigation";

// import './styles.css';
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
// import { Button } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

const Banner = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <Swiper
          // className="items-center w-3xl"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Autoplay]}
          className="w-5xl items-center grid-cols-2 pl-96                 "
        >
          {/* first swiper slide */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-10 md:pb-10">
              <div className="grid grid-cols-2">
                {/* ***************************** */}
                <div className="relative">
                  <h1 className="text-8xl font-bold py-4">
                    Alowishus Delicious Coffee{" "}
                  </h1>
                  <div className="absolute top-56 right-30 mt-2">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={80}
                      height={80}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam expedita porro sed praesentium et enim maxime
                    dolorum quaerat quisquam dolorem.
                  </p>
                  {/* ***************************** */}
                  <div className="flex gap-4 py-6">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide ">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>

                  {/* ***************************** */}
                </div>
                <div className="relative">
                  <Image
                    src="/hero1.png"
                    width={600}
                    height={600}
                    alt="error"
                  />
                  <div className="absolute top-8 right-2 ">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={120}
                      height={120}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* end first wsiper slide */}
          {/* second swiper slide */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-10 md:pb-10">
              <div className="grid grid-cols-2">
                {/* ***************************** */}
                <div className="relative">
                  <h1 className="text-8xl font-bold py-4">
                    Alowishus Delicious Coffee{" "}
                  </h1>
                  <div className="absolute top-56 right-30 mt-2">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={80}
                      height={80}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam expedita porro sed praesentium et enim maxime
                    dolorum quaerat quisquam dolorem.
                  </p>
                  {/* ***************************** */}
                  <div className="flex gap-4 py-6">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide ">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>

                  {/* ***************************** */}
                </div>
                <div className="">
                  <Image
                    src="/coffee-mid.png"
                    width={1000}
                    height={1000}
                    alt="error"
                  />
                  <div className="absolute top-8 right-2 ">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={120}
                      height={120}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* end second swiper slide */}
          {/* third swiper slide */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-10 md:pb-10">
              <div className="grid grid-cols-2">
                {/* ***************************** */}
                <div className="relative">
                  <h1 className="text-8xl font-bold py-4">
                    Alowishus Delicious Coffee{" "}
                  </h1>
                  <div className="absolute top-56 right-30 mt-2">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={80}
                      height={80}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam expedita porro sed praesentium et enim maxime
                    dolorum quaerat quisquam dolorem.
                  </p>
                  {/* ***************************** */}
                  <div className="flex gap-4 py-6">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide ">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>

                  {/* ***************************** */}
                </div>
                <div className="relative">
                  <Image
                    src="/alowishus-coffee.png"
                    width={1000}
                    height={1000}
                    alt="error"
                  />
                  <div className="absolute top-8 right-2 ">
                    {" "}
                    <Image
                      src="/cafe.png"
                      width={120}
                      height={120}
                      alt="Alowishus Coffee Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* end third wiper slide */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
