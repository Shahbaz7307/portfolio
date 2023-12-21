import React, { useState } from "react";
import Avatar from "../assets/avatar.jpg";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { TbBrandLinkedin } from "react-icons/tb";

function Sidebar() {
  const navItem = [
    {
      id: 1,
      menu_item: "Home",
      section_id: "home",
    },
    {
      id: 2,
      menu_item: "About Me",
      section_id: "about",
    },
    {
      id: 3,
      menu_item: "Services",
      section_id: "services",
    },
    {
      id: 4,
      menu_item: "Portfolio",
      section_id: "portfolio",
    },
    {
      id: 5,
      menu_item: "Contact Me",
      section_id: "contact",
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState("home"); // Set "home" as the default active menu item

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveMenuItem(sectionId);
    }
  };

  return (
    <div className="xl:block hidden sticky overflow-hidden h-screen w-[250px] bottom-0 top-0 bg-sidebar before:absolute before:top-[-200px] before:left-[-70px] before:right-0 before:bottom-0 before:rounded-[50%] before:w-[350px] before:h-[350px] before:bg-themeColor">
      <div className="h-[calc(100%-50px)]">
        <div className="logo py-20 grid place-items-center">
          <div className="img z-[1] border-4 border-white overflow-hidden rounded-full shadow-md shadow-black-500/50 mb-5">
            <img src={Avatar} alt="bilal" width={100} />
          </div>
          <h2 className="text-themeWhite font-semibold text-xl uppercase z-[1] tracking-widest">
            Shahbaz
          </h2>
        </div>
        <nav className="text-gray-600 max-w-[150px] mx-auto">
          <ul>
            {navItem.map((item) => {
              return (
                <li
                  className={`py-3 cursor-pointer uppercase text-sm tracking-wider font-semibold relative ${
                    activeMenuItem === item.section_id ? "active" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.section_id)}
                >
                  {item.menu_item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className=" flex justify-center gap-3 text-2xl text-themeColor">
        <button>
          <CgFacebook className="hover:fill-white hover:text-themeWhite" />
        </button>
        <button>
          <BiLogoInstagramAlt className="hover:fill-white hover:text-themeWhite" />
        </button>
        <button>
          <TbBrandLinkedin className="hover:text-themeWhite" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
