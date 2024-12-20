import React from 'react'
import Image from 'next/image'

const FigmaChefs = () => {
  return (
    <div className='bg-white w-full flex justify-center'>
        <section className="text-white body-font bg-white w-full">
          <div className="container px-2 sm:px-4 md:px-5 py-8 sm:py-12 md:py-24 mx-auto bg-white max-w-7xl flex justify-center">
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 bg-white place-items-center max-w-6xl">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                <div key={index} className="w-full p-1 xs:p-2 sm:p-3 md:p-4 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                  <a className="block relative rounded-lg overflow-hidden bg-white w-full flex justify-center">
                    <Image
                      height={500}
                      width={500} 
                      alt={`Chef ${item}`}
                      className="object-cover object-center w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] block bg-white transition-transform duration-300 hover:scale-105"
                      src={`/c${item}.png`}
                    />
                  </a>
                  <div className="mt-2 sm:mt-3 md:mt-4 bg-white w-full flex flex-col items-center">
                    <h3 className="text-black bg-white text-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide sm:tracking-wider title-font mb-0.5 sm:mb-1">
                      {item === 1 && "Tahmina Rumi"}
                      {item === 2 && "Jorina Begum"}
                      {item === 3 && "M.Mohammad"}
                      {item === 4 && "Munna Kathy"}
                      {item === 5 && "Tahmina Rumi"}
                      {item === 6 && "Bisnu devgon"}
                      {item === 7 && "Motin Molladsf"}
                      {item === 8 && "William Rumi"}
                      {item === 9 && "Kets william roy"}
                      {item === 10 && "Mahmud kholil"}
                      {item === 11 && "Ataur Rahman"}
                      {item === 12 && "Monalisa holly"}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-gray-800 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg bg-white">
                      Chef
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default FigmaChefs