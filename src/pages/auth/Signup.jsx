import React, { useState } from "react";
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    role: "consumer", // Default role
    shopName: "",
    whatsappContact: "",
    openHours: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields for all users
    if (!formData.email) newErrors.email = "Full name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    // Validate required fields for vendors only
    if (formData.role === "vendor") {
      if (!formData.shopName) newErrors.shopName = "Shop name is required";
      if (!formData.socialMediaHandle)
        newErrors.socialMediaHandle = "Social Media Handle is required";
      if (!formData.openHours) newErrors.openHours = "Open hours are required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with submission
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets/images/Vendorloginbg.jpg')]">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* E-mail */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-Mail *
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Username */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username *
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              I am a: *
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="consumer"
                  checked={formData.role === "consumer"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Consumer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="vendor"
                  checked={formData.role === "vendor"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Vendor</span>
              </label>
            </div>
          </div>

          {/* Vendor-specific fields */}
          {formData.role === "vendor" && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-bold text-lg mb-4">Vendor Information</h3>

              {/* Shop Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="shopName"
                >
                  Shop Name *
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.shopName ? "border-red-500" : "border-gray-300"
                  }`}
                  type="text"
                  id="shopName"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="Enter your shop name"
                />
                {errors.shopName && (
                  <p className="text-red-500 text-xs mt-1">{errors.shopName}</p>
                )}
              </div>

              {/* Social Media Handles */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="socialMediaPlatform"
                >
                  Select Social Media Platform *
                </label>
                <select
                  id="socialMediaPlatform"
                  name="socialMediaPlatform"
                  value={formData.socialMediaPlatform}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg mb-4"
                >
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="socialMediaHandle"
                >
                  Social Media Handle *
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.socialMediaHandle
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  type="text"
                  id="socialMediaHandle"
                  name="socialMediaHandle"
                  value={formData.socialMediaHandle}
                  onChange={handleChange}
                  placeholder="Enter your social media handle"
                />
                {errors.socialMediaHandle && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.socialMediaHandle}
                  </p>
                )}
              </div>

              {/* Open Hours */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="openHours"
                >
                  Open Hours *
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.openHours ? "border-red-500" : "border-gray-300"
                  }`}
                  type="text"
                  id="openHours"
                  name="openHours"
                  value={formData.openHours}
                  onChange={handleChange}
                  placeholder="e.g., Mon-Fri: 9AM-5PM"
                />
                {errors.openHours && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.openHours}
                  </p>
                )}
              </div>

              {/* Profile Picture */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="profilePicture"
                >
                  Profile Picture
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
