import FigmaCart from '@/components/figma_cart'
import FigmaChefs from '@/components/figma_chefs'
import FigmaHero from '@/components/figma_hero'
import FigmaProductDetails from '@/components/figma_productdetails'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black' >
      <FigmaHero/>
      <FigmaChefs/>
      <FigmaCart/>
      <FigmaProductDetails/>
    </div>
  )
}

export default page