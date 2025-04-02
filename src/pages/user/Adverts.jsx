import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import pancake from "../../assets/images/pancake.jpg";
import mac from "../../assets/images/mac.jpg";
import burger from "../../assets/images/burger.jpg";
import { apiGetAllAdvert } from "../../services/adverts";
import { Heart, HomeIcon, Menu, Search, User, X } from "lucide-react";
import logo from "../../assets/images/VENNACE.PNG";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation */}{" "}
      <nav className="bg-red-50 text-black shadow-md">
        <div className="container mx-auto px-4 py-3 relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img className="h-10 w-auto" src={logo} alt="vennace" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Navigation Icons */}
              <div className="flex items-center space-x-4">
                <Link to="/adverts" className="hover:text-gray-">
                  <HomeIcon className="h-5 w-5" />
                </Link>
                <Link to="/adverts" className="hover:text-gray-500">
                  <Menu className="h-5 w-5" />
                </Link>
                <Link to="/adverts/:id:favs" className="hover:text-gray-500">
                  <Heart className="h-5 w-5" />
                </Link>
              </div>

              {/* Search Section */}
              <div className="flex items-center">
                <select className="bg-gray-100 text-black px-2 py-1  gap-5 rounded-l-md border focus:outline-none">
                  <option value="all">All</option>
                  <option value="local">Local</option>
                  <option value="continental">Continental</option>
                  <option value="drinks">Drinks</option>
                  <option value="desserts">Desserts</option>
                </select>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-black px-3 py-1 w-40 border focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-r-md"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* User Icon */}
              <User className="h-5 w-5 hover:text-gray-500" />
            </div>
          </div>

          {/* Mobile Menu - Slide Down */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
              <div className="container mx-auto px-4 py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/adverts"
                    className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                    onClick={toggleMenu}
                  >
                    <HomeIcon className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/adverts"
                    className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                    onClick={toggleMenu}
                  >
                    <Menu className="h-5 w-5" />
                    <span>Adverts</span>
                  </Link>
                  <Link
                    to="/adverts/:id:favs"
                    className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded"
                    onClick={toggleMenu}
                  >
                    <Heart className="h-5 w-5" />
                    <span>Favorites</span>
                  </Link>
                </div>

                {/* Mobile Search */}
                <div className="space-y-4">
                  <select className="w-full bg-gray-100 text-black px-3 py-2 rounded-l border focus:outline-none">
                    <option value="all">All</option>
                    <option value="local">Local</option>
                    <option value="continental">Continental</option>
                    <option value="drinks">Drinks</option>
                    <option value="desserts">Desserts</option>
                  </select>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-grow bg-gray-100 text-black px-3 py-2 rounded-l border focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-r"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Mobile User */}
                <div className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
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
                  Join us for the most authentic pancakes in town! Family
                  recipes passed down through generations.
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
                    <p className="text-gray-600">
                      Homemade food made with love
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our food is made fresh daily using only the finest
                  ingredients. Perfect for any occasion!
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
                    <p className="text-gray-600">
                      Where Every Bite is a Winner
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Healthy doesn't have to be boring! Our nutrient-packed meals
                  are both delicious and good for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
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
            <Link
              to="/signup"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
