import React from 'react';
import Image from "next/image";

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu1.png' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu2.png' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu3.png' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu4.png' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu5.png' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu6.png' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu7.png' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu8.png' },
];

const MenuComponent = () => {
  return (
    <section className='bg-black px-2 sm:px-4 md:px-8 lg:px-[135px] text-white py-4 sm:py-8'>
      <div className="container mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 font-greatVibes text-[#FF9F0D]">Choose & Pick</h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6"><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>

        <div className="mb-4 sm:mb-6 overflow-x-auto">
          <ul className="flex flex-nowrap justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 min-w-max mx-auto px-4">
            {/* ... menu list items remain the same */}
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8'>
          <div className="w-full lg:w-auto flex justify-center">
            <Image 
              src={"/menu.png"}
              width={400} 
              height={300}
              alt='Menu Image'
              className="w-full max-w-[400px] h-auto object-cover rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 flex-grow w-full max-w-[800px]">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left rounded-lg overflow-hidden shadow-lg bg-black/50 h-full p-2">
                <div className="w-full sm:w-1/3 flex-shrink-0 flex items-center justify-center h-[100px] mb-2 sm:mb-0"> 
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={100} 
                    height={100} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full sm:w-2/3 p-2 sm:p-3 flex flex-col items-center sm:items-start">
                  <h1 className="text-sm sm:text-base font-semibold">{item.name}</h1>
                  <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-400 mb-1">{item.description}</p>
                  <h2 className="text-orange-400 font-bold text-sm sm:text-base">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;