"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: { asset: { url: string } };
  description: string;
  available: boolean;
}

export default function ChefComponent() {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch chef data on component mount
  useEffect(() => {
    const fetchChefs = async () => {
      setIsLoading(true);
      try {
        // Fetch all chefs
        const chefQuery = `*[_type == "chef"]{
          _id,
          name,
          position,
          experience,
          specialty,
          image,
          description,
          available
        }`;
        const chefs = await client.fetch(chefQuery);
        setChefs(chefs);
      } catch (error) {
        console.error("Error fetching chefs:", error);
        setError("Failed to fetch chefs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChefs();
  }, []);

  if (isLoading) {
    return <div className="  bg-white flex justify-center items-center h-screen">Loading chefs...</div>;
  }

  if (error) {
    return <div className="  bg-white flex justify-center items-center h-screen">{error}</div>;
  }

  if (!chefs || chefs.length === 0) {
    return (
      <div className="  bg-white flex justify-center items-center h-screen">
        <h1 className=" bg-white ">Chef List</h1>
        <p className=" bg-white ">No chefs available. Please check the following:</p>
        <ul className=" bg-white ">
          <li className=" bg-white ">Is the Sanity client correctly configured?</li>
          <li className=" bg-white ">Does the dataset contain chef data?</li>
          <li className=" bg-white ">Is the GROQ query correct?</li>
          <li className=" bg-white ">Are there any errors in the terminal logs?</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="  bg-gray-50 min-h-screen py-8">
      <div className=" bg-white container mx-auto px-4">
        {/* Grid with 4 columns */}
        <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <div key={chef._id} className="  bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className=" bg-white relative h-[30rem] w-full">
                <Image
                  src={urlFor(chef.image).url()}
                  alt={chef.name}
                  fill
                  className=" bg-white object-cover"
                />
              </div>
              <div className=" bg-white p-4">
                <h2 className=" bg-white text-xl font-semibold mb-2">{chef.name}</h2>
                <p className=" bg-white text-gray-600">{chef.position}</p>
                <p className=" bg-white text-gray-600">{chef.specialty}</p>
                <p className=" bg-white text-gray-600">{chef.experience} years of experience</p>
                <p className=" bg-white text-gray-600">{chef.description}</p>
                <p className={`bg-white mt-2 ${chef.available ? "text-green-500" : "text-red-500"}`}>
                  {chef.available ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}