import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
import logo from "../assets/images/VENNACE.PNG";
import { Link, useNavigate } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="mb-6 md:mb-0">
       <Link to ="/">
       <img src={logo} alt="vennace" />
       </Link>
            
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="inline-block text-xl font-semibold pb-2 mb-4 border-b-4 border-gray-700">
              Contact Us
            </h2>
            <p className="flex items-center mb-2">
              <Phone className="mr-2 h-5 w-5" />
              (233) 444 19419
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2 h-5 w-5" />
              info@vennace.com
            </p>
            <p className="mt-2 text-white">
              123 Culinary Street, Foodville, Accra 12345
            </p>
          </div>

          {/* Support Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="inline-block text-xl font-semibold pb-2 mb-4 border-b-4 border-gray-700">
              Support
            </h2>
            <p className="text-white">
              Our Customer Service Line Is Open 24/7
            </p>
          </div>

          {/* Connect Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="inline-block text-xl font-semibold pb-2 mb-4 border-b-4 border-gray-700">
              Connect
            </h2>
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="inline-flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:text-pink-500 hover:border-pink-500 transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:text-blue-500 hover:border-blue-500 transition-colors"
              >
                <Twitter />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:text-blue-800 hover:border-blue-800 transition-colors"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-red-700 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Vennace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;