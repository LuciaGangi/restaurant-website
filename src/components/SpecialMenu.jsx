import React, { useState } from "react";

const SpecialMenu = () => {
  const menuItems = [
    {
      title: "SURMAI CHILLI",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "DINNER",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog1-104x104.jpg",
    },
    {
      title: "LASAL CHEESE",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "BREAKFAST",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog5-104x104.jpg",
    },
    {
      title: "JUMBO CARB SHRIMP",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "FRESH FOOD",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/chinese-egg-cake-104x104.jpg",
    },
    {
      title: "PRAWNS BUTTER GARLIC",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "LUNCH",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/pizza-104x104.jpg",
    },
    {
      title: "ORGANIC FRUIT SALAD",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "DESSERT",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/blog6-104x104.jpg",
    },
    {
      title: "CAPO STEAK",
      subtitle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
      price: "$15.00",
      categories: "DINNER",
      image:
        "http://demo.spyropress.com/themeforest/laboom/wp-content/uploads/2017/06/meat-104x104.jpg",
    },
  ];

  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredMenuItems =
    filter === "ALL"
      ? menuItems
      : menuItems.filter((item) => item.categories === filter);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold font-[Quicksand] text-center p-12 mt-4 mb-2">
          Our Special Menu
        </h2>
        <p className="text-gray-500 text-center mb-6">
          The role of a good cookware in the preparation of a sumptuous meal
          cannot be overemphasized when one considers white bread
        </p>
        <div className="flex justify-center mb-4">
          <button
            className={`${
              filter === "ALL"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleFilterChange("ALL")}
          >
            ALL
          </button>
          <button
            className={`${
              filter === "BREAKFAST"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleFilterChange("BREAKFAST")}
          >
            BREAKFAST
          </button>
          <button
            className={`${
              filter === "DESSERT"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleFilterChange("DESSERT")}
          >
            DESSERT
          </button>
          <button
            className={`${
              filter === "DINNER"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleFilterChange("DINNER")}
          >
            DINNER
          </button>
          <button
            className={`${
              filter === "FRESH FOOD"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleFilterChange("FRESH FOOD")}
          >
            FRESH FOOD
          </button>
          <button
            className={`${
              filter === "LUNCH"
                ? "bg-smallTextColor text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg`}
            onClick={() => handleFilterChange("LUNCH")}
          >
            LUNCH
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white font-[Quicksand]">
          {filteredMenuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-full mr-4 transform  hover:scale-125 transition duration-300"
              />
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="ml-auto">
                    <p className="text-primaryColor text-xl font-bold">
                      {item.price}
                    </p>
                  </div>
                </div>
                <hr className="w-76 border-dotted border-gray-300 my-2" />
                <p className="text-gray-500 mb-2">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center mt-8 mb-2 p-5">
          <button className="bg-primaryColor hover:bg-smallTextColor text-white font-bold font-[Quicksand] py-4 px-14 rounded-full transition-colors duration-500">
            EXPLORE FULL MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
