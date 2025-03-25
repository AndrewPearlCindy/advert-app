import React, { useState } from "react";
import { Link } from "react-router";

const SingleAd = ({ food }) => {
  const defaultFood = {
    id: 1,
    name: "Spicy Thai Basil Noodles",
    description:
      "Stir-fried rice noodles with fresh Thai basil, bell peppers, and spicy chili sauce. Served with a side of lime and bean sprouts.",
    price: 65.00,
    category: "Thai Cuisine",
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
    ],
  };

  const foodItem = food || defaultFood;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto my-16">
      {/* Image Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-64">
          {foodItem.images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full snap-center snap-always"
            >
              <img
                src={image}
                alt={`${foodItem.name} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {foodItem.category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {foodItem.name}
          </h3>
          <p className="text-lg font-bold text-orange-500">
          ₵{foodItem.price.toFixed(2)}
          </p>
        </div>

        <p className="mt-2 text-gray-600 text-sm">{foodItem.description}</p>

        <div className="mt-4 flex justify-end space-x-2">
          <Link to="/adverts">
            <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors">
              Back to Ads
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
