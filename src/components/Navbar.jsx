import React, { useState } from "react";
import { Heart, HomeIcon, Menu, Search, User } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/images/logoname.png";

const Navbar = () => {
  return (
    <nav className="bg-amber-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-semibold text-xl ">
          <img className="h=[40px] w-[150px]" src={logo} alt="vennace" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to={"/"} className="hover:text-white">
            <HomeIcon />
          </Link>
          <Link to={"adverts"} className="hover:text-white">
            <Menu />
          </Link>
          <Link to={"adverts/:id:favs"} className="hover:text-white">
            <Heart />
          </Link>

          <select className="bg-gray-700 text-white px-2 py-1 rounded-l-md focus:outline-none">
            <option value="all">All</option>
            <option value="local">Local</option>
            <option value="continental">Continental</option>
            <option value="drinks">Drinks</option>
            <option value="desserts">Desserts</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-r-md"
          >
            <Search className="h-5 w-5" />
          </button>

          <User className="h-5 w-5 hover:text-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
