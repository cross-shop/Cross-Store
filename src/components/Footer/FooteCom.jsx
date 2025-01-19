import React from 'react';
import './Footer.scss';
import dealer from '../../assets/svg/dealerlogo.svg';
import telegram from '../../assets/svg/telegram.svg';
import wk from '../../assets/svg/wk.svg';

function FooterCom() {
  return (
    <footer className='footer'>
      <div className='info1'>
        <div className='footer-section'>
          <img src={dealer} alt='Dealer logo' />
          <p>
            Ваш поставщик в мир лимитированного ассортимента с доставкой по всему миру
          </p>
          <div className='logos'>
            <img src={telegram} alt="" />
            <img src={wk} alt='VK' />
          </div>
        </div>

        <div className='footer-section'>
          <h1>Каталог</h1>
          <ul>
            <li>Товары для спорта</li>
            <li>Аксессуары</li>
            <li>Pre-loved</li>
            <li>Одежда</li>
            <li>Обувь</li>
            <li>Сумки</li>
            <li>Custom</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h1>Меню</h1>
          <ul>
            <li>О нас</li>
            <li>Продать свою одежду</li>
            <li>Клиентский сервис</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h1>Поддержка</h1>
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Частые вопросы</li>
            <li>Отследить заказ</li>
          </ul>
        </div>
      </div>

      <ul className='contact-info'>
        <li>Политика конфиденциальности</li>
        <li>Пользовательское соглашение</li>
        <li><a href="mailto:help@dealerclub">help@dealerclub</a></li>
        <li><a href="mailto:info@dealermsk">info@dealermsk</a></li>
        <li>+7 (929) 555-00-04</li>
      </ul>
    </footer>
  );
}

export default FooterCom;
