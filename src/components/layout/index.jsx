import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/index.jsx";
import Header from "../header/index.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
