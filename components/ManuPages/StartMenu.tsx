
import { menuItems } from '../constant/Manu';
import { Coffee } from 'lucide-react';
import Heading from '../Heading';
import Image from "next/image";

export default function StarterMenu() {
  return (
    <section className=" bg-white w-full mx-auto mt-[120px] px-4 sm:px-6 lg:px-8">
      <div className=" bg-white container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className=" bg-white w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image 
            src="/menu22.png" 
            alt="Starter dish" 
            width={448}
            height={626}
            className=" bg-white w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Menu Content */}
        <div className=" bg-white w-full lg:w-1/2 lg:pl-8">
          <div className=" bg-white flex flex-col mb-8">
            <Coffee className=" bg-white ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Starter Menu" />
          </div>
          <div className=" bg-white space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className=" bg-white border-b border-dashed border-gray-300 pb-6">
                <div className=" bg-white flex justify-between items-start mb-2">
                  <h3 className={`bg-white text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className=" bg-white text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className=" bg-white text-gray-600 mb-2">{item.description}</p>
                <p className=" bg-white text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}