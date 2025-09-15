import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home"; // لازم تستورد الكومبوننت
import Portfolio from "./pages/Portfolio";

import AboutMe from "./pages/AboutMe";
import "./index.css";
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * App component which renders the main routes of the application.
 * 
 * @returns {JSX.Element} The App component.
 */
/*******  1598c795-a4de-4876-bb65-a42618f73bed  *******/
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
