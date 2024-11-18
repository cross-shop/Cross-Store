import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Like from "../../assets/svg/Like3.svg";
import x from "../../assets/svg/x.svg";
import search from "../../assets/svg/search.svg";
import { IoCartOutline } from "react-icons/io5";
import "./Header.scss";

function Header() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleMagazinClick = () => {
    setModalVisible(true);
  };

  const handleCloseClick = () => {
    setModalVisible(false);
  };

  const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);
  const productCount = selectedProducts.length;

  return (
    <div>
      <div className="header1gg">
        <div className="header1-left">
          <div className='logo1'>
          <Link to="/">
              <p>DEALER</p>
            </Link>
          </div>
          <ul>
         
            <li>
              <Link to="/catalog">Одежда</Link>
            </li>
            <li>
              <Link to="/obuv">Обувь</Link>
            </li>
            <li>
              <Link to="/oformzakaz">Аксессуары</Link>
            </li>
            <li>
              <Link to="/proleved">Сумки</Link>
            </li>
            <li>
              <Link to="/0consignment">Товары для спорта</Link>
            </li>            
          </ul>
        </div>
        <div className="header1-img">
          <Link to="/wishlist">
            <img src={Like} alt="Wishlist" />
          </Link>

          <IoCartOutline className='cart-icon' onClick={handleMagazinClick}/>

          {isModalVisible && (
            <div className="icon2">
              <div className="modal-nur">
                <div className="modal2-nur">
                  <h2>Корзина</h2>
                  <img src={x} alt="Close" onClick={handleCloseClick} />
                </div>
                <div className="m3-nur">
                  <h5>{productCount} товара</h5>
                  <h5>Очистить</h5>
                </div>
                <div className="bm-nur">
                  <div className="bm2-nur">
                    <h2>Итого</h2>
                    <h2>{totalPrice}₽</h2>
                  </div>
                  <div className="btn-nur">
                    <button>Оформить</button>
                  </div>
                </div>
                <div className="selected-items">
                  {selectedProducts.map((item) => (
                    <div key={item.id} className="selected-item">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <div>
                        <p>{item.name}</p>
                        <h5>{item.price}₽</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <Link to="/search">
            <img src={search} alt="Search" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
