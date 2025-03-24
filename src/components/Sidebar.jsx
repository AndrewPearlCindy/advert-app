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
  X
} from "lucide-react"; // Import icons including Menu for mobile toggle
import logo from "../assets/images/logoname.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close mobile sidebar on large screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'} 
          transition-transform duration-300 ease-in-out
          flex flex-col w-60 bg-gradient-to-br from-white to-white text-black 
          fixed left-0 top-0 z-40 shadow-xl h-screen overflow-hidden
          lg:sticky lg:top-0 lg:h-screen
        `}
      >
        {/* Logo section */}
        <div className="flex items-center justify-center h-20 border-b border-white/10 sticky top-0 bg-white z-10">
          <img className="h-[60px] w-[150px]" src={logo} alt="vennace" />
        </div>

        {/* Navigation section - scrollable */}
        <div className="flex flex-col gap-y-2 mt-6 px-3 overflow-y-auto flex-grow">
          {K.NAVLINKS.map((link, index) => {
            let iconComponent;

            switch (link.name) {
              case "Dashboard":
                iconComponent = <House size={18} className="group-hover:rotate-12 transition-transform duration-200"/>;
                break;
              case "Add Ad":
                iconComponent = <PlusIcon size={18} className="group-hover:rotate-12 transition-transform duration-200"/>;
                break;
              case "My Ads":
                iconComponent = <Utensils size={18} className="group-hover:rotate-12 transition-transform duration-200"/>;
                break;
              case "Reviews":
                iconComponent = <StarIcon size={18} className="group-hover:rotate-12 transition-transform duration-200"/>;
                break;
              case "Analytics":
                iconComponent = <TrendingUp size={18} className="group-hover:rotate-12 transition-transform duration-200"/>;
                break;
             
              default:
                iconComponent = <User size={18} />; // Default icon
            }

            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => `
                  relative flex items-center rounded-lg px-4 py-3
                  ${
                    isActive
                      ? "bg-gray-300 text-black font-medium before:absolute before:w-1 before:h-full before:bg-white before:left-0 before:top-0 before:rounded-r-md"
                      : "text-black/80 hover:bg-gray-500 hover:text-black transition-all duration-200"
                  }
                `}
                onClick={() => isMobile && setIsOpen(false)} // Close sidebar on mobile when clicked
              >
                <div className="mr-3">
                  {iconComponent}
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent mx-4 my-6"></div>

        {/* Logout button - sticky at bottom */}
        <div className="px-3  sticky bottom-0 bg-white z-10 mt-auto">
          <button className="w-full flex items-center justify-center gap-x-2 bg-white/10 hover:bg-gray-300 border border-white/5 text-black px-4 py-3 rounded-xl transition-all duration-200 group">
            <Settings size={18} className="group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-medium text-sm">Settings</span>
          </button>
        </div>
        <div className="px-3 sticky bottom-0 bg-white z-10 mt-auto">
          <button className="w-full flex items-center justify-center gap-x-2 bg-white/10 hover:bg-gray-300 border border-white/5 text-black px-4 py-3 rounded-xl transition-all duration-200 group">
            <LogOut size={18} className="group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-medium text-sm">Logout</span>
          </button>
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