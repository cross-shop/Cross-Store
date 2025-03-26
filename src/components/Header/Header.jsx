import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import market from "../../assets/svg/market.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import person from "../../assets/svg/person1.svg";
import search from "../../assets/svg/headersearch.svg";

function Header() {
  return (
    <header className="header " >
      <div className="header-top">
        <p>Mid-Season Sale - Up To 40% Off - Shop Online & In-Store</p>
      </div>
      <div className="header-middle">
        <div className="middle-svg">
          <div className="logo">
            <a href="/">CROSS STORE</a>
          </div>

          <div className="icons">
            <NavLink to={"/search"}>
              <img src={search} alt="Search" />
            </NavLink>

            <NavLink className={person} to={"/search"}>
              <img src={person} alt="Person" />
            </NavLink>

            <NavLink to={"/basket"}>
              <img src={market} alt="Market" />
            </NavLink>

            <NavLink to={"/wishlist"}>
              <img src={wishlist} alt="Wishlist" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="header-end">
        <nav className={`navbar`}>
          <ul>
            <li>
              <a href="/obuv">Обувь</a>
            </li>
            <li>
              <a href="">Аксессуары</a>
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
            <li>
              <a href="/istoriabrenda">Бренды</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
