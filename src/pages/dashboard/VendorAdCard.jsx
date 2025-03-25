import React, { useState } from 'react';
import { Trash, Edit, X, AlertCircle, CheckCircle, Save } from 'lucide-react';

const VendorAdCard = ({ food }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);
  
  // Example food item (in a real app, this would be passed as a prop)
  const defaultFood = {
    id: 1,
    name: "Spicy Thai Basil Noodles",
    description: "Stir-fried rice noodles with fresh Thai basil, bell peppers, and spicy chili sauce. Served with a side of lime and bean sprouts.",
    price: 12.99,
    category: "Thai Cuisine",
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  };

  const foodItem = food || defaultFood;

  const handleDelete = () => {
    console.log(`Deleting food item: ${foodItem.id}`);
    setShowDeleteModal(false);
    // Here you would call your delete API
    setShowDeleteSuccess(true);
    
    // Auto-dismiss success message after 3 seconds
    setTimeout(() => {
      setShowDeleteSuccess(false);
    }, 3000);
  };

  const handleEdit = () => {
    console.log(`Editing food item: ${foodItem.id}`);
    // Here you would navigate to the edit form
  };
  
  const handlePublishChanges = () => {
    console.log(`Publishing changes for food item: ${foodItem.id}`);
    setShowPublishModal(false);
    // Here you would call your publish API
    setShowPublishSuccess(true);
    
    // Auto-dismiss success message after 3 seconds
    setTimeout(() => {
      setShowPublishSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto my-16">
      {/* Image Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-64">
          {foodItem.images.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full h-full snap-center snap-always"
            >
              <img
                src={image}
                alt={`${foodItem.name} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {foodItem.category}
        </div>
      </div>
      
      {/* Food information */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{foodItem.name}</h3>
          <p className="text-lg font-bold text-orange-500">${foodItem.price.toFixed(2)}</p>
        </div>
        
        <p className="mt-2 text-gray-600 text-sm">{foodItem.description}</p>
        
        {/* Action buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
            aria-label="Delete item"
          >
            <Trash size={20} />
          </button>
          
          <button 
            onClick={handleEdit}
            className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors"
            aria-label="Edit item"
          >
            <Edit size={20} />
          </button>
          
          <button 
            onClick={() => setShowPublishModal(true)}
            className="p-2 text-green-500 hover:bg-green-100 rounded-full transition-colors"
            aria-label="Publish changes"
          >
            <Save size={20} />
          </button>
        </div>
      </div>
      
      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-red-500">
                <AlertCircle className="mr-2" size={24} />
                <h3 className="text-lg font-semibold">Confirm Deletion</h3>
              </div>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <p>Are you sure you want to delete "{foodItem.name}"? This action cannot be undone.</p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete success message */}
      {showDeleteSuccess && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={24} />
          <div>
            <h4 className="font-semibold">Success!</h4>
            <p className="text-sm text-gray-600">"{foodItem.name}" has been deleted successfully.</p>
          </div>
        </div>
      )}
      
      {/* Publish changes confirmation modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-blue-500">
                <Save className="mr-2" size={24} />
                <h3 className="text-lg font-semibold">Publish Changes</h3>
              </div>
              <button 
                onClick={() => setShowPublishModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <p>Are you sure you want to publish your changes to "{foodItem.name}"? This will make your changes visible to customers.</p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowPublishModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Not Now
              </button>
              <button 
                onClick={handlePublishChanges}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Publish success message */}
      {showPublishSuccess && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={24} />
          <div>
            <h4 className="font-semibold">Success!</h4>
            <p className="text-sm text-gray-600">Your changes to "{foodItem.name}" have been published.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorAdCard;