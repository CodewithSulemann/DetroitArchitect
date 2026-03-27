import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaVk, FaYoutube } from "react-icons/fa";
import contactBg from "../Assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] min-h-screen bg-purple-600 flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-4xl flex flex-col gap-4 md:block md:h-[580px]">

        {/* Background Image Block */}
        <div className="w-full h-72 md:absolute md:right-0 md:top-8 md:w-3/4 md:h-full rounded-xl overflow-hidden z-0">
          <img
            src={contactBg}
            alt="design"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* White Card - thora niche kiya top-10 se */}
        <div className="w-full md:absolute md:top-10 md:left-0 md:w-72 z-10 bg-white rounded-xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-pink-600">Contact Us</h1>
        </div>

        {/* Pink Card */}
        <div className="w-full md:absolute md:bottom-0 md:left-36 md:w-72 z-10 bg-pink-500 rounded-xl p-8 shadow-xl">
          <h3 className="text-white font-bold text-lg tracking-widest mb-2">CALL US</h3>
          <p className="text-pink-100 text-sm mb-1">+1 (313) 869 6900</p>
          <p className="text-pink-100 text-sm mb-5">Lisa.hooe@DetroitArchitect.com</p>

          <h3 className="text-white font-bold text-lg tracking-widest mb-2">OUR OFFICES</h3>
          <p className="text-pink-100 text-sm mb-6">
            13718 Woodward Ave,<br />
            Highland Park,<br />
            MI 48203
          </p>

          <h3 className="text-white font-bold text-lg tracking-widest mb-2">WORKING HOURS</h3>
          <p className="text-pink-100 text-sm mb-6">
            9AM - 5 PM, Mon to Fri
          </p>

          {/* Social Icons - fix kiye */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-all duration-200">
              <FaFacebookF size={15} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-all duration-200">
              <FaTwitter size={15} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-all duration-200">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-all duration-200">
              <FaVk size={15} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-all duration-200">
              <FaYoutube size={15} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;