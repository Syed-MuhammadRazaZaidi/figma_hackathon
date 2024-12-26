import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const FigmaFooter = () => {
  return (
    <>
      <footer className='w-full bg-black'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-32'>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-10'>
            <div className='text-center lg:text-left max-w-xl'>
              <h1 className='text-[#FF9F0D] text-3xl lg:text-4xl font-bold'>
                St<span className='text-white'>ill You Need Our Support ?</span>
              </h1>
              <p className='text-white mt-4 text-lg'>Dont wait make a smart & logical quote here. Its pretty easy.</p>
            </div>
            
            <div className='w-full lg:w-auto flex flex-col sm:flex-row items-center justify-center'>
              <input 
                className='bg-[#FF9F0D] text-white px-6 py-4 rounded-sm w-full sm:w-80'
                type="email" 
                placeholder="Enter Your Email" 
              />
              <button 
                className='transition-all duration-300 hover:bg-[#FF9F0D] hover:text-white border-2 border-white bg-white rounded-sm text-xl text-[#FF9F0D] py-3 px-6 w-full sm:w-auto'
                type="submit"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="border-b border-[#FF9F0D] my-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-300 py-10 items-center justify-items-center text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">About Us.</h2>
              <p className="text-base">
                Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
              </p>

              <div className='flex items-center justify-center lg:justify-start gap-4'>
                <Image 
                  src="/Watch.png"
                  height={80} 
                  width={80} 
                  alt='opening hours icon'
                  className='w-20 object-contain'
                />
                <div className='space-y-2'>
                  <h3 className='text-xl'>Opening Hours</h3>
                  <p className='text-base'>Mon - Sat(8.00 - 6.00)</p>
                  <p className='text-base'>Sunday - Closed</p>    
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Useful Links</h2>
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((item, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="block text-lg hover:text-[#FF9F0D] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Help?</h2>
              {['FAQ', 'Term & conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="block text-lg hover:text-[#FF9F0D] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Recent Post</h2>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 items-center justify-center lg:justify-start">
                  <Image 
                    src={`/R${item}.png`}
                    height={65} 
                    width={65} 
                    alt={`recent post ${item}`}
                    className='w-16 object-cover rounded'
                  />
                  <div>
                    <p className='text-gray-500 text-sm'>20 Feb 2022</p>
                    <h3 className='text-lg hover:text-[#FF9F0D] transition-colors cursor-pointer'>
                      Keep Your Business
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-[#4F4F4F] py-6'>
          <div className='bg-transparent container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4'>
            <p className='bg-transparent text-gray-300 text-center'>
              Copyright © {new Date().getFullYear()} by Ayeman. All Rights Reserved.
            </p>
            <div className=" bg-transparent flex justify-center gap-6">
              {[FaFacebook, FaInstagram, FaYoutube, FaXTwitter].map((Icon, index) => (
                <Icon 
                  key={index}
                  className="bg-transparent text-white text-xl hover:text-[#FF9F0D] transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FigmaFooter