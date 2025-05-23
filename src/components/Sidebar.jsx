import React, { useState, useEffect } from "react";
import K from "../constants"; // Assuming K.NAVLINKS is defined
import { NavLink } from "react-router-dom"; // Fixed import to react-router-dom
import {
  House,
  LogOut,
  Star as StarIcon,
  TrendingUp,
  User,
  Settings,
  Plus as PlusIcon,
  Utensils,
  Menu,
  X,
  HouseIcon,
} from "lucide-react";
import logo from "../assets/images/VENNACE.PNG";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close mobile sidebar on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Determine if we're on mobile
  const isMobile = windowWidth < 1024;

  return (
    <>
      {/* Mobile toggle button - only visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-black lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main sidebar */}
      <div
        className={`
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          } 
          transition-transform duration-300 ease-in-out
          flex flex-col w-60 bg-white text-black 
          fixed left-0 top-0 z-40 shadow-xl h-screen overflow-hidden
          lg:sticky lg:top-0 lg:h-screen
        `}
      >
        {/* Logo section */}
        <div className="flex items-center justify-center h-2 border-b border-white/10 sticky top-0 bg-white mt-18 mb-14">
          <img src={logo} alt="vennace" />
        </div>

        {/* Navigation section - scrollable */}
        <div className="flex flex-col gap-y-2 mt-6 px-3 overflow-y-auto flex-grow">
          {K.NAVLINKS.map((link, index) => {
            let iconComponent;

            switch (link.name) {
              case "Dashboard":
                iconComponent = <House size={18} />;
                break;
              case "Create Ad":
                iconComponent = (
                  <PlusIcon
                    size={18}
                    className="group-hover:rotate-12 transition-transform duration-200"
                  />
                );
                iconComponent = <PlusIcon size={18} />;
                break;
              case "My Ads":
                iconComponent = <Utensils size={18} />;
                break;
              case "Reviews":
                iconComponent = <StarIcon size={18} />;
                break;
              case "Analytics":
                iconComponent = <TrendingUp size={18} />;
                break;

              default:
                iconComponent = <House size={18} />; // Default icon

                iconComponent = <HouseIcon size={18} />; // Default icon
            }

            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => `
                  relative flex items-center rounded-lg px-4 py-3
                  ${
                    isActive
                      ? "bg-red-200 text-black font-medium before:absolute before:w-1 before:h-full before:bg-white before:left-0 before:top-0 before:rounded-r-md"
                      : "text-black/80 hover:bg-red-100 hover:text-black transition-all duration-200"
                  }
                `}
                onClick={() => isMobile && setIsOpen(false)} // Close sidebar on mobile when clicked
              >
                <div className="mr-3">{iconComponent}</div>
                <span className="text-sm font-medium">{link.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent mx-4 my-6"></div>

        <div className="px-3  sticky bottom-0 bg-white z-10 mt-auto">
          <button className="w-full flex items-center justify-center gap-x-2 bg-white hover:bg-red-100  text-black px-4 py-3 rounded-xl transition-all duration-200 group">
            <Settings
              size={18}
              className="group-hover:rotate-12 transition-transform duration-200"
            />
            <span className="font-medium text-sm">Settings</span>
          </button>
        </div>
        <div className="px-3 sticky bottom-0 bg-white z-10 mt-auto">
          <Link to="/">
            <button className="w-full flex items-center justify-center gap-x-2 bg-white hover:bg-red-100  text-black px-4 py-3 rounded-xl transition-all duration-200 group">
              <LogOut
                size={18}
                className="group-hover:rotate-12 transition-transform duration-200"
              />
              <span className="font-medium text-sm">Logout</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
