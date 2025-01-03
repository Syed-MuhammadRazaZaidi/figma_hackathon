"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  imageSrc: { asset: { url: string } };
  price: number;
}

const getProduct = async (slug: string): Promise<Product> => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "${slug.toLowerCase()}"][0]`
  );
  return product as Product;
};

export default function ProductsPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        if (typeof params.slug === "string") {
          const productData = await getProduct(params.slug);
          setProduct(productData);
        } else {
          console.error("Slug is not a string:", params.slug);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  if (isLoading) {
    return <div className="bg-white flex justify-center items-center h-screen">Loading...</div>;
  }
  if (!product) {
    return <div className="bg-white flex justify-center items-center h-screen">No product found.</div>;
  }

  return (
    <div className="py-24 mx-auto bg-white w-full">
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
        </div>
      </div>
      <div className="bg-white container lg:py-24 mx-auto">
        <div className="bg-white flex items-center gap-4">
          <button className="flex items-center justify-center border-2 border-white bg-[#FF9F0D] w-[10rem] text-xl text-gray-100 mb-5 py-3">
            Description
          </button>
          <h1 className="bg-white text-gray-800">Reviews (24)</h1>
        </div>
        <div className="bg-white text-gray-400">
          <h1 className="bg-white">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
            Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </h1>
          <h1 className="bg-white mt-5">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </h1>
        </div>
        <div className="bg-white mt-5">
          <h1 className="bg-white text-xl text-gray-800 mb-5">Key Benefits</h1>
          <ul className="bg-white list-disc ml-6">
            <li className="bg-white text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="bg-white text-gray-400">
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className="bg-white text-gray-400">
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li className="bg-white text-gray-400">
              Etiam nec massa et lectus faucibus ornare congue in nunc.
            </li>
            <li className="bg-white text-gray-400">
              Mauris eget diam magna, in blandit turpis.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white container px-5 mx-auto">
        <div>
          <h1 className="bg-white text-3xl font-bold text-gray-800 mb-5">
            Similar Products
          </h1>
        </div>
        <div className="bg-white flex flex-wrap -m-4">
          <div className="bg-white lg:w-1/4 md:w-1/2 p-4 w-full mb-10">
            <a className="bg-white block relative rounded overflow-hidden">
              <Image
                height={500}
                width={1000}
                alt="ecommerce"
                className="bg-white object-cover object-center w-full h-auto block"
                src="/p1.png"
              />
            </a>
            <div className="bg-white mt-4">
              <h3 className="bg-white text-black title-font mb-1 text-lg font-bold">
                Fresh Lime
              </h3>
              <p className="bg-white mt-1 text-yellow-500 text-xl">$38.00</p>
            </div>
          </div>
          <div className="bg-white lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="bg-white block relative rounded overflow-hidden">
              <Image
                height={500}
                width={500}
                alt="ecommerce"
                className="bg-white object-cover object-center w-full h-auto block"
                src="/p2.png"
              />
            </a>
            <div className="bg-white mt-4">
              <h3 className="bg-white text-lg font-bold title-font mb-1 text-black">
                Chocolate Muffin
              </h3>
              <p className="bg-white mt-1 text-yellow-500 text-xl">$28.00</p>
            </div>
          </div>
          <div className="bg-white lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="bg-white block relative rounded overflow-hidden">
              <Image
                height={500}
                width={500}
                alt="ecommerce"
                className="bg-white object-cover object-center w-full h-auto block"
                src="/p3.png"
              />
            </a>
            <div className="bg-white mt-4">
              <h3 className="bg-white text-black text-lg font-bold title-font mb-1">
                Burger
              </h3>
              <p className="bg-white mt-1 text-yellow-500 text-xl">$21.00</p>
            </div>
          </div>
          <div className="bg-white lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="bg-white block relative rounded overflow-hidden">
              <Image
                height={500}
                width={500}
                alt="ecommerce"
                className="bg-white object-cover object-center w-full h-auto block"
                src="/p4.png"
              />
            </a>
            <div className="bg-white mt-4">
              <h3 className="bg-white text-black title-font mb-1 text-lg font-bold">
                Fresh Lime
              </h3>
              <p className="bg-white mt-1 text-yellow-500 text-xl">$38.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}