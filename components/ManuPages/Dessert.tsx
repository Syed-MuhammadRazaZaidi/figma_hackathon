
import { menuItems } from '../constant/Desserts'
import { Coffee } from 'lucide-react'
import Heading from '../Heading'
import Image from "next/image"

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4 bg-white">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px] bg-white">
        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0 bg-transparent bg-white">
          <Image 
            src="/dessert.png" 
            alt="Dessert dish" 
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg  bg-white"
          />
        </div>

        {/* Menu Items Section */}
        <div className="md:w-1/2 md:pl-8  bg-white">
          <div className="flex items-center mb-6 bg-white">
            <Coffee className="text-[#FF9F0D]  bg-white" size={24} />
            <Heading text="Dessert" />
          </div>

          <div className="space-y-8  bg-white">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6 bg-white">
                <div className="flex justify-between items-start mb-2 bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 bg-white">
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]  bg-white">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2  bg-white">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500  bg-white">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}