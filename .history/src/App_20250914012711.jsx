import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home"; // لازم تستورد الكومبوننت
import Portfolio from "./pages/Portfolio";
import "./index.css";
const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="Portfolio" element={<Portfolio />} />
      </Routes>
    </div>

  );
};

export default App;
