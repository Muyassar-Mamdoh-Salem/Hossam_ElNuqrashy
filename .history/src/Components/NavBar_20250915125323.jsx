import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiPhone, FiCamera } from "react-icons/fi"; // أيقونات

const NavBar = () => {
  return (
    <div className="container-fluid mb-10 p-4 grid grid-cols-2 items-center bg-[#DEE8CE] rounded-lg shadow-lg">
      {/* اللوجو */}
      <div>
        <Link to="/">
          <img
            className="rounded-lg w-14 h-14 mx-auto"
            src="logo.jpg"
            alt="logo"
          />
        </Link>
      </div>

      {/* الروابط */}
      <ul className="grid md:grid-cols-4 justify-items-center gap-6 text-2xl text-[#F08B51]">
        <li className="hover:text-[#BB6653] transition">
          <Link to="/">
            <FiHome size={26} />
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/contactme">
            <FiPhone size={26} />
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/portfolio">
            <FiCamera size={26} />
          </Link>
        </li>
        <li className="hover:text-[#BB6653] transition">
          <Link to="/about">
            <FiUser size={26} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
