import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* روابط الصفحات */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/aboutme" className="hover:text-white transition">About</Link>
          <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link to="/contactme" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* أيقونات التواصل */}
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="tel:+201234567890"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <FaPhoneAlt size={20} />
          </a>
        </div>
      </div>

      {/* النص السفلي */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Hossam Photography. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
