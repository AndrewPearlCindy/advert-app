import { BellIcon, SearchIcon } from "lucide-react";
import React from "react";
import logo from "../assets/images/VENNACE.PNG";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { apiGetVendorById } from "../../services/adverts";

const DashNav = () => {
  // const getVendor = async () => {
  //     try {
  //       const response = await apiGetVendorById(id);
  //       setVendor(response.data.vendor);
  //     } catch (error) {
  //       console.error("Error fetching ads:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getVendor();
  //   }, []);

  return (
    <nav className="w-full bg-red-50 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between w-full">
        {/* Vendor Profile Picture - Circle */}
        {/* <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-gray-100">
            <img
              className="h-full w-full object-cover"
              // src={`${imageURL}${id.profilePicture?.[0]}`}
              src={logo}
              alt="Vendor Profile"
            />
          </div>
        </div> */}

        {/* Search - desktop only */}
        <div className="w-full lg:block flex-1 mx-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white shadow-red-500 shadow-sm rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Right-side items */}
        <div className="flex items-center gap-4 ml-4">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Notification Bell */}
          <BellIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
