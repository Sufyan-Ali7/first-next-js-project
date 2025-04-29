import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Order = () => {
  return (
    <div className="bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/coffee-mid.png"
              alt="Coffee"
              width={1100}
              height={1100}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="flex flex-col text-3xl md:text-4xl lg:text-7xl font-bold">
              <span>Order Your</span>
              <span>Favourite Coffee</span>
            </h1>
            <p className="py-6 text-gray-600 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              similique magni voluptatem, consequuntur quidem accusamus expedita
              molestiae delectus, quibusdam illum temporibus modi. Architecto,
              blanditiis dolorem?
            </p>
            <Button className="px-6 py-3 rounded-3xl shadow-lg hover:scale-105 transition-transform text-base md:text-lg font-normal tracking-wide">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
