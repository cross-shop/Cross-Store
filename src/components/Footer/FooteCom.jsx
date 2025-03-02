import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-column">
            <h4>Компания</h4>
            <ul>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
              <li><Link to="/careers">Вакансии</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Клиентам</h4>
            <ul>
              <li><Link to="/shipping">Доставка</Link></li>
              <li><Link to="/returns">Возврат</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Следите за нами</h4>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2025 DEALER. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
