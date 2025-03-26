import React, { useState } from "react";
import { apiAddAdvert } from "../../services/adverts";
import {
  Upload,
  DollarSign,
  Tag,
  FileText,
  Utensils,
  X,
  CheckCircle,
  AlertCircle,
  BadgeCentIcon,
  BadgeCent,
} from "lucide-react";

const CreateAd = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiAddAdvert(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const foodCategories = ["local", "continental", "drinks", "desserts"];

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
        <Utensils className="inline mr-2" size={20} />
        Create an Ad
      </h2>

      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            <Tag className="inline mr-1 sm:mr-2" size={16} />
            Food Name
          </label>
          <input
            type="text"
            id="foodname"
            name="foodname"
            required
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Margherita Pizza"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            <FileText className="mr-1 sm:mr-2 flex justify-between" size={16} />
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            rows="3"
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your food item..."
          ></input>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            <BadgeCent className="inline mr-1 sm:mr-2" size={16} />
            Price
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"></span>
            <input
              type="text"
              name="price"
              required
              min="0"
              className="w-full pl-8 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            <Tag className="inline mr-1 sm:mr-2" size={16} />
            Food Category
          </label>
          <select
            name="category"
            required
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div>
          <label className="text-gray-700 font-medium mb-1 sm:mb-2">
            <Upload className="inline mr-1 sm:mr-2 " size={16} />
            Food Images (Upload 3)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="flex flex-row gap-5 items-center">
              <div className="w-full h-32 border-2 border-dashed rounded-lg cursor-pointer mb-1 sm:mb-2 border-green-500' : 'border-gray-300 hover:border-blue-500">
                <img
                  src=""
                  alt="image 1"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <input
                type="file"
                id="pictures"
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
                className="hidden"
              />
              <span className="text-sm text-gray-500"></span>
            </div>
          </div>
        </div>

        {/* 
//             {[0, 1, 2].map((index) => ( 
           <div key={index} className="flex flex-col items-center"> 
            <div
//                   className={`w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer mb-1 sm:mb-2 ${
//                     previewUrls[index] ? 'border-green-500' : 'border-gray-300 hover:border-blue-500'
//                   }`}
//                   onClick={() => document.getElementById(`image-upload-${index}`).click()}
//                 >
//                   {previewUrls[index] ? (
//                     <img
//                       src={previewUrls[index]}
//                       alt={`Preview ${index + 1}`}
//                       className="h-full w-full object-cover rounded-lg"
//                     />
//                   ) : (
//                     <Upload className="text-gray-400" size={24} />
//                   )}
//                 </div>
//                 <input
//                   type="file"
//                   id={`image-upload-${index}`}
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e, index)}
//                   className="hidden"
//                 />
//                 <span className="text-sm text-gray-500">
//                   {previewUrls[index] ? 'Change' : `Image ${index + 1}`}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
 */}
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300 flex items-center justify-center gap-3"
        >
          Post Ad
          <Upload className="text-white flex justify-center" size={20} />
        </button>
      </form>
    </div>
  );
};

export default CreateAd;

// import React, { useState } from 'react';
// import { Upload, DollarSign, Tag, FileText, Utensils, X, CheckCircle, AlertCircle, BadgeCentIcon, BadgeCent } from 'lucide-react';

// const CreateAd = () => {
//   const [formData, setFormData] = useState({
//     foodName: '',
//     description: '',
//     price: '',
//     category: '',
//   });

//   const [previewUrls, setPreviewUrls] = useState([null, null, null]);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create and set image preview URL
//       const newPreviewUrls = [...previewUrls];
//       newPreviewUrls[index] = URL.createObjectURL(file);
//       setPreviewUrls(newPreviewUrls);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Show confirmation modal instead of submitting right away
//     setShowConfirmModal(true);
//   };

//   const confirmSubmission = () => {
//     // Close confirmation modal
//     setShowConfirmModal(false);

//     // Here you would normally submit the data to your backend

//     // Show success modal
//     setShowSuccessModal(true);

//     // Reset form after success (optional)
//     setTimeout(() => {
//       setFormData({
//         foodName: '',
//         description: '',
//         price: '',
//         category: '',
//       });
//       setPreviewUrls([null, null, null]);
//     }, 500);
//   };

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   const foodCategories = [
//     "Local", "Continental", "Drinks", "Desserts",
//   ];

//   // Modal backdrop with blur effect
//   const ModalBackdrop = ({ children, onClose }) => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
//         {children}
//       </div>
//     </div>
//   );

//   // Confirmation Modal
//   const ConfirmationModal = () => (
//     <ModalBackdrop onClose={() => setShowConfirmModal(false)}>
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-4">
//           <div className="flex items-center">
//             <AlertCircle className="text-amber-500 mr-2" size={24} />
//             <h3 className="text-lg font-semibold text-gray-900">Confirm Posting</h3>
//           </div>
//           <button
//             onClick={() => setShowConfirmModal(false)}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="mb-6">
//           <p className="text-gray-700">Are you sure you want to post this ad for <span className="font-semibold">{formData.foodName || "your food item"}</span>?</p>
//           <p className="text-gray-600 text-sm mt-2">Once posted, your ad will be visible to all customers in your area.</p>
//         </div>

//         <div className="flex justify-end gap-3">
//           <button
//             onClick={() => setShowConfirmModal(false)}
//             className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={confirmSubmission}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Yes, Post Ad
//           </button>
//         </div>
//       </div>
//     </ModalBackdrop>
//   );

//   // Success Modal
//   const SuccessModal = () => (
//     <ModalBackdrop onClose={closeSuccessModal}>
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-2">
//           <div className="flex items-center">
//             <CheckCircle className="text-green-500 mr-2" size={24} />
//             <h3 className="text-lg font-semibold text-gray-900">Ad Posted Successfully!</h3>
//           </div>
//           <button
//             onClick={closeSuccessModal}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="mb-6 mt-4">
//           <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
// <p className="text-green-800">Congratulations! Your ad for <span className="font-semibold">{formData.foodName}</span> has been posted successfully!</p>
//           </div>
//           <p className="text-gray-600">Your ad is now visible to customers. You can edit or remove it anytime from your dashboard.</p>
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={closeSuccessModal}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     </ModalBackdrop>
//   );

//   return (
//     <div className="w-full max-w-2xl mx-auto mt-16 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
//         <Utensils className="inline mr-2" size={20} />Create an Ad
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//         {/* Food Name */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
//             <Tag className="inline mr-1 sm:mr-2" size={16} />
//             Food Name
//           </label>
//           <input
//             type="text"
//             name="foodName"
//             value={formData.foodName}
//             onChange={handleInputChange}
//             required
//             className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g. Margherita Pizza"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
//             <FileText className="inline mr-1 sm:mr-2" size={16} />
//             Description
//           </label>
//           <input
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//             rows="3"
//             className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Describe your food item..."
//           ></input>
//         </div>

//         {/* Price */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
//             <BadgeCent className="inline mr-1 sm:mr-2" size={16} />
//             Price
//           </label>
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"></span>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//               min="0"
//               className="w-full pl-8 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="0.00"
//             />
//           </div>
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
//             <Tag className="inline mr-1 sm:mr-2" size={16} />
//             Food Category
//           </label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//             className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select a category</option>
//             {foodCategories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
//             <Upload className="inline mr-1 sm:mr-2" size={16} />
//             Food Images (Upload 3)
//           </label>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//             {[0, 1, 2].map((index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div
//                   className={`w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer mb-1 sm:mb-2 ${
//                     previewUrls[index] ? 'border-green-500' : 'border-gray-300 hover:border-blue-500'
//                   }`}
//                   onClick={() => document.getElementById(`image-upload-${index}`).click()}
//                 >
//                   {previewUrls[index] ? (
//                     <img
//                       src={previewUrls[index]}
//                       alt={`Preview ${index + 1}`}
//                       className="h-full w-full object-cover rounded-lg"
//                     />
//                   ) : (
//                     <Upload className="text-gray-400" size={24} />
//                   )}
//                 </div>
//                 <input
//                   type="file"
//                   id={`image-upload-${index}`}
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e, index)}
//                   className="hidden"
//                 />
//                 <span className="text-sm text-gray-500">
//                   {previewUrls[index] ? 'Change' : `Image ${index + 1}`}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300 flex items-center justify-center"
//         >
//           Post Ad
//         </button>
//       </form>

//       {/* Render Modals */}
//       {showConfirmModal && <ConfirmationModal />}
//       {showSuccessModal && <SuccessModal />}
//     </div>
//   );
// };

// export default CreateAd;
