import React from "react";
import HomeBanner from "../assets/home-banner.png";

function Home() {
  return (
    <>
      <section className="sm:overflow-hidden overflow-unset" id="home">
        <div className="home bg-mainContent sm:py-0 py-36">
          <div className="sm:flex block justify-between items-center sm:max-w-[70%] max-w-[90%] m-auto h-screen">
            <div className=" text-themeWhite sm:mb-0 mb-10">
              <h2 className="text-2xl font-medium mb-5">Hello, I am</h2>
              <h1
                className="animation-circle relative text-6xl font-bold mb-10 before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
            after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px]"
              >
                Shahbaz Shabbir
              </h1>
              <p className="font-medium text-lg mb-6">
                I Am Passionate Developer
              </p>
              <p className="text-lg max-w-[450px] mb-7 text-gray-400">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <button className="bg-themeColor transition duration-500 ease-in-out text-sm tracking-widest font-semibold px-5 py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
                Download CV
              </button>
            </div>
            <div className=" z-10">
              <img src={HomeBanner} alt="Home Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
