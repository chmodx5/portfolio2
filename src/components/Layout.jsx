import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="bg-gray-100 min-h-screen pt-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
