import React from "react";


import beans from "../../assets/images/beans.jpg";
import drinks from "../../assets/images/drinks.jpg";
import burger from "../../assets/images/burger.jpg";
import mac from "../../assets/images/mac.jpg";
import pizza from "../../assets/images/pizza.jpg";
import pasta from "../../assets/images/pasta.jpg";


const favoriteFoods = [
  { id: 1, title: "Gob3", image: beans },
  { id: 2, title: "Drinks", image: drinks },
  { id: 3, title: "Burger", image: burger },
  { id: 4, title: "Mac", image: mac },
  { id: 5, title: "Pizza", image: pizza },
  { id: 6, title: "Pasta", image: pasta },
];

const Favourites = () => {
  return (
    <div>
     
      <div className="bg-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Browse Your Favorite Foods
          </h1>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6  ">
        {favoriteFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl h-80"
          >
            <div className="h-50 ">
              <img
                src={food.image} 
                alt={food.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-semibold text-xl text-gray-800">{food.title}</h3>
              <p className="text-gray-500 text-sm mt-1">Delicious and freshly prepared.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
