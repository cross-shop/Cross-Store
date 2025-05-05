import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FooteCom from "../Footer/FooteCom";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <FooteCom />
    </div>
  );
}

export default Layout;
