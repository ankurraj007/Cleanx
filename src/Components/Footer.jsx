import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="Car Wash Logo" className="w-32 mb-3" />
          <p className="text-gray-400 text-sm text-center md:text-left">
            Why book a wash every time when you can subscribe and stay spotless
            all month long?
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Franchise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            📍 Sri City, Chittoor, Andhra Pradesh, India
          </p>
          <p className="text-gray-400 text-sm">📞 (123) 456-7890</p>
          <p className="text-gray-400 text-sm">✉️ support@cleanX.com</p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CleanX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
