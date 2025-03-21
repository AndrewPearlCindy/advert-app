import React from "react";
import K from "../constants"; // Assuming K.NAVLINKS is defined
import { NavLink } from "react-router"; // Use react-router-dom for routing
import { House, LogOut, Star, StarIcon, TrendingUp, User2Icon } from "lucide-react";
import { User, Home, Settings, PlusIcon, Utensils } from "lucide-react"; // Import more icons
import logo from "../assets/images/logoname.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 bg-gradient-to-br from-white to--white text-black h-screen fixed left-0 top-0 shadow-xl">
      {/* Logo section with subtle separator */}
      <div className="flex items-center justify-center h-20 border-b border-white/10">
          <img className="h=[40px] w-[150px]" src={logo} alt="vennace" />
      </div>

      {/* Navigation section with improved spacing */}
      <div className="flex flex-col gap-y-2 mt-6 px-3">
        {K.NAVLINKS.map((link, index) => {
          let iconComponent;

          switch (link.name) {
            case "Dashboard":
              iconComponent = <House size={18} />;
              break;
            case "Add Ad":
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
            case "Settings":
              iconComponent = <Settings size={18} />;
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
            >
              <div className="mr-3">
                {iconComponent}
              </div>
              <span className="text-sm font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Divider for visual separation */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4 my-6"></div>


      {/* Push logout button to bottom */}
      <div className="mt-auto mb-8 px-3">
        <button className="w-full flex items-center justify-center gap-x-2 bg-white/10 hover:bg-gray-300 border border-white/5 text-black px-4 py-3 rounded-xl transition-all duration-200 group">
          <LogOut size={18} className="group-hover:rotate-12 transition-transform duration-200" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


