import React, { useState, useEffect } from "react";
import {
  Edit,
  Trash2,
  Tag,
  DollarSign,
  BadgeCentIcon,
  ReceiptCentIcon,
  MoreVertical,
  MoreHorizontal,
} from "lucide-react";
import { apiGetVendorAdvert } from "../../services/adverts";
import { Link } from "react-router-dom"

// const AdCard = ({ item }) => {

//   const handleEdit = () => {
//     console.log("Edit item:", item.id);
//     // In a real app, this would open the edit form or modal
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       console.log("Delete item:", item.id);
//       // In a real app, this would trigger the delete action
//     }
//   };
// };

const VendorAdCard = () => {
  const [ads, setAds] = useState([]);
  const imageURL = "https://res.cloudinary.com/dyfpxokoj/image/upload/";

  const getAds = async () => {
    try {
      const response = await apiGetVendorAdvert();
      setAds(response.data.adverts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Menu Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <div className="bg-red-100 rounded-lg shadow-lg overflow-hidden">
            {/* Image carousel */}
            <div className="relative h-48 sm:h-64">
              <img
                src={`${imageURL}${ad.pictures[0]}`}
                alt="item name"
                className="h-full w-full object-cover"
              />

              {/* Category badge */}
              <div className="absolute top-8 left-3 bg-red-600 text-white px-5 py-2 rounded-full text-s font-semibold flex items-center">
                <Tag size={12} className="mr-1" />
                {ad.category}
              </div>
            </div>

            {/* Content section */}
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">
                  {ad.foodname}
                </h3>
                <div className="flex items-center text-lg font-bold text-red-600">
                  <ReceiptCentIcon size={18} className="inline" />
                  {ad.price}
                </div>
              </div>

              <p className="mt-2 text-gray-600">{ad.description}</p>

              {/* Thumbnail gallery */}
              <div className="flex gap-3">
                <div className="mt-4 flex space-x-2">
                  <img
                    src={`${imageURL}${ad.pictures[1]}`}
                    alt="ad name"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
                <div className="mt-4 flex space-x-2">
                  <img
                    src={`${imageURL}${ad.pictures[2]}`}
                    alt="ad name"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex space-x-2">
             <Link to="/dashboard/single-ad">
             <button className="flex items-center justify-center bg-white border border-red-500 text-red-500 hover:bg-red-300 py-2 px-4 rounded-lg transition duration-300">
                  <MoreHorizontal size={16} />
                </button>
             </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorAdCard;
