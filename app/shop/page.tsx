import FigmaProductDetails from '@/components/figma_productdetails'
import Hero from "@/components/ShopPages/ShopHero"
import ShoppingCart from '@/components/ShopPages/ShopingCart'
import React from 'react'

const FigmaCart = () => {
  return (
    <>
    <Hero />
    <FigmaProductDetails/>
    <ShoppingCart />
    </>
  )
}

export default FigmaCart