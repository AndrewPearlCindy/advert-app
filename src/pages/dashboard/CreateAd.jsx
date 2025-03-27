import React, { useState } from "react";
import { apiAddAdvert } from "../../services/adverts";
import { Upload, Tag, FileText, Utensils, BadgeCent } from "lucide-react";

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
            id="foodname"
            type="text"
            name="foodname"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 border-gray-300"
            placeholder="e.g. Margherita Pizza"
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
                className="w-full h-36 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-red-500 transition-colors duration-300"
              />
              {/* <span className="mt-3 text-sm text-gray-600">Image 1</span> */}
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
export default CreateAd;

// import { useState } from "react"
// import { Upload, Tag, FileText, Utensils, BadgeCent, Loader2 } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { apiAddAdvert } from "../../services/adverts"

// const CreateAd = () => {
//   const navigate = useNavigate()

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [previewImages, setPreviewImages] = useState([false])
//   const [uploadedImageIds, setUploadedImageIds] = useState([false])
//   const [error, setError] = useState("")

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     setIsSubmitting(true)
//     setError("")

//     const formData = new FormData(event.target)

//     // If we have preview images but no uploaded images, show an error
//     if (previewImages.length > 0 && uploadedImageIds.length === 0) {
//       setError("Please wait for images to finish uploading")
//       setIsSubmitting(false)
//       return
//     }

//     try {
//       // Add the image IDs to the form data if available
//       if (uploadedImageIds.length > 0) {
//         // Remove any existing pictures from formData
//         formData.delete("pictures")

//         // Add each image ID to the formData
//         uploadedImageIds.forEach((id) => {
//           formData.append("pictures", id)
//         })
//       }

//       // Call the API to add the advert
//       const response = await apiAddAdvert(formData)
//       console.log("Ad created successfully:", response)

//       // Navigate to the vendor ads page after successful submission
//       navigate("/dashboard/vendor-ads")
//     } catch (error) {
//       console.error("Error creating ad:", error)
//       setError("Failed to create advertisement. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // This function would handle the actual image upload to Cloudinary
//   // In a real implementation, you would call your API to upload the image
//   const handleImageUpload = async (file, index) => {
//     // Create a mock upload function that simulates uploading to Cloudinary
//     // In a real implementation, you would replace this with your actual upload code
//     const mockUploadToCloudinary = async (file) => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           // Generate a mock Cloudinary ID
//           const mockCloudinaryId = `food_${Date.now()}_${index}`
//           resolve(mockCloudinaryId)
//         }, 1500) // Simulate upload delay
//       })
//     }

//     try {
//       // Upload the image and get the Cloudinary ID
//       const cloudinaryId = await mockUploadToCloudinary(file)

//       // Update the uploadedImageIds state
//       setUploadedImageIds((prev) => {
//         const newIds = [...prev]
//         newIds[index] = cloudinaryId
//         return newIds
//       })

//       return cloudinaryId
//     } catch (error) {
//       console.error("Error uploading image:", error)
//       return null
//     }
//   }

//   const handleImageChange = async (e, index) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       // Create a local preview
//       const newPreviewImages = [...previewImages]
//       newPreviewImages[index] = URL.createObjectURL(file)
//       setPreviewImages(newPreviewImages)

//       // Upload the image to get a Cloudinary ID
//       await handleImageUpload(file, index)
//     }
//   }

//   const foodCategories = ["local", "continental", "drinks", "desserts"]

//   return (
//     <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       {/* Header */}
//       <div className="bg-red-600 -mx-6 -mt-6 px-6 py-4 rounded-t-lg mb-6 shadow-md">
//         <h2 className="text-2xl font-bold text-white flex items-center justify-center">
//           <Utensils className="inline mr-2" size={24} />
//           Create a Food Advertisement
//         </h2>
//       </div>

//       {/* Form */}
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         {/* Error message */}
//         {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

//         {/* Food Name */}
//         <div>
//           <label className="block text-gray-800 font-medium mb-2">
//             <Tag className="inline mr-2 text-red-600" size={18} />
//             Food Name
//           </label>
//           <input
//             type="text"
//             id="foodname"
//             name="foodname"
//             required
//             className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300"
//             placeholder="e.g. Margherita Pizza"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-gray-800 font-medium mb-2">
//             <FileText className="inline mr-2 text-red-600" size={18} />
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             required
//             rows="4"
//             className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300"
//             placeholder="Describe your food item..."
//           ></textarea>
//         </div>

//         {/* Price */}
//         <div>
//           <label className="block text-gray-800 font-medium mb-2">
//             <BadgeCent className="inline mr-2 text-red-600" size={18} />
//             Price
//           </label>
//           <div className="relative">
//             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
//             <input
//               type="text"
//               name="price"
//               required
//               min="0"
//               className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300"
//               placeholder="0.00"
//             />
//           </div>
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-gray-800 font-medium mb-2">
//             <Tag className="inline mr-2 text-red-600" size={18} />
//             Food Category
//           </label>
//           <select
//             name="category"
//             required
//             className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300 bg-white"
//           >
//             <option value="">Select a category</option>
//             {foodCategories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Image Upload */}
//         <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
//           <div className="flex items-center mb-4">
//             <Upload className="mr-3 text-red-600" size={20} />
//             <span className="font-semibold text-gray-800">Food Images (Upload 3)</span>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {[0, 1, 2].map((index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-full h-36 mb-2">
//                   {previewImages[index] ? (
//                     <div className="w-full h-full rounded-lg overflow-hidden border-2 border-red-400 relative">
//                       <img
//                         src={previewImages[index] || "/placeholder.svg"}
//                         alt={`Preview ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                       {!uploadedImageIds[index] && (
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                           <Loader2 className="animate-spin text-white" size={24} />
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <label
//                       htmlFor={`image-${index}`}
//                       className="w-full h-full flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded-lg hover:border-red-500 bg-white"
//                     >
//                       <Upload className="text-red-400 mb-2" size={24} />
//                       <span className="text-sm text-gray-500">Click to upload</span>
//                     </label>
//                   )}
//                   <input
//                     id={`image-${index}`}
//                     name={`pictures`}
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={(e) => handleImageChange(e, index)}
//                   />
//                 </div>
//                 <span className="text-sm text-gray-600">Image {index + 1}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-black hover:bg-red-600 text-white py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-3 shadow-md disabled:opacity-70"
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2 className="animate-spin" size={20} />
//               Processing...
//             </>
//           ) : (
//             <>
//               Post Advertisement
//               <Upload size={20} />
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default CreateAd
