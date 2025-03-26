
import React from 'react';
import { Link } from "react-router-dom";
import '../Footer/Footer.scss';
import fly from '../../assets/svg/fly.svg';
import google1 from '../../assets/svg/google1.svg';
import appstore from '../../assets/svg/appstore.svg';
import facebook from '../../assets/svg/facebook.svg';
import twiter from '../../assets/svg/twiter.svg';
import instagram from '../../assets/svg/instagram.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import copy from '../../assets/svg/copy.svg';
import qr from '../../assets/image/qr.png';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-info">
        <div className="ftr">
          <div className="ftr-16">
            <div className="ftr-15">
              <div className="ftr-logo">
                <p>Cross Store</p>
              </div>
              <p><Link to="/about">О нас</Link></p>
            </div>
            <p>Получите 10% скидку на первый заказ</p>
          </div>
          <div className="ftr-send">
            <input type="text" placeholder='Введите ваш email'/>
            <div className="ftr-icon">
              <img src={fly} alt="" />
            </div>
          </div>
        </div>

        <div className="support">
          <p>Клиентам</p>
          <div className="support-info">

          <p><Link to="/shipping">Доставка</Link></p>
          <p><Link to="/returns">Возврат</Link></p>
          <p><Link to="/faq">FAQ</Link></p>
          <p><Link to="/service">Клиентский сервис</Link></p>
         
          </div>
        </div>
        <div className="account">
          <p>Компания</p>
          <div className="account-info">
            

            <p><Link to="/about">О нас</Link></p>
            <p><Link to="/contacts">Контакты</Link></p>
            <p><Link to="/careers">Вакансии</Link></p>
          </div>
        </div>
        <div className="quicklink">
          <p>Быстрые ссылки</p>
          <div className="quicklink-info">
            <p>Политика конфиденциальности</p>
            <p>Условия использования</p>
            <p>Частые вопросы</p>
            <p>Контакты</p>
          </div>
        </div>
        <div className="download">
          <div className="down-info">
            <p>Скачать приложение</p>
            <div className="save">
              <p>Сэкономьте $3 при первой покупке в приложении</p>
              <div className="propasal">
                <div className="qr-code">
                  <img src={qr} alt="" />
                </div>
                <div className="google">
                  <img src={google1} alt="" />
                  <img src={appstore} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="down-icon">
           <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
           <a href="https://x.com/"> <img src={twiter} alt="" /></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
            <a href="https://ru.linkedin.com/"><img src={linkedin} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <img src={copy} alt="" />
          <p>Авторские права Cross Store 2025.Все права защищены</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
