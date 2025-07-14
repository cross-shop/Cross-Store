import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FooteCom from "../Footer/FooteCom";
import ScrollToTop from "../ScrollToTop";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout-wrapper">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <FooteCom />
    </div>
  );
}

export default Layout;
