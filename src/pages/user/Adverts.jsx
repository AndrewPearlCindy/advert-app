import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import pancake from "../../assets/images/pancake.jpg";
import mac from "../../assets/images/mac.jpg";
import burger from "../../assets/images/burger.jpg";
import { apiGetAllAdvert } from '../../services/adverts'

const Adverts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();
  
  const fetchAds =async ()=>{
    try {
    const res = await  apiGetAllAdvert();
    console.log(res);
    } catch (error) {
     console.log(error);
    }finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAds();
  })

  // Food categories with items
  const categories = [
    {
      id: "Local-food",
      name: "Local Food",
      description: "Authentic flavors from local streets and food trucks",
      items: [
        {
          id: "s1",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.7,
          
          
        },
        {
          id: "s2",
          foodname: "",
          description:"",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.5,
          
          
        },
        {
          id: "s3",
          foodname: "",
          description:"",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.8,
          
          
        },
        {
          id: "s4",
          foodname: "",
          description:"",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.3,
          
         
        },
        
      ],
    },
    {
      id: "continental",
      name: "Continental",
      description: "Continental meals made with love ❤️",
      items: [
        {
          id: "h1",
          foodname: "",
          description:"",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.9,
          
          
        },
        {
          id: "h2",
          foodname: "",
          description:"",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.6,
          
          
        },
        {
          id: "h3",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.7,
          
          
        },
        {
          id: "h4",
          foodname: "",
          description: "",
          image: "/api/placeholder/400/320",
          price: "",
          category: "",
          rating: 4.5,
          
          
        },
        
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet treats to satisfy your cravings",
      items: [
        {
          id: "d1",
          foodname: "",
          description:"",
          image: "/api/placeholder/400/320",
          price: "",
          category: "",
          rating: 4.8,
          
          
        },
        {
          id: "d2",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.9,
          
          
        },
        {
          id: "d3",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.7,
        
          
        },
        {
          id: "d4",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.6,
          
          
        },
        
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description:
        "Nutritious and delicious options for health-conscious foodies",
      items: [
        {
          id: "he1",
          foodname: "",
          description: "",
          image: "/api/placeholder/400/320",
          price: "",
          category: "",
          rating: 4.6,
          
          
        },
        {
          id: "he2",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.7,
          
          
        },
        {
          id: "he3",
          name: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.9,
    
          
        },
        {
          id: "he4",
          foodname: "",
          description: "",
          price: "",
          image: "/api/placeholder/400/320",
          category: "",
          rating: 4.5,
          
          
        },
        
      ],
    },
  ];

  // Filter food items based on category
  const displayedItems =
    activeCategory === "all"
      ? categories.flatMap((category) => category.items)
      : categories.find((category) => category.id === activeCategory)?.items ||
        [];

  return (
    <div className="min-h-screen bg-pink-100">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-red-500 font-bold text-2xl">Vennace</span>
          </div>
          <div className="flex items-center space-x-4">
            <input  */}
      {/* type="text" 
              placeholder="Search for food or vendor..." 
              className="px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-red-500 "
            /> */}
      {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
              Cart (0)
            </button> */}
      {/* </div> */}
      {/* // </div> */}
      {/* // </nav> */}

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
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full font-medium ${
                activeCategory === "all"
                  ? "bg-white text-red-600"
                  : "bg-red-600 text-white"
              }`}
            >
              All Foods
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeCategory === category.id
                    ? "bg-white text-red-600"
                    : "bg-red-600 text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Header - only show if a specific category is selected */}
        {activeCategory !== "all" && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">
              {categories.find((c) => c.id === activeCategory)?.description}
            </p>
          </div>
        )}

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-800">
                    {item.name}
                  </h3>
                  <span className="bg-orange-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                    ₵{item.price}
                  </span>
                </div>
                {/* <p className="text-gray-600 mb-4">By {item.vendor}</p> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg> */}
                    <span className="ml-1 text-gray-700">{item.rating}</span>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition duration-300">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Spotlight Section */}
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
              {/* <button className="text-red-600 font-semibold hover:text-red-800">
                View Menu →
              </button> */}
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
              {/* <button className="text-red-600 font-semibold hover:text-red-800">
                View Menu →
              </button> */}
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
              {/* <button className="text-red-600 font-semibold hover:text-red-800">
                View Menu →
              </button> */}
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

      {/* Become a Vendor CTA */}
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
