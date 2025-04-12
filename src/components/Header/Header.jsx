import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import market from "../../assets/svg/market.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import person from "../../assets/svg/person1.svg";
import search from "../../assets/svg/headersearch.svg";
import logo from "../../assets/image/logo.png";
import { auth } from "../../firebase";

function Header() {
  const navigate = useNavigate();

  const handlePersonClick = () => {
    if (auth.currentUser) {
      navigate("/profile");
    } else {
      navigate("/register");
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <p>Mid-Season Sale - Up To 40% Off - Shop Online & In-Store</p>
      </div>

      <div className="header-middle container">
        <div className="middle-svg">
          <div className="logo-img">
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="logo">
            <a href="/">CROSS STORE</a>
          </div>

          <div className="icons">
            <NavLink to={"/search"}>
              <img src={search} alt="Search" />
            </NavLink>

            <div onClick={handlePersonClick} style={{ cursor: "pointer" }}>
              <img src={person} alt="Person" />
            </div>

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
        <nav className="navbar">
          <ul>
            <li>
              <a href="/obuv">Обувь</a>
            </li>
            <li>
              <a href="/accessories">Акссесуары</a>
            </li>
            <li>
              <a href="/bags">Сумки</a>
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
