import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const FigmaFooter = () => {
  return (
    <>
    <div className='container mx-auto mt-32 bg-black'>
        <div className='flex items-center justify-between px-32'>
        <div>
        <h1 className='flex text-[#FF9F0D] text-4xl font-bold'>St<p className='text-white'>ill You Need Our Support ?</p></h1>
        <h1 className='text-white mt-5 text-xl'>Don’t wait make a smart & logical quote here. Its pretty easy.</h1>
        </div>
        <div className='flex text-white'>
        <input className='bg-[#FF9F0D] text-white px-10 text-start py-5 w-[20rem] rounded-lg' type="email" placeholder="Enter Your Email" />
        <button className='flex items-center justify-center border-2 border-white bg-white w-[10rem] rounded-lg text-xl text-[#FF9F0D]' type="submit">Subscribe Now</button>
        </div>
        </div>
        <div className="border border-b border-[#FF9F0D] mt-20 mx-32"></div>
        <div>
        <div className="flex items-center justify-between text-gray-300 pb-24 px-[3rem] mt-10">
          <div className="py-10 space-y-6 h-64">
            <ul className="text-2xl font-bold">About Us.</ul>
            <li className="list-none">
            orporate clients and leisure travelers has <br />
            been relying on Groundlink for dependab <br />
            safe, and professional chauffeured car <br />
            service in major cities across World.</li>

            <div className='flex items-center gap-5'>

            <div className='mt-5'>
            <Image src="/watch.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            </div>
            <div className='mt-5 space-y-2'>
                <h1 className='text-xl'>Opening Houres</h1>
                <h1>Mon - Sat(8.00 - 6.00)</h1>
                <h1>Sunday - Closed</h1>    
            </div>
            </div>

          </div>
          <div className="py-10 space-y-6 h-64">
            <ul className="list-none text-2xl font-bold">Useful Links</ul>
            <li className="list-none text-xl">About</li>
            <li className="list-none text-xl">News</li>
            <li className="list-none text-xl">Partners</li>
            <li className="list-none text-xl">Team</li>
            <li className="list-none text-xl">Menu</li>
            <li className="list-none text-xl">Contacts</li>
          </div>
          <div className="py-10 space-y-6 h-64">
            <ul className="list-none text-2xl font-bold">Help?</ul>
            <li className="list-none text-xl">FAQ</li>
            <li className="list-none">Term & conditions</li>
            <li className="list-none">Reporting</li>
            <li className="list-none text-xl">Documentation</li>
            <li className="list-none text-xl">Support Policy</li>
            <li className="list-none text-xl">Privacy</li>
          </div>
          <div className="py-10 space-y-6 h-64">
            <ul className="list-none text-2xl font-bold">Recent Post</ul>
            <li className="list-none flex gap-5 items-center justify-center ">
            <div>
            <Image src="/R1.png"
            height={65} 
            width={65} 
            alt='bowl'
            />
            </div>
            <div className='text-xl'>
                <h1 className='text-gray-500 mb-1'>20 Feb 2022</h1>
                <h1>Keep Your Business</h1>
            </div>
            </li>
            <li className="list-none flex gap-5 items-center justify-center ">
            <div>
            <Image src="/R2.png"
            height={65} 
            width={65} 
            alt='bowl'
            />
            </div>
            <div className='text-xl'>
                <h1 className='text-gray-500 mb-1'>20 Feb 2022</h1>
                <h1>Keep Your Business</h1>
            </div>
            </li>
            <li className="list-none flex gap-5 items-center justify-center ">
            <div>
            <Image src="/R3.png"
            height={65} 
            width={65} 
            alt='bowl'
            />
            </div>
            <div className='text-xl'>
                <h1 className='text-gray-500 mb-1'>20 Feb 2022</h1>
                <h1>Keep Your Business</h1>
            </div>
            </li>
          </div>
        </div>
      </div>
      </div>
      <div className=' flex items-center justify-around mt-20 bg-[#4F4F4F] py-10'>
                <div>
                    <h1 className='text-gray-300 text-xl bg-[#4F4F4F]'>Copyright © 2022 by Ayeman. All Rights Reserved.</h1>
                </div>
                <div className="text-white bg-[#4F4F4F] flex gap-5 text-2xl">
             <h1 className='bg-[#4F4F4F] text-[#4F4F4F]'>.</h1>
            </div>
            </div>
      </>

  )
}

export default FigmaFooter