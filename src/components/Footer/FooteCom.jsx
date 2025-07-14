import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.scss";
import instagram from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twiter.svg";
import linkedin from "../../assets/svg/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h2>CROSS STORE</h2>
          <p>
            Ваш поставщик в мир лимитированного ассортимента с доставкой по 
            всему миру
          </p>
          <div className="sait">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

          <div className="footer-section">
            <h4>Каталог</h4>
            <ul>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/search">Поиск</Link>
              </li>
              <li>
                <Link to="/wishlist">Избранное</Link>
              </li>
              <li>
                <Link to="/basket">Корзина</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Аккаунт</h4>
            <ul>
              <li>
                <Link to="/register">Регистрация</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <Link to="/payment">Оплата</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="mailto:help@dealerclub.com">Email: help@dealerclub.com</a>
              </li>
              <li>
                <a href="mailto:info@dealermsk.com">Email: info@dealermsk.com</a>
              </li>
              <li>
                <a href="tel:+79295550004">Телефон: +7 (929) 555-00-04</a>
              </li>
            </ul>
          </div>
      </div>

      <div className="footer-bottom container">
        <p>
          <Link to="">Политика конфиденциальности</Link> |{" "}
          <Link to="">Пользовательское соглашение</Link>
        </p>
        <p>
          Email: <a href="mailto:help@dealerclub.com">help@dealerclub.com</a> |{" "}
          <a href="mailto:info@dealermsk.com">info@dealermsk.com</a>
        </p>
        <p>
          Телефон: <a href="tel:+79295550004">+7 (929) 555-00-04</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;