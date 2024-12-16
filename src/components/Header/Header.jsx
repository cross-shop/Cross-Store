import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart as Heart } from "react-icons/fa6";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { ImSearch as Search } from "react-icons/im";
import { useSelector } from 'react-redux';
import "./Header.scss";

function Header() {
  const { ali } = useSelector((state) => state.carts);

  const getTotalItems = () => {
    return ali.length;
  };

  return (
    <header>
      <div className="header">
        <div className="header__left">
          <div className='logo'>
            <Link to="/">
              <strong>DEALER</strong>
            </Link>
          </div>
          <ul className="header__menu">
            <li><Link to="/catalog">Одежда</Link></li>
            <li><Link to="/obuv">Обувь</Link></li>
            <li><Link to="/oformzakaz">Аксессуары</Link></li>
            <li><Link to="/proleved">Сумки</Link></li>
            <li><Link to="/0consignment">Товары для спорта</Link></li>
          </ul>
        </div>
        <div className="header__right">
          <Link to="/wishlist">
            <Heart className='header-icon' />
          </Link>

          <Link to="/basket">
            <Cart className='header-icon' />
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>

          <Link to="/search">
            <Search className='header-icon' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
