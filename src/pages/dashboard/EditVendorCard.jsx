import React, { useEffect, useState } from "react";
import {
  apiAddAdvert,
  apiGetVendorAdvertById,
  apiUpdateAdvert,
} from "../../services/adverts";
import { Upload, Tag, FileText, Utensils, BadgeCent } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const EditVendorCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetVendorAdvertById(id);
      setAd(response.data.adverts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      const response = await apiUpdateAdvert(id, data);
      console.log(response.data);
      navigate(`/dashboard/ads`);
    } catch (error) {
      console.log(error);
    }
  };

  const foodCategories = ["local", "continental", "drinks", "desserts"];

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
        <Utensils className="inline mr-2 text-red-500" size={24} /> Create an Ad
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Tag className="inline mr-2 text-red-500" size={18} /> Food Name
          </label>
          <input
            type="text"
            id="foodname"
            name="foodname"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 border-gray-300"
            placeholder="e.g. Margherita Pizza"
            defaultValue={ad.foodname}
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <FileText className="inline mr-2 text-red-500" size={18} />
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows="4"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 border-gray-300"
            placeholder="Describe your food item..."
            defaultValue={ad.description}
          ></textarea>
        </div>
        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <BadgeCent className="inline mr-2 text-red-500" size={18} /> Price
          </label>
          <div className="relative">
            <input
              type="text"
              name="price"
              required
              min="0"
              className="w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 border-gray-300"
              placeholder="0.00"
              defaultValue={ad.price}
            />
          </div>
        </div>
        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Tag className="inline mr-2 text-red-500" size={18} /> Food Category
          </label>
          <select
            name="category"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 border-gray-300"
          >
            <option value="">Select a category</option>
            {foodCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Image Upload */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-6">
            <Upload className="mr-3 text-red-500" size={20} />
            <span className="font-semibold text-gray-800">
              Food Images (Upload 3)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <input
                name="pictures"
                type="file"
                accept="image/*"
                multiple
                className="w-full h-36 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-red-500 transition-colors duration-300"
              />
              <span className="mt-3 text-sm text-gray-600">Image 1</span>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center gap-3"
        >
          Post Ad
          <Upload className="text-white flex justify-center" size={20} />
        </button>
      </form>
    </div>
  );
};
export default EditVendorCard;
