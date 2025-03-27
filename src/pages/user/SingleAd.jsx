import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  TagIcon,
  ReceiptCentIcon,
  ArrowBigLeft,
  Link2Icon,
} from "lucide-react";
import { apiGetSingleAdvert } from "../../services/adverts";

const SingleAd = () => {
  const { id } = useParams();

  const [ad, setAd] = useState({});
  const imageURL = "https://res.cloudinary.com/dyfpxokoj/image/upload/";

  const getAd = async () => {
    try {
      const response = await apiGetSingleAdvert(id);
      setAd(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  return (
    <div className="bg-red-100 rounded-lg shadow-md overflow-hidden max-w-md mx-auto my-16">
      {/* Image Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-64">
          <div className="flex-shrink-0 w-full h-full snap-center snap-always">
            <img
              src={`${imageURL}${ad.pictures?.[0]}`}
              alt="foodname"
              className="w-full h-full object-cover"
            />
            <img
              src={`${imageURL}${ad.pictures?.[1]}`}
              alt="foodname"
              className="w-full h-full object-cover"
            />
            <img
              src={`${imageURL}${ad.pictures?.[2]}`}
              alt="foodname"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-8 left-3 bg-red-600 text-white px-5 py-2 rounded-full text-s font-semibold flex items-center">
          <TagIcon size={12} className="mr-1" />
          {ad.category}
        </div>
      </div>

      {/* Food information */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{ad.foodname}</h3>
          <p className="flex items-center text-lg font-bold text-red-600">
            <ReceiptCentIcon size={18} className="inline" /> {ad.price}
          </p>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{ad.shopName}</h3>
          <p className="flex items-center text-lg font-bold text-red-600"></p>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {ad.vendorId?.socialMediaLink}
          </h3>
          <p className="flex items-center text-lg font-bold text-red-600">
            <Link2Icon size={18} className="inline" /> {ad.openHours}
          </p>
        </div>

        <p className="mt-2 text-gray-600">{ad.description}</p>

        {/* Action buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <Link to="/adverts">
            <button className="flex-1 flex items-center justify-center bg-black text-white hover:bg-blue-500 py-2 px-4 rounded-lg transition duration-300">
              <ArrowBigLeft size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
