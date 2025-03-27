import React, { useEffect, useState } from "react";
import {
  Trash2,
  Edit,
  X,
  AlertCircle,
  CheckCircle,
  Save,
  TagIcon,
  ReceiptCentIcon,
  SkipBack,
  Link2Icon,
  ArrowBigLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {
  apiDeleteVendorAdvertById,
  apiGetVendorAdvertById,
} from "../../services/adverts";
import { useNavigate } from "react-router";

const VendorAdCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ad, setAd] = useState({});
  const imageURL = "https://res.cloudinary.com/dyfpxokoj/image/upload/";

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

  const handleDelete = async () => {
    //Delete ad from backend
    try {
      const response = await apiDeleteVendorAdvertById(ad.id);
      console.log(response.data);
      navigate("/dashboard/ads");
    } catch (error) {
      console.log(error);
    }
  };

  const goToVenderAds = () => {
    navigate("/dashboard/ads");

    return <button onClick={goToVenderAds}>Back to Ads</button>;
  };

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

          </div>
        </div>


      {/* Food information */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {" "}
            {ad.foodname}
          </h3>
          <p className="flex items-center text-lg font-bold text-red-600">
            <ReceiptCentIcon size={18} className="inline" /> {ad.price}
          </p>
        </div>

        <p className="mt-2 text-gray-600">{ad.description}</p>

        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {ad.vendorId?.socialMediaLink}
          </h3>
          <p className="flex items-center text-lg font-bold text-red-600">
            <Link2Icon size={18} className="inline" /> {ad.vendorId?.openHours}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <Link
            to={`/dashboard/edit-ad/${ad.id}`}
            className="flex-1 flex items-center justify-center bg-black hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <Edit size={16} className="mr-2" />
            Edit Item
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center bg-black text-white hover:bg-red-500 hover:text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <Trash2 size={16} />
          </button>

          <button className="flex items-center justify-center bg-black text-white hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300">
            <ArrowBigLeft size={16} />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VendorAdCard;


