import { Coffee } from 'lucide-react'
import Heading from '../Heading'
import Image from 'next/image'
import { DrinksItem } from '../constant/Drinks'

export default function Drink() {
  return (
    <section className="container bg-white bg-whitebg-whitew-full mx-auto mt-[80px] sm:mt-[120px] px-4 ">
      <div className=" bg-white bg-whitebg-whitecontainer mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        
        {/* Drink Menu Section */}
        <div className=" bg-white bg-whitebg-whitemd:w-1/2 md:pl-8">
          <div className=" bg-white bg-whitebg-whiteflex items-center mb-6">
            <Coffee className=" bg-white bg-whitebg-whitetext-[#FF9F0D]" size={24} />
            <Heading text="Drinks"/>
          </div>

          <div className=" bg-white bg-whitebg-whitespace-y-8">
            {DrinksItem.map((item, index) => (
              <div key={index} className=" bg-white bg-whitebg-whiteborder-b border-dashed border-gray-300 pb-6">
                <div className=" bg-white bg-whitebg-whiteflex justify-between items-start mb-2">
                  <h3 className={`bg-white text-lg sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className=" bg-white bg-whitebg-whitetext-lg sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className=" bg-white bg-whitebg-whitetext-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                <p className=" bg-white bg-whitebg-whitetext-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className=" bg-white bg-whitebg-whitew-full md:w-[448px] mb-6 md:mb-0">
          <Image
            src="/drinks.png"
            alt="Drinks image"
            width={448}
            height={626}
            className=" bg-white bg-whitebg-whitew-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}