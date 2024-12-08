import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 items-center mt-10 gap-5 h-full w-full bg-white'>
        <h1 className='bg-white text-black text-center text-3xl font-bold'>{params.slug} page is not available!</h1>
        </div>
    </div>
  )
}

export default page