import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const FigmaNavbar = () => {
  return (
    <div className='bg-black mt-10'>
        <nav className='container mx-auto bg-black'>
          <div className='flex items-center justify-center text-2xl'>
          <h1 className='font-bold text-[#FF9F0D] '>Food</h1>
          <h1 className='font-bold text-white'>tuck</h1>
          </div>
        </nav>
          <div className='text-gray-300 bg-black container mx-auto h-full flex items-center justify-between '>
          <div className='flex items-center gap-10'>
            <h1>Home</h1>
            <h1>Menu</h1>
            <h1>Blog</h1>
            <h1>Pages</h1>
            <h1>About</h1>
            <h1>Shop</h1>
            <h1>Contact</h1>
          </div >
            <div className='flex items-center gap-2 px-56'>
            <div className="flex items-center justify-end bg-black border-2 border-[#FF9F0D] rounded-3xl py-2 px-3">
            <input className="bg-black text-sm px-3" type="text" name="" id="" placeholder="Search..." />
            <IoSearchOutline className=" text-white text-2xl"/>
          </div>
            <div><HiOutlineShoppingBag className='text-xl text-whit'/></div>
          </div>
           </div>
           <div className='text-gray-300 bg-black container mx-auto h-full px-4'>
           <button className='p-[0.25rem] rounded-xl bg-[#FF9F0D]'></button>
           </div>
    </div>
  )
}

export default FigmaNavbar  