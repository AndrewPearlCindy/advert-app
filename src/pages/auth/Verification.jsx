import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { apiVerifyEmail } from "../../services/auth";
import logo from "../../assets/images/vennace.png";

const Verification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiVerifyEmail(formData);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

    // Simple validation
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = "Code must be 6 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Verification submitted:", formData);
    // Handle verification logic (API call, etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets/images/Vendorloginbg.jpg')]">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md ">
        <div className="flex justify-center mb-8 grid-cols-1 ">
          <img src={logo} alt="VENNACE" />
        </div>
        <h2 className="w-full flex justify-center bg-red-600 text-white text-2xl font-bold mb-8 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Verify Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Verification Code Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="verificationCode"
            >
              Verification Code *
            </label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              placeholder="Enter 6-digit code"
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.verificationCode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.verificationCode && (
              <p className="text-red-500 text-xs mt-1">
                {errors.verificationCode}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
