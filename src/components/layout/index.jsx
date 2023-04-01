import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";

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
