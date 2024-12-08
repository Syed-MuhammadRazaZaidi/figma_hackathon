import Image from 'next/image'
import React from 'react'

const FigmaCart = () => {
  return (
    <div className='bg-white'>
        <section className="text-gray-600 body-font bg-white">
  <div className="container py-24 mx-auto bg-white">
    <div className="lg:w-2/3 w-full mx-auto overflow-auto bg-white">
      <table className="table-auto w-full text-left whitespace-no-wrap bg-white">
        <thead className='bg-white'>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-bold  text-gray-900 text-lg bg-white rounded-tl rounded-bl ">
              Product
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-bold  text-gray-900 text-lg bg-white ">
              Price
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-bold  text-gray-900 text-lg bg-white ">
              Quantity
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-bold  text-gray-900 text-lg bg-white ">
              Total
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-bold  text-gray-900 text-lg bg-white ">
              Remove
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-white rounded-tr rounded-br" />
          </tr>
        </thead>
        <tbody className='bg-white'>
          <tr className='bg-white'>
            <td className="px-4 py-3 bg-white flex">
            <Image src="/burger.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            <div className='bg-white ml-5'>
                <h1 className='bg-white text-lg font-bold'>Burger</h1>
                <Image src="/star.png"
                height={125} 
                width={125} 
                alt='bowl'
                className='bg-white'
            />
            </div>

            </td>
            <td className="px-4 py-3 bg-white">$35.00</td>
            <td className="px-4 py-3 bg-white">
                <button className='py-1 px-6 rounded-full border border-gray-200 flex items-end '>1 <p className='bg-white text-lg font-bold pl-10'>+</p></button>
            </td>
            <td className="px-4 py-3 bg-white text-lg text-gray-900">$221.00</td>
            <td className="w-10 text-center bg-white">
              X
            </td>
          </tr>
          <tr>
          <td className="px-4 py-3 bg-white flex">
            <Image src="/fresh.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            <div className='bg-white ml-5'>
                <h1 className='bg-white text-lg font-bold'>Fresh Lime</h1>
                <Image src="/star.png"
                height={125} 
                width={125} 
                alt='bowl'
                className='bg-white'
            />
            </div>

            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-white">$25.00</td>
            <td className="px-4 py-3 bg-white">
                <button className='py-1 px-6 rounded-full border border-gray-200 flex items-end '>1 <p className='bg-white text-lg font-bold pl-10'>+</p></button>
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-white text-lg text-gray-900">
            $521.00
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center text-yellow-400 bg-white">
              X
            </td>
          </tr>
          <tr>
          <td className="px-4 py-3 bg-white flex">
            <Image src="/pizza.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            <div className='bg-white ml-5'>
                <h1 className='bg-white text-lg font-bold'>Pizza</h1>
                <Image src="/star.png"
                height={125} 
                width={125} 
                alt='bowl'
                className='bg-white'
            />
            </div>

            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-white ">$15.00</td>
            <td className="px-4 py-3 bg-white">
                <button className='py-1 px-6 rounded-full border border-gray-200 flex items-end '>1 <p className='bg-white text-lg font-bold pl-10'>+</p></button>
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-white  text-lg text-gray-900">
            $421.00
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center bg-white">
              X
            </td>
          </tr>
          <tr>
          <td className="px-4 py-3 bg-white flex">
            <Image src="/muffin.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            <div className='bg-white ml-5'>
                <h1 className='bg-white text-lg font-bold'>Chocolate Muffin</h1>
                <Image src="/star.png"
                height={125} 
                width={125} 
                alt='bowl'
                className='bg-white'
            />
            </div>

            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 bg-white">
            $45.00
            </td>
            <td className="px-4 py-3 bg-white">
                <button className='py-1 px-6 rounded-full border border-gray-200 flex items-end '>1 <p className='bg-white text-lg font-bold pl-10'>+</p></button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 bg-white">
            $521.00
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center bg-white">
              X
            </td>
          </tr>
          <tr>
          <td className="px-4 py-3 bg-white flex">
            <Image src="/cheese.png"
            height={100} 
            width={100} 
            alt='bowl'
            />
            <div className='bg-white ml-5'>
                <h1 className='bg-white text-lg font-bold'>Cheese Butter</h1>
                <Image src="/star.png"
                height={125} 
                width={125} 
                alt='bowl'
                className='bg-white'
            />
            </div>

            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 bg-white">
            $15.00
            </td>
            <td className="px-4 py-3 bg-white">
                <button className='py-1 px-6 rounded-full border border-gray-200 flex items-end '>1 <p className='bg-white text-lg font-bold pl-10'>+</p></button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 bg-white">
            $325.00
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center bg-white">
              X
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</section>
    <div className='container py-24 mx-auto bg-white flex px-64 gap-10'>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto bg-white text-black">
    <h1 className=' bg-white text-gray-800 text-4xl font-bold mb-10'>Coupon Code</h1>
    <div className='border border-gray-200 '>
        <h1 className=' bg-white text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque diam pellentesque bibendum non</h1>
    </div>
    <div className='flex text-white bg-white mt-5'>
        <input className='bg-white text-white px-10 text-start py-5 w-[20rem] rounded-lg border border-gray-200' type="email" placeholder="Enter Here code" />
        <button className='flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-[6rem] rounded-lg text-xl text-[white]' type="submit">Apply</button>
        </div>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto bg-white text-black border border-gray-200 py-6 px-3">
    <h1 className=' bg-white text-gray-800 text-4xl font-bold mb-10'>Total Bill</h1>
    <div className='border border-gray-200 bg-white text-black'>
        <div className='bg-white text-gray-800 flex items-center justify-between'>
            <h1 className='bg-white text-gray-800 text-xl font-bold'>Cart Subtotal</h1>
            <h1 className='bg-white text-gray-800 text-xl font-bold'>$120.00</h1>
        </div>
        <div className='bg-white text-gray-800 flex items-center justify-between'>
            <h1 className='bg-white text-gray-400 mt-5'>Shipping Charge</h1>
            <h1 className='bg-white text-gray-400'>$00.00</h1>
        </div>
    </div>
    <div className='bg-white text-gray-800 flex items-center justify-between border-t-black'>
            <h1 className='bg-white text-gray-800 text-xl font-bold mt-5'>Total Amount</h1>
            <h1 className='bg-white text-gray-800 text-xl font-bold'>$205.00</h1>
        </div>  
        <div className='container mx-auto bg-white'>
        <button className='py-4 px-[9.99rem] text-white rounded-lg bg-[#FF9F0D] mt-10'>Proceed to Checkout</button>
        </div>
    </div>
    </div>
    </div>  
  )
}

export default FigmaCart