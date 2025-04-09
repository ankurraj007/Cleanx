import React, { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    plan: "basic",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking Confirmed! 🚗✨");
  };

  return (
    <div className="noto-sans-canadian-aboriginal max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-36">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Start your journey🚘✨
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ankur Raj"
            required
            className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 8825******"
            required
            className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@gmail.com"
            required
            className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, ZIP"
            required
            className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subscription Plan */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Subscription Plan
          </label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="basic"> Express Wash - Daily service</option>
            <option value="premium"> Pro Wash - 3 washes/week</option>
            <option value="ultimate"> Luxury Spa - Unlimited washes</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg mt-4 hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Book;
