import React from 'react'
import Image from 'next/image'

const FigmaHero = () => {
  return (
  
    <div className='container mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 items-center mt-10 gap-5'>
    <div className='grid md:col-span-2 text-white'>
    <div>
        <Image src="/quick.png"
            height={300} 
            width={300} 
            alt='bowl'
        />
    </div>
        <div className='mt-5'>
        <h1 className='flex text-[#FF9F0D] text-6xl font-bold'>Th<p className='text-white'>e Art of speed</p></h1>
        <h1 className='text-6xl font-bold'>food Quality</h1>
        </div>
    <div className='text-white mt-10'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <h1> Varius sed pharetra dictum neque massa congue</h1>
    </div>
    <div>
    <button className='px-14 py-5 rounded-full text-[#E0DFDF] text-[16px] bg-[#FF9F0D] mt-10'>See Menu</button>
    </div>
    </div>
    <div className=' text-center grid md:col-span-3'>
        <Image src="/bowl.png"
            height={1000} 
            width={1000} 
            alt='bowl'
        />
    </div>
</div>

  )
}

export default FigmaHero