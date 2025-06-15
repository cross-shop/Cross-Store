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
          <a style={{color: "black"}} href="/admin">-</a>
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
                <Link to="">Одежда</Link>
              </li>
              <li>
                <Link to="">Обувь</Link>
              </li>
              <li>
                <Link to="">Аксессуары</Link>
              </li>
              <li>
                <Link to="">Сумки</Link>
              </li>
              <li>
                <Link to="">Товары для спорта</Link>
              </li>
              <li>
                <Link to="">Pre-loved</Link>
              </li>
              <li>
                <Link to="">Custom</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Меню</h4>
            <ul>
              <li>
                <Link to="">О нас</Link>
              </li>
              <li>
                <Link to="">Продать свою одежду</Link>
              </li>
              <li>
                <Link to="">Консерьж</Link>
              </li>
              <li>
                <Link to="">Клиентский сервис</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Поддержка</h4>
            <ul>
              <li>
                <Link to="">Доставка</Link>
              </li>
              <li>
                <Link to="">Оплата</Link>
              </li>
              <li>
                <Link to="">Частые вопросы</Link>
              </li>
              <li>
                <Link to="">Клиентский сервис</Link>
              </li>
              <li>
                <Link to="">Отследить заказ</Link>
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