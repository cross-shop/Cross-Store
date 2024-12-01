import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart as Heart } from "react-icons/fa6";
import { IoCartOutline as Cart } from "react-icons/io5";
import { ImSearch as Search} from "react-icons/im";
import "./Header.scss";

function Header() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false); // Корзина көрүүчү абал

  const addProductToCart = (product) => {
    setSelectedProducts(prev => [...prev, product]);
  };

  const removeProductFromCart = (productId) => {
    setSelectedProducts(prev => prev.filter(product => product.id !== productId));
  };

  const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);
  const productCount = selectedProducts.length;

  return (
    <div className="header">
      <div className="header__left container">
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
        <Heart />
        </Link>

        {/* Корзина иконкасы, аны басканда корзина көрүнөт */}
        <Link to="/basket">
          <Cart 
            className='header__icon header__cart-icon' 
            onClick={() => setCartVisible(!isCartVisible)} // Корзинанын көрүнүүсүн которуу
          />
        </Link>

        <Link to="/search">
          <Search />
        </Link>

      </div>
    </div>
  );
}

export default Header;
