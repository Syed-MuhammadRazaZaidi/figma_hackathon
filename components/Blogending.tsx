import React from "react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

function ChooseFood() {
    const posts = [
        {
            id: 1,
            date:"10 February 2022 ",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
            imageSrc: "/blog1.png",
        },
        {
            id: 2,
            date:"10 February 2022 ",
            title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A", 
            imageSrc: "/blog2.png",
        },
        {
            id: 3,
            date:"10 February 2022 ",
            title: "Curabitur rutrum velit ac congue malesuada",
            imageSrc: "/blog3.png",
        },
    ];
    return (
        <section className="bg-black px-4 sm:px-8 md:px-[135px] py-[50px]">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
                    Food Category
                </h1>
                <h1 className="text-[20px] sm:text-[35px] md:text-[50px] font-bold text-white">
                    <span className="text-[#FF9F0D]">La</span>test News & Blog
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-[59px]">
                {posts.map((post) => (
                    <div key={post.id} className="w-full mb-8 border border-white">
                        <div className="relative">
                            <Image
                                src={post.imageSrc}
                                alt={post.title}
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div className="p-4 sm:p-6">
                                <h2 className="text-[#FF9F0D] text-[14px] sm:text-[16px] font-normal mt-4">{post.date}</h2>
                                <h2 className="text-white text-[18px] sm:text-[24px] font-bold mt-3">{post.title}</h2>
                                <div className="text-white flex justify-between items-center mt-6">
                                    <h1 className="text-[14px] sm:text-[16px]">Learn More</h1>
                                    <div className="flex gap-2 sm:gap-[8px]">
                                        <AiOutlineLike className="text-[16px] sm:text-[20px]" />
                                        <RiMessage2Line className="text-[16px] sm:text-[20px]" />
                                        <FiShare2 className="text-[16px] sm:text-[20px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ChooseFood;