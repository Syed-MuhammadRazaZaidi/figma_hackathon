import React from 'react';
import Image from 'next/image';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

function ShopProducts() {
  const images = Array.from({ length: 15 }, (_, i) => `/shop-detail/ShopProducts${i + 1}.png`);

  const categories = [
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'burger', label: 'Burger' },
    { id: 'chicken', label: 'Chicken Chup' }, 
    { id: 'drink', label: 'Drink' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'nonveg', label: 'Non Veg' },
    { id: 'uncategorized', label: 'Uncategorized' }
  ];

  const products = [
    { title: 'Fresh-Lime', price: 12.99 },
    { title: 'Chicken-Chup', price: 15.99 },
    { title: 'Sandwiches', price: 8.99 },
    { title: 'Cheese-Butter', price: 6.99 },
    { title: 'Pizza', price: 18.99 },
    { title: 'Drink', price: 4.99 },
    { title: 'Country-Burger', price: 13.99 },
    { title: 'Chicken-Chup', price: 15.99 },
    { title: 'Sandwiches', price: 8.99 },
    { title: 'Cheese-Butter', price: 6.99 },
    { title: 'Pizza', price: 18.99 },
    { title: 'Drink', price: 4.99 },
    { title: 'Country-Burger', price: 13.99 },
    { title: 'Burger', price: 11.99 },
    { title: 'Chocolate-Muffin', price: 5.99 }
  ];

  const StarRating = () => (
    <div className="white-section bg-transparent flex items-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <svg key={i} className=" bg-transparent w-4 h-4" fill="#FF9F0D" viewBox="0 0 24 24">
          <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19.61-5.52 4.78 1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="  bg-gray-50 min-h-screen py-8">
      <div className=" bg-transparent container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className=" bg-transparent w-full lg:w-3/4">
          <div className=" flex flex-col sm:flex-row justify-between items-center mb-8 bg-transparent p-4 rounded-lg shadow-sm">
            <div className=" bg-transparent flex items-center gap-4 mb-4 sm:mb-0">
              <span className=" bg-transparent text-lg font-medium">Sort By:</span>
              <Select>
                <option className='bg-transparent'>Newest</option>
                <option className='bg-transparent'>Price: Low to High</option>
                <option className='bg-transparent'>Price: High to Low</option>
              </Select>
            </div>
            <div className=" bg-transparent flex items-center gap-4">
              <span className=" bg-transparent text-lg font-medium">Show:</span>
              <Select>
                <option className='bg-transparent'>12 Items</option>
                <option className='bg-transparent'>24 Items</option>
                <option className='bg-transparent'>36 Items</option>
              </Select>
            </div>
          </div>

          <div className=" bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Link key={index} href={`/shop/${products[index].title}`} className=" bg-transparent rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                <div className=" bg-transparent relative h-64 w-full"> 
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    fill
                    className=" bg-transparent object-cover"
                  />
                </div>
                <div className=" bg-transparent p-4">
                  <h3 className=" bg-transparent text-lg font-semibold mb-2 whitespace-nowrap">{products[index].title}</h3>
                  <div className=" bg-transparent flex items-center justify-between">
                    <div className=" bg-transparent flex items-center gap-2">
                      <span className=" bg-transparent text-[#FF9F0D] text-xl font-bold">${products[index].price}</span>
                      <span className=" bg-transparent text-gray-400 line-through">${(products[index].price * 1.2).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className=" bg-transparent flex justify-center mt-12">
            <nav className=" bg-transparent flex items-center gap-2">
              <Button variant="outline" className=" bg-transparent p-2">
                <svg className=" bg-transparent w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                </svg>
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === 2 ? "default" : "outline"}
                  className={page === 2 ? "bg-[#FF9F0D]" : ""}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" className=" bg-transparent p-2">
                <svg className=" bg-transparent w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Button>
            </nav>
          </div>
        </div>

        {/* Right Section */}
        <div className=" bg-transparent w-full lg:w-1/4 space-y-8">
          {/* Search */}
          <div className="  bg-transparent p-6 rounded-lg shadow-sm">
            <div className=" bg-transparent flex gap-2">
              <Input
                type="text"
                placeholder="Search Products..."
                className="  flex-grow bg-gray-50"
              />
              <Button className="  bg-[#FF9F0D] hover:bg-[#e68906] px-6">
                <svg className=" bg-transparent w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="  bg-transparent p-6 rounded-lg shadow-sm">
            <h2 className=" bg-transparent text-xl font-bold mb-4">Categories</h2>
            <div className=" bg-transparent space-y-3">
              {categories.map(({ id, label }) => (
                <div key={id} className=" bg-transparent flex items-center gap-3">
                  <Input
                    type="checkbox"
                    id={id}
                    className=" bg-transparent w-4 h-4 text-[#FF] rounded"
                  />
                  <label htmlFor={id} className=" bg-transparent text-gray-700 hover:text-[#FF9F0pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="  bg-transparent p-6 rounded-lg shadow-sm">
            <h2 className=" bg-transparent text-xl font-bold mb-4">Filter by Price</h2>
            <div className=" bg-transparent space-y-4">
              <Input
                type="range"
                min="0"
                max="8000"
                className=" bg-transparent w-full"
              />
              <div className=" bg-transparent flex justify-between text-sm text-gray-600">
                <span className='bg-transparent'>$0</span>
                <span className='bg-transparent'>$8000</span>
              </div>
              <Button className=" bg-transparent w[#FF9F0D] hover:bg-[#e68906]">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Latest Products */}
          <div className="  bg-transparent p-6 rounded-lg shadow-sm">
            <h2 className=" bg-transparent text-xl font-bold mb-4">Latest Products</h2>
            <div className=" bg-transparent space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className=" bg-transparent flex gap-4 items-center">
                  <div className=" bg-transparent relative h-16 w-16 flex-shrink-0">
                    <Image
                      src="/shop-detail/latestProduct.png"
                      alt="Latest Product"
                      fill
                      className=" bg-transparent object-cover rounded"
                    />
                  </div>
                  <div className='bg-transparent'>
                    <h3 className=" bg-transparent font-medium">Premium Pizza</h3>
                    <StarRating />
                    <p className=" bg-transparent text-[#FF9F0D] font-semibold">$45.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProducts;