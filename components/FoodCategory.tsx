import React from "react";
import Image from 'next/image';

function FoodCategory() {
  return (
    <>
      <section className="bg-black px-4 sm:px-6 md:px-[135px] py-8  flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-greatVibes text-[20px] sm:text-[24px] md:text-[32px] font-normal text-[#FF9F0D]">
            Food Category
          </h1>

          <h1 className="text-[16px] sm:text-[20px] md:text-[50px] font-bold text-white text-center">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-[20px] mt-8  place-items-center">
          <div className="w-full max-w-[280px] lg:max-w-[350px]">
            <Image 
              src={"/choosepic1.png"} 
              alt="Food" 
              width={500} 
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full max-w-[280px] lg:max-w-[350px] cursor-pointer">
            <Image 
              src={"/choosepic2.png"} 
              alt="Food" 
              width={500} 
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full max-w-[280px] lg:max-w-[350px] cursor-pointer">
            <Image 
              src={"/choosepic3.png"} 
              alt="Food" 
              width={500} 
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full max-w-[280px] lg:max-w-[350px] cursor-pointer">
            <Image 
              src={"/choosepic4.png"} 
              alt="Food" 
              width={500} 
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FoodCategory;