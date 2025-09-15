import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Layout from "./pages/Layout";
import "./index.css";
import { RiseLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="flex items-center justify-center h-screen bg-[#DEE8CE]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <RiseLoader color="#BB6653" size={15} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contactme" element={<ContactMe />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
