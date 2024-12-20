import AbountUs from '@/components/aboutus'
import FigmaCart from '@/components/figma_cart'
import FigmaChefs from '@/components/figma_chefs'
import FigmaHero from '@/components/figma_hero'
import FigmaProductDetails from '@/components/figma_productdetails'
import FoodCategory from '@/components/FoodCategory'
import Clients from '@/components/clients'
import React from 'react'
import MenuComponent from '@/components/menu'
import OurChefs from '@/components/ourchefs'
import ActiveRestaurant from '@/components/ActiveRestaurant'
import ChooseFood from '@/components/Blogending'


const page = () => {
  return (
    <div className='bg-black' >
      <FigmaHero/>
      <AbountUs/>
      <FoodCategory/>
      <Clients/>
      <MenuComponent/>
      <OurChefs/>
      {/* <FigmaChefs/> */}
      <ActiveRestaurant/>
      <ChooseFood/>
      
    </div>
  )
}

export default page