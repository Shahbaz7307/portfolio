import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact">
      <div className="Portfolio bg-mainContent">
        <div className="sm:max-w-[70%] max-w-[90%] m-auto py-20">
          <h3
            className="animation-circle relative mb-8 font-light text-3xl tracking-[6px] uppercase 
            before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
            after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px] text-themeWhite"
          >
            Contact.
          </h3>
          <p className="text-base mb- text-gray-400">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </p>
        </div>
        <div className="sm:flex justify-center sm:max-w-[70%] max-w-[90%] m-auto pb-20">
          <button className="bg-themeColor flex items-center justify-center gap-2 text-white sm:w-52 w-full sm:mr-10 mr-0 sm:mb-0 mb-4 transition duration-500 ease-in-out text-xl tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
            <BsWhatsapp />
            Whatsapp
          </button>
          <button className="bg-themeColor flex items-center justify-center gap-2 text-white sm:w-52 w-full sm:mr-10 mr-0 transition duration-500 ease-in-out text-xl tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
            <MdOutlineEmail />
            Email
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
