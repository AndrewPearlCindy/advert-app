import { BellIcon, SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logoname.png";
import axios from "axios";

const DashNav = () => {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        // Assuming you have a user ID or some identifier to fetch the user's data
        // Replace 'YOUR_USER_ID' with the actual user ID or identifier
        const userId = "YOUR_USER_ID"; // Replace with actual user ID

        // Construct the URL to fetch the user's data
        const apiUrl = `https://advertisement-system.onrender.com/api/v1/users/register` ;

        // Make the GET request using Axios
        const response = await axios.get(apiUrl);

        // Assuming the response contains the profile picture URL in a field like 'profilePicture'
        // Adjust the field name as needed based on your API response structure
        if (response.data && response.data.profilePicture) {
          setProfilePic(response.data.profilePicture);
        } else {
          // If profile picture is not found, use a placeholder or handle the error
          console.error("Profile picture not found in API response");
          setProfilePic("/api/placeholder/200/200"); // Placeholder image
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error);
        setProfilePic("/api/placeholder/200/200"); // Placeholder image on error
      }
    };

    fetchProfilePic();
  }, []);

  return (
    <nav className="w-full bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between w-full">
        {/* Vendor Profile Picture - Circle */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-gray-100">
            <img
              className="h-full w-full object-cover"
              src={profilePic}
              alt="Vendor Profile"
            />
          </div>
        </div>

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