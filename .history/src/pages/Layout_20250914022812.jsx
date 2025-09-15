import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8E8]">
      {/* النافبار */}
      <NavBar />

      {/* الصفحات تتغير هنا */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Layout;
