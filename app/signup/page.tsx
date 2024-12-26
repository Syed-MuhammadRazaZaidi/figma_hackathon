import Link from "next/link";
import Hero from "./SignupHero"
import React from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function SignUpPage() {
  return (
    <>
    <Hero />

      <div className=" min-h-screen bg-white">  
      {/* Signup Form */}
      <section className=" bg-white py-16">
        <div className=" container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className=" bg-white text-2xl font-bold mb-6 text-center">Sign Up</h3>
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
              <Input type="checkbox" className=" bg-white focus:ring-yellow-300" />
              <span className=" bg-white text-nowrap flex">Remember me?</span>
            </div>
            <button
              type="submit"
              className="  w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className=" bg-white text-center mt-4">
              <Link href="#" className=" bg-white  hover:text-blue-500 text-yellow-500">Forgot password?</Link> or
              <Link href="/login" className=" bg-white text-yellow-500 hover:text-blue-500"> Sign In</Link>
            </p>
          </form>
          <div className=" bg-white text-center mt-8">
            <p className="bg-white">or</p>
            <Button className="  w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <FcGoogle className=" bg-white h-6 mr-2" />
              Sign up with Google
            </Button>
            <Button className=" w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className=" bg-white h-6 mr-2" />
              Sign up with Apple
            </Button>
          </div>
        </div>
      </section>
    </div>
 </>
  );
}