import React, { useState } from "react";
import PortfolioImg1 from "../assets/portfolio (1).webp";
import PortfolioImg2 from "../assets/portfolio (2).webp";
import PortfolioImg3 from "../assets/portfolio (3).webp";
import PortfolioImg4 from "../assets/portfolio (4).webp";
import PortfolioImg5 from "../assets/portfolio (5).webp";
import PortfolioImg6 from "../assets/portfolio (6).webp";
import PortfolioImg7 from "../assets/portfolio (7).webp";
import PortfolioImg8 from "../assets/portfolio (8).webp";
import PortfolioImg9 from "../assets/portfolio (9).webp";
import { Transform } from "@mui/icons-material";
import { IoMdClose } from "react-icons/io";

const imageData = [
  {
    src: PortfolioImg1,
    alt: "Image 1",
    categories: ["wordpress"],
  },
  { src: PortfolioImg2, alt: "Image 2", categories: ["ecommerce"] },
  { src: PortfolioImg3, alt: "Image 3", categories: ["graphics"] },
  { src: PortfolioImg4, alt: "Image 4", categories: ["elementor"] },
  { src: PortfolioImg5, alt: "Image 5", categories: ["custom"] },
  { src: PortfolioImg6, alt: "Image 6", categories: ["ecommerce"] },
  { src: PortfolioImg7, alt: "Image 7", categories: ["wordpress"] },
  { src: PortfolioImg8, alt: "Image 8", categories: ["elementor"] },
  { src: PortfolioImg9, alt: "Image 9", categories: ["graphics"] },
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setLightboxIndex(null); // Close the lightbox when changing categories
  };

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const filterImages = () => {
    if (selectedCategory === "all") {
      return imageData;
    }

    const filteredImages = imageData.filter((image) =>
      image.categories.includes(selectedCategory)
    );

    return filteredImages;
  };

  return (
    <section id="portfolio">
      <div className="Portfolio bg-mainContent">
        <div className="sm:max-w-[70%] max-w-[90%] m-auto pt-20">
          <h3
            className="animation-circle relative mb-8 font-light text-3xl tracking-[6px] uppercase 
        before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
        after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px] text-themeWhite"
          >
            Portfolio.
          </h3>
          <p className="text-base mb- text-gray-400">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </p>
        </div>
        <div className="sm:max-w-[70%] max-w-[90%] m-auto py-20 relative">
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button
              type="button"
              onClick={() => handleCategoryClick("all")}
              className={`text-themeColor hover:text-white border ${
                selectedCategory === "all" ? "bg-themeColor" : "bg-white"
              } hover:bg-themeColor focus:ring-4 focus:outline-none focus:ring-transparent focus:ring-shadow-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-themeColor dark:text-themeColor dark:hover:text-white dark:hover:bg-themeColor dark:bg-gray-900 dark:focus:ring-themeColor`}
            >
              All categories
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("wordpress")}
              className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:ring-shadow-none focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              Wordpress
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("custom")}
              className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:ring-shadow-none focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              Custom
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("ecommerce")}
              className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:ring-shadow-none focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              Ecommerce
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("elementor")}
              className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:ring-shadow-none focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              Elementor
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:min-h-[600px]">
            {filterImages().map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
          {lightboxIndex !== null && (
            <>
              <div
                className="lightbox-overlay absolute top-[50%] left-[50%] bg-sidebar p-5 z-10 rounded-2xl"
                style={{ transform: "translate(-50%, -50%)" }}
                onClick={closeLightbox}
              >
                <div className="lightbox-container lg:w-[1200px] sm:w-[600px] w-[300px] relative">
                  <button
                    className="lightbox-close text-sidebar absolute -right-2 -top-2 bg-themeColor p-2 rounded-full border-2"
                    onClick={closeLightbox}
                  >
                    <IoMdClose />
                  </button>
                  <img
                    className="lightbox-image rounded-md"
                    src={filterImages()[lightboxIndex].src}
                    alt={filterImages()[lightboxIndex].alt}
                  />
                </div>
              </div>
              <div className="page-overlay fixed top-0 left-0 w-full h-full bg-black opacity-95" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
