import React, { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const lastScroll = useRef(0);

  // Админ же клиент экендигин текшерүү
  const isAdmin = localStorage.getItem("role") === "admin" && localStorage.getItem("userType") === "admin" && localStorage.getItem("token");
  const isClient = localStorage.getItem("role") === "client" && localStorage.getItem("userType") === "client" && localStorage.getItem("token") && auth.currentUser;
  const isLoggedIn = isAdmin || isClient;

  const handlePersonClick = () => {
    const role = localStorage.getItem("role");
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    
    // Эгер админ болсо - админ панелге
    if (role === "admin" && userType === "admin" && token) {
      navigate("/admin");
    } 
    // Эгер клиент болсо жана логин болсо - профилге
    else if (role === "client" && userType === "client" && token && auth.currentUser) {
      navigate("/profile");
    } 
    // Эгер эч ким логин болбосо - регистрацияга
    else {
      // Эгер админ логин болсо, регистрацияга баспайт
      if (role === "admin" && userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/register");
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll.current && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.header-mobile-menu') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header-bar${isHidden ? " hidden" : ""}`}> 
        <div className="header-content container">
          <div className="logo-block">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </NavLink>
            <NavLink to="/" className="logo-text">CROSS STORE</NavLink>
          </div>
          {/* Desktop menu */}
          <nav className="main-nav">
            <NavLink to="/catalog">Каталог</NavLink>
            <div className="search-input-container">
              <input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="search-input"
              />
              <img src={search} alt="Search" className="search-icon" />
            </div>
          </nav>
          <div className="header-icons">
            <NavLink to="/search" className="icon-link">
              <img src={search} alt="Search" />
            </NavLink>
            <div onClick={handlePersonClick} className="icon-link" style={{ cursor: "pointer" }}>
              <img src={person} alt="Person" />
              {isAdmin && (
                <span className="admin-indicator">A</span>
              )}
            </div>
            {/* Cart icon - only visible on desktop/tablet */}
            <NavLink to="/basket" className="icon-counter icon-link desktop-cart">
              <img src={market} alt="Market" />
              {cartItems.length > 0 && (
                <span className="counter">{cartItems.length}</span>
              )}
            </NavLink>
            <NavLink to="/wishlist" className="icon-counter icon-link">
              <img src={wishlist} alt="Wishlist" />
              {wishlistItems.length > 0 && (
                <span className="counter">{wishlistItems.length}</span>
              )}
            </NavLink>
            <div className={`menu-toggle${menuOpen ? " active" : ""}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobile && (
          <div className={`header-mobile-menu${menuOpen ? " active" : ""}`}>
            <button className="close-btn" onClick={closeMenu}>×</button>
            <nav className="mobile-nav">
              <NavLink to="/catalog" onClick={closeMenu}>Каталог</NavLink>
              <div className="mobile-icons">
                <NavLink to="/search" className="icon-link" onClick={closeMenu}>
                  <img src={search} alt="Search" />
                </NavLink>
                <div onClick={() => {handlePersonClick(); closeMenu();}} className="icon-link" style={{ cursor: "pointer", position: "relative" }}>
                  <img src={person} alt="Person" />
                  {isAdmin && (
                    <span className="admin-indicator">A</span>
                  )}
                </div>
                <NavLink to="/wishlist" className="icon-counter icon-link" onClick={closeMenu}>
                  <img src={wishlist} alt="Wishlist" />
                  {wishlistItems.length > 0 && (
                    <span className="counter">{wishlistItems.length}</span>
                  )}
                </NavLink>
              </div>
            </nav>
          </div>
        )}
        {/* Overlay for mobile menu */}
        {isMobile && (
          <div className={`menu-overlay${menuOpen ? " active" : ""}`} onClick={closeMenu} />
        )}
      </header>
      
      {/* Floating cart for mobile */}
      {isMobile && cartItems.length > 0 && (
        <div className="floating-cart">
          <NavLink to="/basket" className="floating-cart-link">
            <span className="floating-cart-text">Корзина</span>
            <span className="floating-cart-counter">{cartItems.length}</span>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Header;
