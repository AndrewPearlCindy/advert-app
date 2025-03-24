import React from "react";
import pasta from "../../assets/images/pasta.jpg"
import dessert from "../../assets/images/dessert.jpg"
import drinks from "../../assets/images/drinks.jpg"
import beans from "../../assets/images/beans.jpg"
import logo from "../../assets/images/logo.png"

const Landing = () => {
  return (
    <div className= "bg-[url(assets/images/fruit.png)]  bg-cover bg-center bg-fixed opacity-70 brightness-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <img src={logo} className="w-80" alt="logo" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
          {/* VENNACE */}
        </h1>
        <p className="text-xl md:text-2xl text-red-700 max-w-3xl mb-12">
          {/* Where Flavors Meet Deals. */}
        </p>
        <p className="text-4xl md:text-4xl text-black max-w-3xl mb-12">
          Connect with local restaurants and discover amazing food deals in your
          area.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12">
          <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Get Started
          </button>
          {/* <button className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-8 rounded-full shadow-lg border border-orange-500 transition duration-300">
            Become a Vendor
          </button> */}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured Food Categories */}
          <div className="max-w-6xl mx-auto px-4 py-16 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Food Categories
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40">
                  <img
                    src={beans}
                    alt="local"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Local</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40">
                  <img
                    src={pasta}
                    alt="continental"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Continental</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40">
                  <img
                    src={dessert}
                    alt="Desserts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Desserts</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40">
                  <img
                    src={drinks}
                    alt="local"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Drinks</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2">Quality Food Vendors</h3>
              <p className="text-gray-600">
                We carefully select food vendors to ensure quality and variety
                for our customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">
                Our platform makes it simple to discover, order, and enjoy
                delicious food.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Support Local</h3>
              <p className="text-gray-600">
                By using our platform, you're directly supporting local food
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
