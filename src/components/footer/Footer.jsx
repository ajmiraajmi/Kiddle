import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Logo and About Section */}
        <div>
          <h2 className='text-3xl font-bold '>Ki<span className="text-red-900">dd</span><span className="text-yellow-600">le</span></h2>
          <p className="text-base mt-2">
            EduToys is a one-stop shop for educational and learning toys that 
            inspire curiosity and creativity in children. Our collection includes 
            math, language, and science-based toys to help children develop essential skills.
          </p>
        </div>

        {/* Quick Links */}
        <div className='mx-16'>
          <h3 className="text-xl font-semibold mb-4 text-emerald-600">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Categories</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-emerald-600">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Shipping & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Order Tracking</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-emerald-600">Get In Touch</h3>
          <p className="mb-2">
            <strong>Email:</strong> support@kiddle.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 Toy Street, Education City
          </p>
          <div className="flex space-x-4 mt-4 gap-8">
            <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-600 pt-6 mt-8 text-xl">
        &copy; {new Date().getFullYear()} Kiddle. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
