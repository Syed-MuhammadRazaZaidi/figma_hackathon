"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  image: { asset: { url: string } };
  description: string;
  available: boolean;
}

interface Category {
  id: string;
  label: string;
}

export default function Home() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [latestProducts, setLatestProducts] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch all food items
        const foodQuery = `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          image,
          description,
          available
        }`;
        const foods = await client.fetch(foodQuery);
        setFoods(foods);

        // Fetch categories (you can fetch these from Sanity or use static data)
        const categories = [
          { id: 'sandwiches', label: 'Sandwiches' },
          { id: 'burger', label: 'Burger' },
          { id: 'chicken', label: 'Chicken Chup' },
          { id: 'drink', label: 'Drink' },
          { id: 'pizza', label: 'Pizza' },
          { id: 'nonveg', label: 'Non Veg' },
          { id: 'uncategorized', label: 'Uncategorized' }
        ];
        setCategories(categories);

        // Fetch latest products (e.g., the last 4 added items)
        const latestProducts = foods.slice(0, 4); // Use the first 4 items as latest products
        setLatestProducts(latestProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const StarRating = () => (
    <div className=" bg-white white-section bg-transparent flex items-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <svg key={i} className=" bg-white bg-transparent w-4 h-4" fill="#FF9F0D" viewBox="0 0 24 24">
          <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19.61-5.52 4.78 1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  );

  if (isLoading) {
    return <div className="  bg-white flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="  bg-white flex justify-center items-center h-screen">{error}</div>;
  }

  if (!foods || foods.length === 0) {
    return (
      <div className=" bg-white flex justify-center items-center h-screen">
        <h1 className="bg-white">Food Menu</h1>
        <p className="bg-white">No food items available. Please check the following:</p>
        <ul className="bg-white">
          <li className="bg-white">Is the Sanity client correctly configured?</li>
          <li className="bg-white">Does the dataset contain food items?</li>
          <li className="bg-white">Is the GROQ query correct?</li>
          <li className="bg-white">Are there any errors in the terminal logs?</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="  bg-gray-50 min-h-screen py-8">
      <div className=" bg-white container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className=" bg-white w-full lg:w-3/4">
          <div className=" bg-white flex flex-col sm:flex-row justify-between items-center mb-8 p-4 rounded-lg shadow-sm">
            <div className=" bg-white flex items-center gap-4 mb-4 sm:mb-0">
              <span className=" bg-white text-lg font-medium">Sort By:</span>
              <Select>
                <option className="bg-white">Newest</option>
                <option className="bg-white">Price: Low to High</option>
                <option className="bg-white">Price: High to Low</option>
              </Select>
            </div>
            <div className=" bg-white flex items-center gap-4">
              <span className=" bg-white text-lg font-medium">Show:</span>
              <Select>
                <option className="bg-white">12 Items</option>
                <option className="bg-white">24 Items</option>
                <option className="bg-white">36 Items</option>
              </Select>
            </div>
          </div>

          <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((food) => (
              <Link key={food._id} href={`/shop/${food.name}`} className=" bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                <div className=" bg-white relative h-64 w-full">
                  <Image
                    src={urlFor(food.image).url()}
                    alt={food.name}
                    fill
                    className=" bg-white object-cover"
                  />
                </div>
                <div className=" bg-white p-4">
                  <h3 className=" bg-white text-lg font-semibold mb-2 whitespace-nowrap">{food.name}</h3>
                  <p className=" bg-white text-gray-600">{food.description}</p>
                  {food.tags && (
                <div className=" bg-white mt-2">
                  <strong className="bg-white">Tags:</strong>
                  <ul className=" bg-white flex flex-wrap gap-2">
                    {food.tags.map((tag, index) => (
                      <li key={index} className="  bg-gray-200 px-2 py-1 rounded">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className={`mt-2  bg-white ${food.available ? "text-green-500" : "text-red-500"}`}>
                {food.available ? "Available" : "Not Available"}
              </p>
                  <div className=" bg-white flex items-center justify-between">
                    <div className=" bg-white flex items-center gap-2">
                      <span className=" bg-white text-[#FF9F0D] text-xl font-bold">${food.price}</span>
                      {food.originalPrice && (
                        <span className=" bg-white text-gray-400 line-through">${food.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className=" bg-white flex justify-center mt-12">
            <nav className=" bg-white flex items-center gap-2">
              <Button variant="outline" className=" bg-white p-2">
                <svg className=" bg-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
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
              <Button variant="outline" className=" bg-white p-2">
                <svg className=" bg-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>

        {/* Right Section */}
        <div className=" bg-white w-full lg:w-1/4 space-y-8">
          {/* Search */}
          <div className=" bg-white p-6 rounded-lg shadow-sm">
            <div className=" bg-white flex gap-2">
              <Input
                type="text"
                placeholder="Search Products..."
                className="  flex-grow bg-gray-50"
              />
              <Button className=" bg-[#FF9F0D] hover:bg-[#e68906] px-6">
                <svg className=" bg-white w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className=" bg-white p-6 rounded-lg shadow-sm">
            <h2 className=" bg-white text-xl font-bold mb-4">Categories</h2>
            <div className=" bg-white space-y-3">
              {categories.map(({ id, label }) => (
                <div key={id} className=" bg-white flex items-center gap-3">
                  <Input
                    type="checkbox"
                    id={id}
                    className=" bg-white w-4 h-4 text-[#FF] rounded"
                  />
                  <label htmlFor={id} className=" bg-white text-gray-700 hover:text-[#FF9F0pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className=" bg-white p-6 rounded-lg shadow-sm">
            <h2 className=" bg-white text-xl font-bold mb-4">Filter by Price</h2>
            <div className=" bg-white space-y-4">
              <Input
                type="range"
                min="0"
                max="8000"
                className=" bg-white w-full"
              />
              <div className=" bg-white flex justify-between text-sm text-gray-600">
                <span className="bg-white">$0</span>
                <span className="bg-white">$8000</span>
              </div>
              <Button className=" bg-white w[#FF9F0D] hover:bg-[#e68906]">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Latest Products */}
          <div className=" bg-white p-6 rounded-lg shadow-sm">
            <h2 className=" bg-white text-xl font-bold mb-4">Latest Products</h2>
            <div className=" bg-white space-y-4">
              {latestProducts.map((product) => (
                <div key={product._id} className=" bg-white flex gap-4 items-center">
                  <div className=" bg-white relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      fill
                      className=" bg-white object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className=" bg-white font-medium">{product.name}</h3>
                    <StarRating />
                    <p className=" bg-white text-[#FF9F0D] font-semibold">${product.price}</p>
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