import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FooteCom from "../Footer/FooteCom";
import ScrollToTop from "../ScrollToTop";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout-wrapper">
      <main className="main-content"></main>
      <ScrollToTop />
      <Header />
      <Outlet />
      <FooteCom />
    </div>
  );
}

export default Layout;
