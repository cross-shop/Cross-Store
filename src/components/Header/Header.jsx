import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"; // Иконкалар
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="hinfo container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <a href="/">Логотип</a>
        </div>
        <nav className={`navbar ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/obuv">Обувь</a>
            </li>
            <li>
              <a href="#">Аксессуары</a>
            </li>
            <li>
              <a href="#">Сумки</a>
            </li>
            <li>
              <a href="#">Товары для спорта</a>
            </li>
            <li>
              <a href="/onas">О нас</a>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <NavLink to={"/wishlist"}>
            <FaHeart size={24} className="icon" />
          </NavLink>
          <NavLink to={"/basket"}>
            <FaShoppingCart size={24} className="icon" />
          </NavLink>
          <NavLink to={"/search"}>
            <FaSearch size={24} className="icon" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
