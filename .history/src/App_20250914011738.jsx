import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home"; // لازم تستورد الكومبوننت

import "./index.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
      </Routes>
    </div>

  );
};

export default App;
