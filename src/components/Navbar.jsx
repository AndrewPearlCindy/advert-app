import React, { useState } from "react";
import { Heart, HomeIcon, Menu, Search, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoname.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-50 text-black shadow-md">
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="vennace" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-gray-">
                <HomeIcon className="h-5 w-5" />
              </Link>
              <Link to="adverts" className="hover:text-gray-500">
                <Menu className="h-5 w-5" />
              </Link>
              <Link to="adverts/:id:favs" className="hover:text-gray-500">
                <Heart className="h-5 w-5" />
              </Link>
            </div>

            {/* Search Section */}
            <div className="flex items-center">
              <select className="bg-gray-100 text-black px-2 py-1  gap-5 rounded-l-md border focus:outline-none">
                <option value="all">All</option>
                <option value="local">Local</option>
                <option value="continental">Continental</option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Desserts</option>
              </select>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 text-black px-3 py-1 w-40 border focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-r-md"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* User Icon */}
            <User className="h-5 w-5 hover:text-gray-500" />
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                  onClick={toggleMenu}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="adverts" 
                  className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                  onClick={toggleMenu}
                >
                  <Menu className="h-5 w-5" />
                  <span>Adverts</span>
                </Link>
                <Link 
                  to="adverts/:id:favs" 
                  className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                  onClick={toggleMenu}
                >
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="space-y-4">
                <select className="w-full bg-gray-100 text-black px-3 py-2 rounded border focus:outline-none">
                  <option value="all">All</option>
                  <option value="local">Local</option>
                  <option value="continental">Continental</option>
                  <option value="drinks">Drinks</option>
                  <option value="desserts">Desserts</option>
                </select>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow bg-gray-100 text-black px-3 py-2 rounded-l border focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-r"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Mobile User */}
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;