import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Layout from "./pages/Layout";
import "./index.css";
import { RiseLoader } from "react-spinners"; // لازم تنزل المكتبة

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // هيخلي اللودر يبان 2 ثانية
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <RiseLoader color="#000033" size={15} />
      </div>
    );
  }

  return (
    <Routes>
      {/* كل الصفحات جوا Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
