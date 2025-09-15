import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home"; // لازم تستورد الكومبوننت
import Portfolio from "./pages/Portfolio";

import AboutMe from "./pages/AboutMe";
import "./index.css";
const App = () => {
  return (
    <div className=" mx-auto p-4 bg-[#FFF8E8]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="AboutMe" element={<AboutMe />} />
      </Routes>
    </div>

  );
};

export default App;
