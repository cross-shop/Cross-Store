import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import logo from "../../assets/image/logo.png";
import market from "../../assets/svg/market.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import person from "../../assets/svg/person1.svg";
import search from "../../assets/svg/headersearch.svg";
import { auth } from "../../firebase";

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.carts.ali);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);                                      

  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handlePersonClick = () => {
    if (auth.currentUser) {
      navigate("/profile");
    } else {
      navigate("/register");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <div className="header-top">
        <div className="ticker-text">
          Mid-Season Sale - Up To 40% Off - Shop Online & In-Store
        </div>
      </div>

      <div className="header-middle container">
        <div className="middle-svg">
          <div className="logo-img">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="logo">
            <a href="/">CROSS STORE</a>
          </div>

          <div className="icons">
            <NavLink to="/search">
              <img src={search} alt="Search" />
            </NavLink>

            <div onClick={handlePersonClick} style={{ cursor: "pointer" }}>
              <img src={person} alt="Person" />
            </div>

            <NavLink to="/basket" className="icon-counter">
              <img src={market} alt="Market" />
              {cartItems.length > 0 && (
                <span className="counter">{cartItems.length}</span>
              )}
            </NavLink>

            <NavLink to="/wishlist" className="icon-counter">
              <img src={wishlist} alt="Wishlist" />
              {wishlistItems.length > 0 && (
                <span className="counter">{wishlistItems.length}</span>
              )}
            </NavLink>

            <div className="menu-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div 
      className={`header-end ${menuOpen ? "active" : ""}`}>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/catalog">Каталог</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">Аксессуары</NavLink>
            </li>
            <li>
              <NavLink to="/istoria">История</NavLink>
            </li>
            <li>
              <NavLink to="help">Поддержка</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/istoriabrenda">Бренды</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
