import Link from 'next/link'
import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='bg-white'>
        <div className="bg-transparent min-h-screen bg-white">

      <div
        className=" w-full bg-no-repeat bg-center flex justify-center bg-cover"
        style={{
          backgroundImage: "url('/heropic.png')",
          height: "300px", 
        }}
      >
        {/* Header Section */}
        <div className=" bg-transparent w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
          <p className="bg-transparent text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">404 Error</p>
          <div className=" bg-transparent flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className=" bg-transparent text-xl sm:text-2xl md:text-3xl text-[20px]">Home  &gt; <span className="text-[#FF9F0D]">404</span>  </p>
            
          </div>
        </div>
      </div>

      {/* Signup Form Section */}
      <section className="bg-transparent p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="bg-transparent w-[630px] text-center">
          <h3 className="bg-transparent text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="bg-transparent font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="bg-transparent text-[18px] mb-4">
            Page cannot be found! Well have it figured out in no time.
          </p>
          <p className="bg-transparent text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
    </div>
  )
}

export default page