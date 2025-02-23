import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop shop for quality products at unbeatable prices. Fast
            delivery, easy returns, and 24/7 customer support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="hover:text-white transition">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/returns" className="hover:text-white transition">
                Returns & Refunds
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <NavLink to="/shipping" className="hover:text-white transition">
                Shipping Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className="hover:text-white transition">
                Support Center
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">Need Help?</h3>
          <p className="text-sm text-gray-400">📞 +91 9876543210</p>
          <p className="text-sm text-gray-400">📩 support@example.com</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <h3 className="text-sm font-semibold text-gray-400">We Accept</h3>
        <div className="flex justify-center space-x-4 mt-2 text-gray-400 text-3xl">
          <FaCcVisa className="hover:text-white transition" />
          <FaCcMastercard className="hover:text-white transition" />
          <FaCcPaypal className="hover:text-white transition" />
          <FaCcAmazonPay className="hover:text-white transition" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} E-Shop. All Rights Reserved</p>
        <div className="flex justify-center space-x-5 mt-3">
          <NavLink to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-conditions"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
