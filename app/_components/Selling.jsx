import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Selling = () => {
  return (
    <div className="bg-gray-50">
      <div className="CONTAINER">
        <div className="grid grid-cols-3 gap-20 mx-20">
          {/* ******************************************** */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-50 hover:scale-105 transition-transform">
            {/* ******************************************** */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src="/mid1.png" width={400} height={400} alt="error" />
              <div className="">
                <p className="text-gray-500 text-lg">#1 Selling</p>
                <h1 className="py-2 text-4xl font-semibold text-gray-700">
                  Double Espresso
                </h1>
              </div>
            </div>
            {/* ******************************************** */}
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              ullam eos harum aspernatur impedit delectus dolor cupiditate
              doloremque esse pariatur.
            </p>
            <div className="grid grid-cols-2 gap-6 items-center py-2">
              <h1 className="font-bold text-2xl">$ 59.99</h1>
              <Button className="px-6 py-3 rounded-3xl shadow-lg hover:scale-105 transition-transform text-base md:text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
          </div>
          {/* ******************************************** */}

          {/* ******************************************** */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-50 hover:scale-105 transition-transform">
            {/* ******************************************** */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src="/mid2.png" width={400} height={400} alt="error" />
              <div className="">
                <p className="text-gray-500 text-lg">#1 Selling</p>
                <h1 className="py-2 text-4xl font-semibold text-gray-700">
                  Double Espresso
                </h1>
              </div>
            </div>
            {/* ******************************************** */}
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              ullam eos harum aspernatur impedit delectus dolor cupiditate
              doloremque esse pariatur.
            </p>
            <div className="grid grid-cols-2 gap-6 items-center py-2">
              <h1 className="font-bold text-2xl">$ 59.99</h1>
              <Button className="px-6 py-3 rounded-3xl shadow-lg hover:scale-105 transition-transform text-base md:text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
            {/* ******************************************** */}
          </div>
          {/* ******************************************** */}

          {/* ******************************************** */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-50 hover:scale-105 transition-transform">
            {/* ******************************************** */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src="/mid3.png" width={400} height={400} alt="error" />
              <div className="">
                <p className="text-gray-500 text-lg">#1 Selling</p>
                <h1 className="py-2 text-4xl font-semibold text-gray-700">
                  Double Espresso
                </h1>
              </div>
            </div>
            {/* ******************************************** */}
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              ullam eos harum aspernatur impedit delectus dolor cupiditate
              doloremque esse pariatur.
            </p>
            <div className="grid grid-cols-2 gap-6 items-center py-2">
              <h1 className="font-bold text-2xl">$ 59.99</h1>
              <Button className="px-6 py-3 rounded-3xl shadow-lg hover:scale-105 transition-transform text-base md:text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
            {/* ******************************************** */}
          </div>
          {/* ******************************************** */}
        </div>
      </div>
    </div>
  );
};

export default Selling;
