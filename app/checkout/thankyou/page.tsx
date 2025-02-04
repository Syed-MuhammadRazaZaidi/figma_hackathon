import Link from 'next/link'
import React from 'react'

const Page: React.FC = () => {
  return (
    <div className='bg-white'>
      <div className="bg-transparent min-h-screen bg-white">

        <div
          className="w-full bg-no-repeat bg-center flex justify-center bg-cover"
          style={{
            backgroundImage: "url('/heropic.png')",
            height: "300px",
          }}
        >
          {/* Header Section */}
          <div className="bg-transparent w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
            <p className="bg-transparent text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">Payment Successful</p>
          </div>
        </div>

        {/* Signup Form Section */}
        <section className="bg-transparent p-10 relative bg-white pt-36 flex flex-col items-center container mx-auto">
          <div className="bg-transparent w-full max-w-lg text-center">
            <h1 className="bg-transparent text-4xl sm:text-5xl md:text-7xl font-bold text-[#FF9F0D] mb-6 leading-tight">Thank You For Shopping!</h1>
            <p className="bg-transparent font-bold text-xl sm:text-2xl md:text-3xl m-10">
              Your Order Is On Its Way...
            </p>
            {/* Button */}
            <Link href="/">
              <button className="bg-[#FF9F0D] text-white text-lg sm:text-xl font-bold px-6 py-2 rounded hover:bg-[#e8890b] mt-4">
                Go Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page