
import React from 'react';
import { Clock, MapPin, Instagram, Twitter, Star, Facebook, Edit, Phone, Mail, Globe } from 'lucide-react';

const VendorProfile = () => {
  // Sample shop data
  const shop = {
    id: "shop_29853",
    name: "Bloom & Bean",
    description: "A cozy corner cafe specializing in artisanal coffee and fresh pastries. We source our beans ethically and bake all pastries in-house daily.",
    rating: 4.8,
    reviewCount: 127,
    phone: "(555) 123-4567",
    email: "hello@bloombean.com",
    website: "www.bloombean.com",
    openHours: [
      { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
      { day: "Sunday", hours: "9:00 AM - 5:00 PM" }
    ],
    social: [
      { platform: "Instagram", handle: "@bloomandbean", url: "#" },
      { platform: "Twitter", handle: "@bloombean", url: "#" },
      { platform: "Facebook", handle: "Bloom & Bean Cafe", url: "#" }
    ],
    location: "123 Maple Street, Portland, OR"
  };

  // Function to render social media icons
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case "Instagram":
        return <Instagram size={20} className="text-pink-500" />;
      case "Twitter":
        return <Twitter size={20} className="text-blue-400" />;
      case "Facebook":
        return <Facebook size={20} className="text-blue-600" />;
      default:
        return null;
    }
  };

  // Function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={i < fullStars ? "fill-amber-400 text-amber-400" : 
                       (i === fullStars && hasHalfStar ? "text-amber-400" : "text-gray-300")}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16 bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">

      {/* Header with Shop Info and Edit Button */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{shop.name}</h1>
          <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-mono inline-block">
            ID: {shop.id}
          </div>
        </div>
        
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors shadow-md">
          <Edit size={16} />
          <span className="hidden sm:inline">Edit Profile</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Large Profile Image */}
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 shadow-md h-64 md:h-80">
            <img 
              src="/api/placeholder/400/400" 
              alt="Shop logo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mt-4 mb-6">
            {renderStars(shop.rating)}
            <span className="text-gray-700 font-medium">{shop.rating}</span>
            <span className="text-gray-500">({shop.reviewCount} reviews)</span>
          </div>
          
          {/* Social Media Links */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Connect With Us</h2>
            <div className="flex flex-wrap gap-3">
              {shop.social.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-lg text-gray-700"
                >
                  {renderSocialIcon(social.platform)}
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Shop Details */}
        <div className="md:col-span-2">
          <p className="text-gray-600 mb-6 text-lg">{shop.description}</p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-teal-100 p-2 rounded-lg">
                <MapPin size={20} className="text-teal-600" />
              </div>
              <span>{shop.location}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Phone size={20} className="text-teal-600" />
              </div>
              <span>{shop.phone}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Mail size={20} className="text-teal-600" />
              </div>
              <span>{shop.email}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Globe size={20} className="text-teal-600" />
              </div>
              <span>{shop.website}</span>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Clock size={20} className="text-teal-500" />
              Opening Hours
            </h2>
            
            <div className="space-y-3">
              {shop.openHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-0 border-dashed border-gray-200">
                  <span className="font-medium text-gray-700">{schedule.day}</span>
                  <span className="text-gray-600 bg-white px-3 py-1 rounded-md">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;