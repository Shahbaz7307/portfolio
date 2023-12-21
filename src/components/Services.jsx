import React from "react";
import Service from "../assets/services.jpg";

function Services() {
  return (
    <section id="services">
      <div className="services bg-mainContent">
        <div className="sm:max-w-[70%] max-w-[90%] m-auto py-20">
          <h3
            className="animation-circle relative mb-8 font-light text-3xl tracking-[6px] uppercase 
            before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
            after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px] text-themeWhite"
          >
            Services.
          </h3>
          <p className="text-base mb- text-gray-400">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between sm:max-w-[70%] max-w-[90%] m-auto pb-24">
          <div className="service-card bg-sidebar border-b border-gray-400 p-8 2xl:w-[24%] lg:w-[48%]">
            <img src={Service} alt="About Me" />
            <h3 className="my-4 text-white tracking-wide">Web Developement</h3>
            <p className="text-sm mb-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
              molestiae et, quae quaerat neque.
            </p>
            <button className="bg-themeColor text-white inline-block w-44 mr-10 transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              View Detail
            </button>
          </div>
          <div className="service-card bg-sidebar border-b border-gray-400 p-8 2xl:w-[24%] lg:w-[48%]">
            <img src={Service} alt="About Me" />
            <h3 className="my-4 text-white tracking-wide">Web Developement</h3>
            <p className="text-sm mb-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
              molestiae et, quae quaerat neque.
            </p>
            <button className="bg-themeColor text-white inline-block w-44 mr-10 transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              View Detail
            </button>
          </div>
          <div className="service-card bg-sidebar border-b border-gray-400 p-8 2xl:w-[24%] lg:w-[48%]">
            <img src={Service} alt="About Me" />
            <h3 className="my-4 text-white tracking-wide">Web Developement</h3>
            <p className="text-sm mb-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
              molestiae et, quae quaerat neque.
            </p>
            <button className="bg-themeColor text-white inline-block w-44 mr-10 transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              View Detail
            </button>
          </div>
          <div className="service-card bg-sidebar border-b border-gray-400 p-8 2xl:w-[24%] lg:w-[48%]">
            <img src={Service} alt="About Me" />
            <h3 className="my-4 text-white tracking-wide">Web Developement</h3>
            <p className="text-sm mb-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
              molestiae et, quae quaerat neque.
            </p>
            <button className="bg-themeColor text-white inline-block w-44 mr-10 transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
