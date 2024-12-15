import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart as Heart } from "react-icons/fa6";
import { IoCartOutline as Cart } from "react-icons/io5";
import { ImSearch as Search} from "react-icons/im";
import "./Header.scss";

function Header() {
  return (
    <header>
    <div className="header">
      <div className="header__left ">
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
        <Heart className='header-icon'/>
        </Link>

        <Link to="/basket">
          <Cart 
          className='header-icon'
          />
        </Link>

        <Link to="/search">
          <Search className='header-icon'/>
        </Link>

      </div>
    </div>
    </header>
  );
}

export default Header;
