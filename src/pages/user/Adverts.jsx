import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import pancake from "../../assets/images/pancake.jpg";
import mac from "../../assets/images/mac.jpg";
import burger from "../../assets/images/burger.jpg";
import { apiGetAllAdvert } from "../../services/adverts";

const Adverts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const imageURL = "https://res.cloudinary.com/dyfpxokoj/image/upload/";

  const getAds = async () => {
    try {
      const response = await apiGetAllAdvert();
      setAds(response.data.adverts);
      setFilteredAds(response.data.adverts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  // Filter function
  const filterAds = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFilteredAds(ads);
    } else {
      const filtered = ads.filter(
        (ad) => ad.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredAds(filtered);
    }
  };

  // Category buttons configuration
  const categories = [
    { name: "All", value: "all" },
    { name: "Local", value: "local" },
    { name: "Continental", value: "continental" },
    { name: "Desserts", value: "desserts" },
    { name: "Drinks", value: "drinks" },
  ];

  return (
    <div className="min-h-screen bg-pink-100">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Food from Local Vendors
          </h1>
          <p className="text-xl mb-8">
            Browse our selection of 16+ delicious food options from top-rated
            vendors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeCategory === category.value
                    ? "bg-white text-red-500"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
                onClick={() => filterAds(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAds.map((ad) => {
            return (
              <div
                key={ad.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${imageURL}${ad.pictures[0]}`}
                    alt={ad.foodname}
                    className="w-full h-full object-cover hover:scale-95 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-gray-800">
                      {ad.foodname}
                    </h3>
                    <span className="bg-orange-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                      {ad.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize">
                      {ad.category}
                    </span>
                    <Link
                      to={`/adverts/${ad.id}`}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredAds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No items found in this category.
            </p>
          </div>
        )}
      </div>

      {/* ... (Vendor Spotlight, How It Works, Become a Vendor sections) */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Offers In Your Area!!!
          </h2>
          <p className="text-4xl text-center">Save 20% on delivery 🎉</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={pancake}
                    alt="pancake"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Pancake Place </h3>
                  <p className="text-gray-600">
                    Authentic Sweet & Savory Pancakes
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Join us for the most authentic pancakes in town! Family recipes
                passed down through generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={mac}
                    alt="macaroni"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Hungry Pal</h3>
                  <p className="text-gray-600">Homemade food made with love</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our food is made fresh daily using only the finest ingredients.
                Perfect for any occasion!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={burger}
                    alt="burger"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Burger Shack</h3>
                  <p className="text-gray-600">Where Every Bite is a Winner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Healthy doesn't have to be boring! Our nutrient-packed meals are
                both delicious and good for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold 8mb-2">Browse Food Options</h3>
              <p className="text-gray-600">
                Explore our wide selection of foods from various local vendors
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
              <p className="text-gray-600">
                Add items to your cart and checkout securely
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Food</h3>
              <p className="text-gray-600">
                Pick up your order or get it delivered right to your door
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Vendor  */}
      <div className="bg-gradient-to-r from-red-600 to-red-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Food Vendor?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our marketplace and reach more customers. We handle the
            platform while you focus on creating amazing food.
          </p>
          <button
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg"
            onClick={() => navigate("vendorlogin")}
          >
            Become a Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
