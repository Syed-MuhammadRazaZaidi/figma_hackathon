import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="bg-white text-white body-font">
        <div className="bg-white container mx-auto flex px-5 py-24 flex-col md:flex-row items-center justify-center">
          <div className="bg-white flex flex-col md:flex-row items-center md:space-x-4 mt-2 lg:p-2">
            <Image
              className="bg-white object-cover object-center w-336px h-536px radius-6px"
              alt="hero"
              src="/aboutus.png"
              width={309}
              height={536}
            />
          </div>
          {/* Right Images */}
          <div className="bg-white flex flex-col space-y-2 mt-2">
            <Image
              className="bg-white object-cover object-center w-309px h-271px radius-6px"
              alt="image2"
              src="/about4.png"
              width={309}
              height={271}
            />
            {/* Bottom Image */}
            <Image
              className="bg-white object-cover object-center w-309px h-382px radius-6px"
              alt="image3"
              src="/about3.png"
              width={309}
              height={382}
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="bg-white lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="bg-white text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="bg-white text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="bg-white mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="bg-white flex justify-center">
              <button className=" inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="bg-white ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="bg-white mr-2 block" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white text-white body-font">
        <div className="bg-white container mx-auto flex px-5 py-24 items-center justify-center flex-col w-full sm:w-[579px] text-center">
          <h1 className="bg-white text-black text-3xl font-bold mt-3">
            Why Choose Us
          </h1>
          <p className="bg-white text-black mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="bg-white mb-10 object-cover object-center w-full lg:w-[1320px] sm:w-[380px] h-auto mt-10"
            alt="hero"
            src="/about.png"
            width={380}
            height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="bg-white text-white body-font">
        <div className="bg-white container px-3 py-20 mx-auto">
          <div className="bg-white flex flex-wrap -m-4">
            <div className="bg-white p-4 md:w-1/3">
              <div className="bg-white h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden">
                <Image
                  className="bg-white"
                  src="/Student.png"
                  width={80}
                  height={80}
                  alt="blog"
                />
                <div className="bg-white p-6">
                  <h1 className="bg-white title-font text-lg font-medium text-black mb-2  text-center">
                    BEST CHEF
                  </h1>
                  <p className="bg-white leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 md:w-1/3">
              <div className="bg-white h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="bg-white"
                  src="/Coffee.png"
                  width={80}
                  height={80}
                  alt="blog"
                />
                <div className="bg-white p-6">
                  <h1 className="bg-white title-font text-lg font-medium text-black mb-2  text-center">
                    120 Item food
                  </h1>
                  <p className="bg-white leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 md:w-1/3">
              <div className="bg-white h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
                <Image
                  className="bg-white flex flex-col justify-center items-center"
                  src="/man.png"
                  width={80}
                  height={80}
                  alt="blog"
                />
                <div className="bg-white p-6">
                  <h1 className="bg-white title-font text-lg font-medium text-black mb-2 text-center">
                    Clean Environment
                  </h1>
                  <p className="bg-white leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}