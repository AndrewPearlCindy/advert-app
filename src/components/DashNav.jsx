import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import logo from "../assets/images/logoname.png";


const DashNav = () => {
  return (
    <nav className="w-full bg-white px-4 py-3 shadow-sm">
      {/* Main navbar */}
      <div className="flex items-center justify-between w-full">
        {/* Search - desktop only */}
        <div className="w-full lg:block flex-1 mx-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Right-side items */}
        <div className="flex items-center gap-4 ml-4">
          <div className="flex items-center">
            <div className= " items-center justify-center">
          <img className="h=[40px] w-[150px]" src={logo} alt="vennace" />
            </div>
            <span className="hidden md:inline ml-2 text-sm font-medium text-gray-700">
              My Ads
            </span>
            <ChevronDownIcon className="hidden md:inline h-4 w-4 ml-1 text-gray-400" />
          </div>
          <BellIcon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
