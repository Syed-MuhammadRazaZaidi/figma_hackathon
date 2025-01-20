"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DOMPurify from "dompurify";
import validator from "validator";

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
  _createdAt: string; // Add _createdAt for sorting by newest
}

interface Category {
  id: string;
  label: string;
}

// SearchInput Component
const SearchInput = memo(({ searchQuery, onSearchInput }: { searchQuery: string; onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input after every render
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchQuery]);

  return (
    <Input
      type="text"
      placeholder="Search Products..."
      value={searchQuery}
      onChange={onSearchInput}
      className=" bg-white flex-grow bg-gray-50"
      ref={inputRef} // Attach the ref to the input
    />
  );
});

// Add displayName to SearchInput
SearchInput.displayName = "SearchInput";

export default function Home() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [latestProducts, setLatestProducts] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default items per page
  const [minPrice, setMinPrice] = useState(0); // State for minimum price
  const [maxPrice, setMaxPrice] = useState(100); // State for maximum price
  const [sortBy, setSortBy] = useState(""); // State for sorting
  const [sortOptions, setSortOptions] = useState([
    { value: "newest", label: "Newest" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "priceHighToLow", label: "Price: High to Low" },
  ]); // State for sorting options

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
          available,
          _createdAt
        }`;
        const foods = await client.fetch(foodQuery);
        setFoods(foods);

        // Fetch categories (you can fetch these from Sanity or use static data)
        const categories = [
          { id: "sandwiches", label: "Sandwiches" },
          { id: "burger", label: "Burger" },
          { id: "chicken", label: "Chicken Chup" },
          { id: "drink", label: "Drink" },
          { id: "pizza", label: "Pizza" },
          { id: "nonveg", label: "Non Veg" },
          { id: "dessert", label: "Dessert" },
          { id: "uncategorized", label: "Uncategorized" },
        ];
        setCategories(categories);

        // Fetch latest products (e.g., the last 4 added items)
        const latestProducts = foods.slice(0, 4);
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

  // Handle category selection
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId) // Uncheck
        : [...prev, categoryId] // Check
    );
  }, []);

  // Handle search input
  const handleSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput === "" || validator.isAlphanumeric(sanitizedInput.replace(/\s/g, ""))) {
      setSearchQuery(sanitizedInput);
    } else {
      console.error("Invalid input: Only alphanumeric characters and spaces are allowed.");
    }
  }, []);

  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinPrice(value);
  };

  // Handle items per page change
  const handleItemsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value; // This is a string
    setItemsPerPage(Number(value)); // Convert to number
    setCurrentPage(1); // Reset to the first page
  }, []);

  // Filter and sort products
  const filteredFoods = foods
    .filter((food) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(food.category)
        : true
    )
    .filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (food.tags && food.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .filter((food) => food.price >= minPrice && food.price <= maxPrice) // Filter by price range
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(); // Sort by newest
      } else if (sortBy === "priceLowToHigh") {
        return a.price - b.price; // Sort by price: low to high
      } else if (sortBy === "priceHighToLow") {
        return b.price - a.price; // Sort by price: high to low
      }
      return 0;
    });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Get related products (for demonstration, we use the latest products)
  const relatedProducts = selectedCategories.length > 0
    ? foods.filter((food) => selectedCategories.includes(food.category)).slice(0, 4)
    : latestProducts;

  // StarRating Component
  const StarRating = memo(() => (
    <div className=" bg-white flex items-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <svg key={i} className=" bg-white w-4 h-4" fill="#FF9F0D" viewBox="0 0 24 24">
          <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19.61-5.52 4.78 1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  ));

  // Add displayName to StarRating
  StarRating.displayName = "StarRating";

  // ProductCard Component
  const ProductCard = memo(({ food }: { food: FoodItem }) => (
    <Link href={`/shop/${food.name}`} className=" bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className=" bg-white relative h-64 w-full">
        <Image
          src={urlFor(food.image).url()}
          alt={food.name}
          fill
          className=" bg-white object-cover"
        />
      </div>
      <div className=" bg-white p-4">
        <h3 className=" bg-white text-lg font-semibold mb-2 whitespace-nowrap">
          {DOMPurify.sanitize(food.name)}
        </h3>
        <p className=" bg-white text-gray-600">{food.description}</p>
        {food.tags && (
          <div className=" bg-white mt-2">
            <strong className="bg-white">Tags:</strong>
            <ul className=" bg-white flex flex-wrap gap-2">
              {food.tags.map((tag, index) => (
                <li key={index} className="  bg-gray-200 px-2 py-1 rounded">
                  {DOMPurify.sanitize(tag)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className={`mt-2 bg-white ${food.available ? "text-green-500" : "text-red-500"}`}>
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
  ));

  // Add displayName to ProductCard
  ProductCard.displayName = "ProductCard";

  // Pagination Component
  const Pagination = memo(() => (
    <nav className=" bg-white flex items-center gap-2">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg className=" bg-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          className={page === currentPage ? "bg-[#FF9F0D]" : ""}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg className=" bg-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </Button>
    </nav>
  ));

  // Add displayName to Pagination
  Pagination.displayName = "Pagination";

  // Filters Component
  const Filters = memo(() => {
    return (
      <div className=" bg-white space-y-8">
        {/* Search */}
        <div className=" bg-white p-6 rounded-lg shadow-sm">
          <div className=" bg-white flex gap-2">
            <SearchInput searchQuery={searchQuery} onSearchInput={handleSearchInput} />
            <Button className="  bg-[#FF9F0D] hover:bg-[#e68906] px-6">
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
                  checked={selectedCategories.includes(id)}
                  onChange={() => handleCategoryChange(id)}
                  className=" bg-white w-4 h-4 text-[#FF] rounded"
                />
                <label htmlFor={id} className=" bg-white text-gray-700 hover:text-[#FF9F0D] cursor-pointer">
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
              max="100"
              value={minPrice}
              onChange={handlePriceRangeChange}
              className=" bg-white w-full"
            />
            <div className=" bg-white flex justify-between text-sm text-gray-600">
              <span className="bg-white">${minPrice}</span>
              <span className="bg-white">${maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div className=" bg-white p-6 rounded-lg shadow-sm">
          <h2 className=" bg-white text-xl font-bold mb-4">Sort By</h2>
          <div className=" bg-white space-y-3">
            {sortOptions.map((option) => (
              <div key={option.value} className=" bg-white flex items-center gap-3">
                <Input
                  type="checkbox"
                  id={option.value}
                  checked={sortBy === option.value}
                  onChange={() => setSortBy(option.value)}
                  className=" bg-white w-4 h-4 text-[#FF] rounded"
                />
                <label htmlFor={option.value} className=" bg-white text-gray-700 hover:text-[#FF9F0D] cursor-pointer">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  // Add displayName to Filters
  Filters.displayName = "Filters";

  if (isLoading) {
    return <div className=" bg-white flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className=" bg-white flex justify-center items-center h-screen">{error}</div>;
  }

  if (!foods || foods.length === 0) {
    return (
      <div className=" bg-white flex justify-center items-center h-screen">
        <h1>Food Menu</h1>
        <p>No food items available. Please check the following:</p>
        <ul>
          <li>Is the Sanity client correctly configured?</li>
          <li>Does the dataset contain food items?</li>
          <li>Is the GROQ query correct?</li>
          <li>Are there any errors in the terminal logs?</li>
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
              <span className=" bg-white text-lg font-medium">Show:</span>
              <select
                value={itemsPerPage.toString()}
                onChange={handleItemsPerPageChange}
                className=" bg-white p-2 border border-gray-300 rounded"
              >
                <option value="6">6 Items</option>
                <option value="12">12 Items</option>
                <option value="24">24 Items</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((food) => (
              <ProductCard key={food._id} food={food} />
            ))}
          </div>

          {/* Pagination */}
          <div className=" bg-white flex justify-center mt-12">
            <Pagination />
          </div>
        </div>

        {/* Right Section */}
        <div className=" bg-white w-full lg:w-1/4 space-y-8">
          <Filters />

          {/* Related Products */}
          <div className=" bg-white p-6 rounded-lg shadow-sm">
            <h2 className=" bg-white text-xl font-bold mb-4">Related Products</h2>
            <div className=" bg-white space-y-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((product) => (
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
                ))
              ) : (
                <p className=" bg-white text-gray-600">No related products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}