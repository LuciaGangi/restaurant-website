import React, { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleMouseEnter2 = () => {
    setShowMenu2(true);
  };

  const handleMouseLeave2 = () => {
    setShowMenu2(false);
  };

  const handleMouseEnter3 = () => {
    setShowMenu3(true);
  };

  const handleMouseLeave3 = () => {
    setShowMenu3(false);
  };

  const handleMouseEnter4 = () => {
    setShowMenu4(true);
  };

  const handleMouseLeave4 = () => {
    setShowMenu4(false);
  };

  return (
    <header className="header sticky top-18 left-0 text-xl bg-headingColor shadow-md flex items-center justify-between overflow-visible px-2 py-0 z-10">
      <nav className="flex justify-between items-center container z-4" >
        <ul className="flex items-center">
          <li
            className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer active"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="2">Home</a>
            {showMenu && (
              <div className="absolute bg-white rounded-md py-2 px-4">
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Home main
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Home Transparent
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Home 3
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Home 4
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Home 5
                </a>
              </div>
            )}
          </li>
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>
            <a href="3">Pages</a>
            {showMenu2 && (
              <div className="absolute bg-white rounded-md py-2 px-4">
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  About us
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Gallery
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Blog
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Service 1
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Service 2
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  FAQ
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Page 404
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Team
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Terms & Conditions
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Contact 1
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Contact 2
                </a>
              </div>
            )}
          </li>
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}>
            <a href="4">Menus</a>
            {showMenu3 && (
              <div className="absolute bg-white rounded-md py-2 px-4">
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Menu Style 1
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Menu Style 2
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Menu Style 3
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Menu Style 4
                </a>
              </div>
            )}
          </li>
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer"
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}>
            <a href="5">Shop</a>
            {showMenu4 && (
              <div className="absolute bg-white rounded-md py-2 px-4">
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Shop 
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Shop 3 columns
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Shop 4 columns
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Shop right sidebar
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Shop left sidebar
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Single product
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor mb-2">
                  Cart
                </a>
                <a href="2" className="block text-headingColor hover:text-primaryColor">
                  Checkout
                </a>
              </div>
            )}
          </li>
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer">
            <a href="5">Contact</a>
          </li>
        </ul>
        <div className="  flex-1 flex items-center justify-center ">
          <button className="">
          <div class="h-20 w-24 relative cursor-pointer">
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <img
              src="http://demo.spyropress.com/themeforest/laboom/wp-content/themes/laboom/assets/images/logo.png"
              alt=""
            />
            </div>
          </div>
            
          </button>
        </div>
        <ul className="flex items-center">
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer">
            <a href="">
              <i className="fa-regular fa-calendar p-2"></i>
              Book table
            </a>
          </li>
          <li className="p-4 text-white hover:text-primaryColor duration-200 cursor-pointer">
            <a href="">
              <i class="fa-solid fa-cart-shopping p-2"></i>
              0 items - £ 0.00
            </a>
          </li>
          <li className="p-4 text 2xl text-white hover:text-primaryColor duration-200 cursor-pointer">
            <a href="">
              <i className="fa-solid fa-magnifying-glass text-3xl"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
