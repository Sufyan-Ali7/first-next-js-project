import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Explore = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold">Explore Our Alowishus</h1>
          <p className="py-3 text-gray-500 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
            velit inventore. Cum, suscipit commodi!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 mx-auto">
          {/* Catering Card */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-100 hover:scale-105 transition-transform ">
            <h2 className="text-3xl font-semibold text-gray-700">
              Our Catering
            </h2>
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="text-center">
              <Image
                src="/icon1.png"
                width={200}
                height={200}
                alt="Catering Icon"
                className="mx-auto py-6"
              />
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-transform text-lg font-normal tracking-wide">
                Order Catering
              </Button>
            </div>
          </div>

          {/* Food Card */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-100 hover:scale-105 transition-transform ">
            <h2 className="text-3xl font-semibold text-gray-700">The Food</h2>
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="text-center">
              <Image
                src="/icon2.png"
                width={200}
                height={200}
                alt="Food Icon"
                className="mx-auto py-6"
              />
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-transform text-lg font-normal tracking-wide">
                Food Menu
              </Button>
            </div>
          </div>

          {/* Gelato Card */}
          <div className="p-8 cursor-pointer shadow-lg  hover:shadow-xl rounded-lg bg-gray-100 hover:scale-105 transition-transform ">
            <h2 className="text-3xl font-semibold text-gray-700">The Gelato</h2>
            <p className="py-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="text-center">
              <Image
                src="/icon3.png"
                width={200}
                height={200}
                alt="Gelato Icon"
                className="mx-auto py-6"
              />
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-transform text-lg font-normal tracking-wide">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
