import React from 'react'
import Image from 'next/image'

const FigmaHero = () => {
  return (
    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 items-center gap-5'>
      <div className='grid md:col-span-2 text-white'>
        <div className='max-w-[300px] mx-auto md:mx-0'>
          <Image 
            src="/quick.png"
            height={300} 
            width={300}
            alt='bowl'
            className='w-full h-auto'
          />
        </div>
        <div className='mt-5 text-center md:text-left'>
          <h1 className='flex-col md:flex-row text-[#FF9F0D] text-4xl md:text-6xl font-bold'>
            Th<span className='text-white'>e Art of speed</span>
          </h1>
          <h1 className='text-4xl md:text-6xl font-bold'>food Quality</h1>
        </div>
        <div className='text-white mt-10 text-center md:text-left text-sm md:text-base'>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <h1>Varius sed pharetra dictum neque massa congue</h1>
        </div>
        <div className='text-center md:text-left'>
          <button className='px-8 md:px-14 py-3 md:py-5 rounded-full text-[#E0DFDF] text-[14px] md:text-[16px] bg-[#FF9F0D] mt-10 hover:bg-[#e08d0b] transition-colors'>
            See Menu
          </button>
        </div>
      </div>
      <div className='text-center grid md:col-span-3'>
        <Image 
          src="/bowl.png"
          height={1000} 
          width={1000}
          alt='bowl'
          className='w-full h-auto'
          priority
        />
      </div>
    </div>
  )
}

export default FigmaHero