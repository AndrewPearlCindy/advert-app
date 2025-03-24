import React from "react";
import { Edit, Trash2, Tag, DollarSign } from "lucide-react";

// Sample food data
const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce on a toasted brioche bun.",
    price: 12.99,
    category: "Burgers",
    mainImage: "/api/placeholder/400/300",
    thumbnails: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.",
    price: 14.99,
    category: "Pizza",
    mainImage: "/api/placeholder/400/300",
    thumbnails: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    description: "Crisp romaine lettuce, grilled chicken, parmesan cheese, and croutons with our homemade Caesar dressing.",
    price: 10.99,
    category: "Salads",
    mainImage: "/api/placeholder/400/300",
    thumbnails: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  },
  {
    id: 4,
    name: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, and avocado rolled in sushi rice and nori.",
    price: 16.99,
    category: "Sushi",
    mainImage: "/api/placeholder/400/300",
    thumbnails: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries.",
    price: 8.99,
    category: "Desserts",
    mainImage: "/api/placeholder/400/300",
    thumbnails: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  }
];

const VendorAdCard = ({ item }) => {
  const handleEdit = () => {
    console.log("Edit item:", item.id);
    // In a real app, this would open the edit form or modal
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      console.log("Delete item:", item.id);
      // In a real app, this would trigger the delete action
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image carousel */}
      <div className="relative h-48 sm:h-64">
        <img src={item.mainImage} alt={item.name} className="h-full w-full object-cover" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          <Tag size={12} className="mr-1" />
          {item.category}
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          <div className="flex items-center text-lg font-bold text-blue-600">
            <DollarSign size={18} className="inline" />
            {item.price.toFixed(2)}
          </div>
        </div>

        <p className="mt-2 text-gray-600">{item.description}</p>

        {/* Thumbnail gallery */}
        <div className="mt-4 flex space-x-2">
          {item.thumbnails.map((thumb, index) => (
            <img 
              key={index} 
              src={thumb} 
              alt={`${item.name} thumbnail ${index + 1}`} 
              className="w-16 h-16 rounded-md object-cover"
            />
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex space-x-2">
          <button
            onClick={handleEdit}
            className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <Edit size={16} className="mr-2" />
            Edit Item
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center bg-white border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded-lg transition duration-300"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const VendorAdGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Menu Items</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map(item => (
          <VendorAdCard key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
};

export default VendorAdGrid;