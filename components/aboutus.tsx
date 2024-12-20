import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function AbountUs() {
  return (
    <section className="container mx-auto bg-black px-3 flex flex-col justify-evenly items-center md:flex-row md:items-center py-8 min-h-screen">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%] space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
        <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes text-center md:text-left">
          About us
        </h1>

        <h1 className="text-[18px] sm:text-[32px] md:text-[50px] font-bold leading-tight text-center md:text-left">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal max-w-prose text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul className="space-y-4 md:space-y-6 w-full">
          <li className="text-[12px] sm:text-[14px] md:text-[16px] font-normal flex items-center justify-center md:justify-start">
            <span className="mr-[10px] text-[#FF9F0D]">
              <FaCheck />
            </span>
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[12px] sm:text-[14px] md:text-[16px] font-normal flex items-center justify-center md:justify-start">
            <span className="mr-[10px] text-[#FF9F0D]">
              <FaCheck />
            </span>
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </li>
          <li className="text-[12px] sm:text-[14px] md:text-[16px] font-normal flex items-center justify-center md:justify-start">
            <span className="mr-[10px] text-[#FF9F0D]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex justify-center md:justify-start">
          <button className="bg-[#FF9F0D] text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full hover:bg-yellow-800 transition-colors">
            See More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-4 md:space-y-6">
        <div className="relative w-full aspect-video">
          <Image 
            src="/aboutus1.jpeg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-square">
            <Image 
              src="/aboutus2.jpeg"
              alt="Hero Image"
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image 
              src="/aboutus3.jpeg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AbountUs;