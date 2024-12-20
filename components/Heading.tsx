import React from 'react'

function Heading(props:{text: string}) {
    const text = props.text
  return (
    <>
    <div className='bg-white'>
        <h1 className='text-[48px] leading-[56px] bg-white text-[#333333] font-bold mb-[24px]'>{text}</h1>
    </div>
    </>
  )
}

export default Heading