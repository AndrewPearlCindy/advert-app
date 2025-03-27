import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/images/vennace.png";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "consumer", // Default role
    shopName: "",
    socialMediaLink: "",
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

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.role === "vendor") {
      if (!formData.shopName) newErrors.shopName = "Shop name is required";
      if (!formData.socialMediaLink)
        newErrors.socialMediaLink = "Social Media link is required";
      if (!formData.openHours) newErrors.openHours = "Open hours are required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        "https://advertisement-system.onrender.com/api/v1/users/register",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      console.log("here too");

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Registration successful!");
      navigate("/verification");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets/images/Vendorloginbg.jpg')]">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md ">
        <div className="flex justify-center mb-8 grid-cols-1 ">
          
          <img src={logo} alt="VENNACE" />
        </div>
        <h2 className="w-full flex justify-center bg-red-600 text-white text-2xl font-bold mb-8 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
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

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password *
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
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

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="socialMediaLink"
                >
                  Social Media Link *
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.socialMediaLink
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  type="text"
                  id="socialMediaLink"
                  name="socialMediaLink"
                  value={formData.socialMediaLink}
                  onChange={handleChange}
                  placeholder="Enter your social media link"
                />
                {errors.socialMediaLink && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.socialMediaLink}
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
              className="w-full bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center m-6">
          <p className="font-bold ">Already have an account?</p>
          <a
            href="/login"
            className="text-blue-600 font-bold ml-2 hover:text-blue-400"
          >
            {" "}
            Log In{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
