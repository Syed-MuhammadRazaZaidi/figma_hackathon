import React from 'react';
import Image from 'next/image';

function Clients() {
  return (
    <>
      <section className=" relative bg-black w-full min-h-[300px] md:min-h-[469px] px-4 sm:px-6 md:px-8">

        {/* Content */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-[161px] z-10 max-w-[1366px] mx-auto py-6 md:py-10">
          <div className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-full">
            <Image 
              src={"/Clients.png"} 
              alt="Clients" 
              className="w-full h-auto object-contain"
              width={5000}
              height={5000}
              priority
              sizes="(max-width: 640px) 90vw,
                     (max-width: 768px) 80vw, 
                     (max-width: 1200px) 70vw,
                     1366px"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;