
import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className='bg-transparent w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='bg-transparent container mx-auto px-4'>
        <div className='bg-transparent flex flex-col items-center'>
          <h1 className='bg-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Pages
          </h1>
          <div className='bg-transparent text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='bg-transparent text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='bg-transparent text-white'>/</span>
            <Link href="/pages" className='bg-transparent text-[#FF9F0D]'>
              Pages
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero