import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiPhone, FiCamera } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="container-fluid mb-10 p-4 grid grid-cols-2 items-center bg-[#DEE8CE] rounded-lg shadow-lg">
      {/* اللوجو */}
      <div>
        <Link to="/" aria-label="الصفحة الرئيسية - حسام النقراشي">
          <img
            className="rounded-lg w-14 h-14 mx-auto"
            src="logo.jpg"
            alt="شعار حسام النقراشي مصور فوتوغرافي"
          />
        </Link>
      </div>

      {/* الروابط */}
      <ul className="grid grid-cols-4 justify-items-center gap-6 text-lg text-[#F08B51] font-medium">
        <li className="hover:text-[#BB6653] transition">
          <Link to="/" className="flex items-center gap-1">
            <FiHome size={20} aria-hidden="true" />
            <span>الرئيسية</span>
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/about" className="flex items-center gap-1">
            <FiUser size={20} aria-hidden="true" />
            <span>من أنا</span>
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/portfolio" className="flex items-center gap-1">
            <FiCamera size={20} aria-hidden="true" />
            <span>الأعمال</span>
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/contactme" className="flex items-center gap-1">
            <FiPhone size={20} aria-hidden="true" />
            <span>تواصل</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
