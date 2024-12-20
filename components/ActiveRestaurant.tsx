import React from "react";
import { CiPlay1 } from "react-icons/ci";

function ActiveRestaurant() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] bg-[url('/RestaurantActiveProcess.png')] px-4 sm:px-8 md:px-[135px] py-12 md:py-[120px] bg-transparent"
    >
      <div className="z-10 flex flex-col justify-center items-center w-full h-full text-white bg-transparent">
        <h1 className="text-[#FF9F0D] text-xl sm:text-2xl md:text-[32px] font-bold text-center md:text-right font-greatVibes bg-transparent">
          Restaurant Active Process
        </h1>
        <h1 className="text-[20px] sm:text-[25px] md:text-[48px] font-bold w-full sm:w-[80%] md:w-[60%] text-center mt-4 md:mt-0 md:text-right bg-transparent">
          <span className="text-[#FF9F0D] bg-transparent">We</span> Document Every Food Bean Process untile it is saved
        </h1>
        <h3 className="w-full sm:w-[80%] md:w-[60%] text-sm sm:text-base mt-4 md:mt-0 text-center md:text-left bg-transparent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[24px] mt-6 sm:mt-[33px] w-full bg-transparent">
          <button className="border border-[#FF9F0D] w-[140px] h-[40px] sm:w-[160px] md:w-[190px] md:h-[60px] rounded-[30px] bg-transparent hover:bg-[#FF9F0D] transition-colors duration-300">
            Read More
          </button>
          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#FF9F0D] flex justify-center items-center cursor-pointer hover:bg-[#e88f0c] transition-colors duration-300">
            <CiPlay1 className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] bg-transparent text-white" />
          </div>
          <h2 className="font-semibold text-sm sm:text-base">
            Play Video
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ActiveRestaurant;