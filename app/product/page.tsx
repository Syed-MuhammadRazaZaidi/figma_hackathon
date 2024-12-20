import Image from 'next/image'
import React from 'react'

const FigmaProductDetails = () => {
  return (
    <div className='bg-white'>
        <section className="text-gray-600 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto bg-white">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/nost.png"
        height={100} 
        width={100} 

      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-white">
      <button className='flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-[6rem] rounded-xl text-md text-gray-100 mb-5 py-1'>In stock</button>
        <h1 className="text-gray-900 text-5xl title-font bg-white font-bold mb-5">
        Yummy Chicken Chup
        </h1>
        
        <p className="leading-relaxed bg-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex bg-white mt-10">
          <span className="title-font text-3xl text-gray-600 bg-white font-bold">
            $54.00
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<div className='px-40 container py-24 mx-auto bg-white'>
<div className='flex items-center gap-4 bg-white'>
<button className='flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-[10rem] text-xl text-gray-100 mb-5 py-3'>Description</button>
 <h1 className='bg-white text-gray-800'>
 Reviews (24)
 </h1>
</div>
<div className='bg-white text-gray-400'>
    <h1 className='bg-white'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</h1>
    <h1 className='bg-white mt-5'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</h1>
 </div>
 <div className='bg-white mt-5'>
        <h1 className='bg-white text-xl text-gray-800 mb-5'>Key Benefits</h1>
        <ul className='list-disc ml-6'>
            <li className='bg-white text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bg-white text-gray-400'>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li className='bg-white text-gray-400'>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li className='bg-white text-gray-400'>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li className='bg-white text-gray-400'>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
 </div>
    </div>
    <div className=' container px-5 mx-auto bg-white'>
    <div className='bg-white'>
    <h1 className='bg-white px-32 text-3xl font-bold text-gray-800 mb-5'>Similar Products</h1>
 </div>
    <div className="px-32 flex flex-wrap -m-4 bg-white">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-white mb-10">
        <a className="block relative rounded overflow-hidden bg-white">
          <Image
            height={500}
            width={500}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/p1.png"
          />
        </a >
        <div className="mt-4 bg-white">
          <h3 className="text-black  title-font mb-1 bg-white text-lg font-bold">
          Fresh Lime
          </h3>
          <p className="mt-1 text-yellow-500 text-xl bg-white">$38.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-white">
        <a className="block relative rounded overflow-hidden bg-white">
          <Image
            height={500}
            width={500}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/p2.png"
          />
        </a>
        <div className="mt-4 bg-white">
          <h3 className=" text-lg font-bold  title-font mb-1 bg-white text-black">
          Chocolate Muffin
          </h3>
          <p className="mt-1 text-yellow-500 text-xl bg-white">$28.00
         </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-white">
        <a className="block relative rounded overflow-hidden bg-white">
          <Image
            height={500}
            width={500}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/p3.png"
          />
        </a>
        <div className="mt-4 bg-white">
          <h3 className="text-black text-lg font-bold  title-font mb-1 bg-white">
          Burger
          </h3>
          <p className="mt-1 text-yellow-500 text-xl bg-white">$21.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-white">
        <a className="block relative rounded overflow-hidden bg-white">
          <Image
            height={500}
            width={500}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block "
            src="/p4.png"
          />
        </a>
        <div className="mt-4 bg-white">
          <h3 className="text-black title-font mb-1 bg-white text-lg font-bold">
          Fresh Lime
          </h3>
          <p className="mt-1 text-yellow-500 text-xl bg-white">$38.00</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default FigmaProductDetails