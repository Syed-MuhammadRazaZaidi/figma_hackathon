import React from "react";
import Image from "next/image";

function OurChefs() {
  return (
    <>
      <section className="bg-black w-full px-4 sm:px-8 md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
          <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-normal text-[#FF9F0D] whitespace-normal text-center font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] sm:text-[35px] md:text-[50px] lg:text-[60px] font-bold text-center text-white">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-[30px] sm:mt-[50px] justify-items-center max-w-7xl mx-auto">
          <div className="w-full max-w-[280px] aspect-[3/4]">
            <Image 
              src={"/Chefcard1.png"} 
              width={500} 
              height={500} 
              alt="Chef 1"
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              layout="responsive"
            />
          </div>
          <div className="w-full max-w-[280px] aspect-[3/4]">
            <Image 
              src={"/Chefcard2.png"} 
              width={500} 
              height={500} 
              alt="Chef 2"
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              layout="responsive"
            />
          </div>
          <div className="w-full max-w-[280px] aspect-[3/4]">
            <Image 
              src={"/Chefcard3.png"} 
              width={500} 
              height={500} 
              alt="Chef 3"
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              layout="responsive"
            />
          </div>
          <div className="w-full max-w-[280px] aspect-[3/4]">
            <Image 
              src={"/Chefcard4.png"} 
              width={500} 
              height={500} 
              alt="Chef 4"
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurChefs;