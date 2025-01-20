"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  imageSrc: { asset: { url: string } };
  price: number;
  category: string;
}

const getProduct = async (slug: string): Promise<Product> => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "${slug.toLowerCase()}"][0]{
      _id,
      title,
      slug,
      description,
      imageSrc,
      price,
      category
    }`
  );
  return product as Product;
};

const getRelatedProducts = async (currentProduct: Product): Promise<Product[]> => {
  // Fetch all products excluding the current product
  const allProducts = await client.fetch(
    `*[_type == "product" && _id != "${currentProduct._id}"]{
      _id,
      title,
      slug,
      description,
      imageSrc,
      price,
      category
    }`
  );

  // Shuffle the array randomly
  const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

  // Limit to 4 products
  return shuffledProducts.slice(0, 4);
};

export default function ProductsPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProductAndRelated = async () => {
      setIsLoading(true);
      try {
        if (typeof params.slug === "string") {
          // Fetch the current product
          const productData = await getProduct(params.slug);
          console.log("Current Product:", productData); // Debugging
          setProduct(productData);

          // Fetch related products
          const relatedProductsData = await getRelatedProducts(productData);
          console.log("Related Products Data:", relatedProductsData); // Debugging
          setRelatedProducts(relatedProductsData);
        } else {
          console.error("Slug is not a string:", params.slug);
        }
      } catch (error) {
        console.error("Error fetching product or related products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchProductAndRelated();
    }
  }, [params.slug]); // Re-fetch when params.slug changes

  if (isLoading) {
    return <div className="bg-white flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="bg-white flex justify-center items-center h-screen">
        <p>No product found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product._id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: urlFor(product.imageSrc.asset).url(),
      });
      alert(`${product.title} has been added to the cart!`);
    }
  };

  return (
    <div className="py-24 mx-auto bg-white w-full">
      {/* Product Details Section */}
      <div className="w-full px-4 gap-10 lg:px-72 sm:gap-10 py-24 mx-auto bg-white flex flex-col lg:flex-row justify-center">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white justify-center">
          <Image
            src={urlFor(product.imageSrc.asset).url()}
            width={500}
            height={500}
            alt={product.title}
            className="bg-white w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-white text-center lg:text-left">
          <h1 className="bg-white text-gray-900 text-6xl title-font font-bold mb-5">
            {product.title}
          </h1>
          <p className="bg-white leading-relaxed mt-10">{product.description}</p>
          <p className="bg-white title-font text-3xl text-gray-600 font-bold mt-10">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-[10rem] text-xl text-gray-100 mb-5 py-3 mt-5"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-white container px-5 mx-auto">
        <div>
          <h1 className="bg-white text-3xl font-bold text-gray-800 mb-5">
            Related Products
          </h1>
        </div>
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct._id}
                href={`/shop/${relatedProduct.slug.current}`}
                className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={urlFor(relatedProduct.imageSrc.asset).url()}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 whitespace-nowrap">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-gray-600">{relatedProduct.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9F0D] text-xl font-bold">
                        ${relatedProduct.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="bg-white text-gray-600">No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}