import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Layout from "";
import "./index.css";

const App = () => {
  return (
    <Routes>
      {/* كل الصفحات جوا Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Route>
    </Routes>
  );
};

export default App;
