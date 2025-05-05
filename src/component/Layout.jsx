import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
