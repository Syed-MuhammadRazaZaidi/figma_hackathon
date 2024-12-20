import FigmaProductDetails from '@/components/figma_productdetails'
import Image from 'next/image'
import React from 'react'

const FigmaCart = () => {
  return (
    <>
    <FigmaProductDetails/>
    <div className='bg-white'>
        <section className="text-gray-600 body-font bg-white">
  <div className="container px-4 py-12 sm:py-24 mx-auto bg-white md:px-16 lg:px-32">
    <div className="w-full mx-auto overflow-auto bg-white">
      <div className="hidden md:block">
        <table className="table-auto w-full text-left whitespace-no-wrap bg-white">
          <thead className='bg-white'>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm md:text-lg bg-white rounded-tl rounded-bl">
                Product
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm md:text-lg bg-white">
                Price
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm md:text-lg bg-white">
                Quantity  
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm md:text-lg bg-white">
                Total
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm md:text-lg bg-white">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <tr className='bg-white'>
              <td className="px-4 py-3 bg-white flex flex-col sm:flex-row items-center">
                <Image src="/burger.png"
                  height={80}
                  width={80}
                  alt='bowl'
                  className="bg-white object-contain"
                />
                <div className='bg-white ml-0 sm:ml-5 text-center sm:text-left mt-2 sm:mt-0'>
                  <h1 className='bg-white text-base sm:text-lg font-bold'>Burger</h1>
                  <Image src="/star.png"
                    height={100}
                    width={100} 
                    alt='rating'
                    className='bg-white mx-auto sm:mx-0'
                  />
                </div>
              </td>
              <td className="px-4 py-3 bg-white">$35.00</td>
              <td className="px-4 py-3 bg-white">
                <button className='py-1 px-4 sm:px-6 rounded-full border border-gray-200 flex items-center justify-between'>
                  <span>1</span>
                  <span className='bg-white text-lg font-bold pl-4 sm:pl-10'>+</span>
                </button>
              </td>
              <td className="px-4 py-3 bg-white text-base sm:text-lg text-gray-900">$221.00</td>
              <td className="w-10 text-center bg-white">X</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white md:hidden space-y-4">
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex items-center space-x-4">
            <Image src="/burger.png" height={60} width={60} alt='bowl' className="object-contain"/>
            <div>
              <h2 className="bg-white font-bold">Burger</h2>
              <p className="bg-white text-sm text-gray-600">$35.00</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className='py-1 px-4 rounded-full border border-gray-200 flex items-center space-x-4'>
              <span>1</span>
              <span className='font-bold'>+</span>
            </button>
            <p className="font-bold">$221.00</p>
            <button className="text-red-500">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <div className='container py-12 sm:py-24 mx-auto bg-white px-4 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-10'>
      <div className="w-full lg:w-2/3 mx-auto bg-white text-black">
        <h1 className='bg-white text-gray-800 text-2xl sm:text-4xl font-bold mb-6 sm:mb-10'>Coupon Code</h1>
        <div className='border border-gray-200 p-4'>
          <h1 className='bg-white text-gray-400 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 mt-5'>
          <input className='bg-white text-black px-4 sm:px-10 py-3 sm:py-5 w-full sm:w-[20rem] rounded-lg border border-gray-200' type="email" placeholder="Enter Here code" />
          <button className='flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-full sm:w-[6rem] py-3 rounded-lg text-xl text-white'>Apply</button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 mx-auto bg-white text-black border border-gray-200 p-4 sm:p-6">
        <h1 className='bg-white text-gray-800 text-2xl sm:text-4xl font-bold mb-6 sm:mb-10'>Total Bill</h1>
        <div className='border border-gray-200 bg-white text-black p-4'>
          <div className='bg-white text-gray-800 flex items-center justify-between'>
            <h1 className='bg-white text-gray-800 text-lg sm:text-xl font-bold'>Cart Subtotal</h1>
            <h1 className='bg-white text-gray-800 text-lg sm:text-xl font-bold'>$120.00</h1>
          </div>
          <div className='bg-white text-gray-800 flex items-center justify-between mt-4'>
            <h1 className='bg-white text-gray-400'>Shipping Charge</h1>
            <h1 className='bg-white text-gray-400'>$00.00</h1>
          </div>
        </div>
        <div className='bg-white text-gray-800 flex items-center justify-between mt-5'>
          <h1 className='bg-white text-gray-800 text-lg sm:text-xl font-bold'>Total Amount</h1>
          <h1 className='bg-white text-gray-800 text-lg sm:text-xl font-bold'>$205.00</h1>
        </div>
        <div className='container mx-auto bg-white mt-6 sm:mt-10'>
          <button className='w-full py-3 sm:py-4 text-white rounded-lg bg-[#FF9F0D]'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default FigmaCart