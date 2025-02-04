import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { User } from 'lucide-react';

const FigmaNavbar = () => {
  return (
    <div className='bg-black py-10'>
      <nav className='container mx-auto bg-black px-4'>
        <div className='hidden lg:flex justify-center py-4'>
          <div className='flex items-center text-2xl'>
            <h1 className='font-bold text-[#FF9F0D]'>Food</h1>
            <h1 className='font-bold text-white'>tuck</h1>
          </div>
        </div>
        <div className='flex lg:hidden items-center justify-between py-4'>
          <div className='flex items-center gap-4'>
            <div className="order-first bg-transparent">
              <Sheet>
                <SheetTrigger>
                  <HiMenuAlt3 className="bg-transparent text-orange-500 text-[34px] cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="bg-transparent flex flex-col gap-4 mt-8">
                    <Link className='bg-transparent' href={"/"}>Home</Link>
                    <Link className='bg-transparent' href={"/menu"}>Menu</Link>
                    <Link className='bg-transparent' href={"/blog"}>Blog</Link>
                    <Link className='bg-transparent' href={"/pages"}>Pages</Link>
                    <Link className='bg-transparent' href={"/about"}>About</Link>
                    <Link className='bg-transparent' href={"/shop"}>Shop</Link>
                    <Link className='bg-transparent' href={"/contact"}>Contact</Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>


            <div className='flex items-center text-2xl lg:hidden'>
              <h1 className='font-bold text-[#FF9F0D]'>Food</h1>
              <h1 className='font-bold text-white'>tuck</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <IoSearchOutline size={24} className="text-white text-2xl hover:text-[#FF9F0D] transition-colors"/>
            <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
            <HiOutlineShoppingBag size={24} className='text-xl text-white hover:text-[#FF9F0D] transition-colors '/>
            </Link>
            <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
              <User size={24} />
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='text-gray-300 hidden lg:flex items-center justify-between pb-4'>
          <div className='flex items-center gap-10'>
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/pages"}>Pages</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className='flex items-center gap-4'>
            <div className="flex items-center justify-end bg-black border-2 border-[#FF9F0D] rounded-3xl py-2 px-3">
              <input className="bg-black text-sm px-3 w-full" type="text" placeholder="Search..." />
              <IoSearchOutline className="text-white text-2xl"/>
            </div>
            <div className='flex gap-2'>
            <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
            <HiOutlineShoppingBag size={24} className='text-xl text-white  '/>
            </Link>
            <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
              <User size={24} />
            </Link>
            </div>
          </div>
        </div>
        
        <div className='text-gray-300 pb-4'>
          <button className='p-[0.25rem] rounded-xl bg-[#FF9F0D]'></button>
        </div>
      </nav>
    </div>
  )
}

export default FigmaNavbar