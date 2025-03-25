import React from "react";
import {
  Plus,
  List,
  ChefHat,
  CookingPot,
  HeartHandshake,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Message */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Welcome, Food Vendor!
          </h2>
          <p className="text-xl text-gray-600">
            Showcase your delicious offerings and reach more customers with
            ease.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link to="/dashboard/create-ad">
              <button className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <Plus className="mr-2" /> Create New Ad
              </button>
            </Link>

            <Link to="/dashboard/ads">
              <button className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                <Utensils className="mr-2" /> My Ads
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center items-center">
          <CookingPot className="h-64 w-64 text-orange-400" />
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Why Use FoodAds?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <ChefHat className="mx-auto h-12 w-12 text-orange-500 mb-4" />
              <h4 className="font-bold text-xl mb-2">Easy Listing</h4>
              <p className="text-gray-600">
                Create mouth-watering ads in minutes
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <List className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h4 className="font-bold text-xl mb-2">Track Performance</h4>
              <p className="text-gray-600">
                Monitor your ad reach and engagement
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <HeartHandshake className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h4 className="font-bold text-xl mb-2">Expand Reach</h4>
              <p className="text-gray-600">
                Connect with more potential customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashHome;
