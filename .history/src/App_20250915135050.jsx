import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Layout from "./pages/Layout";
import "./index.css";
<RiseLoader />

const App = () => {
  return (
useEffect(()=>{
setTimeout(()=>{
  <RiseLoader />
},[])
    <Routes>
      {/* كل الصفحات جوا Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  );
};

export default App;
