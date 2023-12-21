import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
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
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="xl:hidden flex justify-between items-center px-10 h-20 text-themeWhite bg-sidebar fixed w-full z-50">
      <div className="logo w-1/2">
        <h1 className="text-2xl font-semibold uppercase tracking-widest">
          Shahbaz
        </h1>
      </div>
      <div className=" w-1/2 flex justify-end">
        <HiOutlineMenuAlt3
          className="text-3xl hover:text-themeColor cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute top-full left-0 pt-0 p-10 bg-sidebar shadow-md w-full">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
