import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home"; // لازم تستورد الكومبوننت

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
