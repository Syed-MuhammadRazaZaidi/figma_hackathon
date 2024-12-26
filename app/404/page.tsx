
import React from 'react'
import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
    <section className='bg-transparent w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='bg-transparent container mx-auto px-4'>
        <div className='bg-transparent flex flex-col items-center'>
          <h1 className='bg-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            404 Error
          </h1>
          <div className='bg-transparent text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='bg-transparent text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='bg-transparent text-white'>/</span>
            <Link href="/404" className='bg-transparent text-[#FF9F0D]'>
              404
            </Link>
          </div>
        </div>
      </div>
    </section>

    <div className=" min-h-screen bg-white">
      {/* Signin Form */}
      <section className=" bg-white py-16">
        <div className="  container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className=" bg-white text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form className="bg-white">
            <div className=" bg-white mb-4">
              <label className=" bg-white block mb-2 font-medium">Name</label>
              <input
                type="text"
                className=" bg-white w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className=" bg-white mb-4">
              <label className=" bg-white block mb-2 font-medium">Email</label>
              <input
                type="email"
                className=" bg-white w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className=" bg-white mb-4">
              <label className=" bg-white block mb-2 font-medium">Password</label>
              <input
                type="password"
                className=" bg-white w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className=" bg-white flex justify-self-start gap-2 items-center mb-4">
              <Input type="checkbox" className=" bg-white " />
              <span className=" bg-white text-nowrap">Remember me?</span>
            </div>
            <Button
              type="submit"
              className=" w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </Button>
            <p className=" bg-white text-center mt-4">
              <Link href="#" className=" bg-white text-yellow-500 hover:text-blue-500">Forgot password?</Link> or <Link href="/signup" className=" bg-white  hover:text-blue-500 text-yellow-500 hover:text-bue-500">Sign Up</Link>
            </p>
          </form>
          <div className=" bg-white text-center mt-8">
            <p className="bg-white">or</p>
            <Button className=" w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle className=" bg-white h-6 mr-2" />
              Sign in with Google
            </Button>
            <Button className=" w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className=" bg-white h-6 mr-2" />
              Sign in with Apple
            </Button>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default Hero