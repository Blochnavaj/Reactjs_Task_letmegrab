import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">MyBrand</h2>
          <p className="text-sm text-gray-400">
            Creating great experiences with modern web technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/products" className="hover:text-white">Products</NavLink></li>
            <li><NavLink to="/login" className="hover:text-white">Login</NavLink></li>
            <li><NavLink to="/signup" className="hover:text-white">Sign Up</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: info@mybrand.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
