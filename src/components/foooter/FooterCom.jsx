import React from 'react'
import "./Footer.scss"
import dealer from "../../assets/svg/dealer.svg"
import telegram from "../../assets/svg/telegram.svg"
import wk from "../../assets/svg/wk.svg"
import { Link } from 'react-router-dom'

function FooterCom() {
  return (
    <footer className='footer '>
      <div className='syzyk '></div>
    <div className='info container'>
      <div className='dealer '>
        <img src={dealer} alt="" />
        <p>
          Ваш поставщик в мир лимитированного 
          ассортимента с доставкой по всему миру
        </p>
        <div className='logos'>
          <img src={telegram} alt="" />
        <img src={wk} alt="" />
        </div>
        
      </div>
      <div className='dealer'>
        <h1>Каталог</h1>
        <ul>
          <li>Одежда</li>
          <li>Обувь</li>
          <li>Аксессуары</li>
          <li>Сумки</li>
          <li>Товары для спорта</li>
          <li>Pre-loved</li>
          <li>Custom</li>
        </ul>
      </div>
      <div className='dealer'>
        <h1>Меню</h1>
        <ul>
          <Link to={"/onas"}>
          <li>О нас</li>
          </Link>
          <li>Продать свою одежду</li>
          <Link to={"/konserj"}>
          <li>Консьерж</li>
          </Link>
          <li>Клиентский сервис</li>
        </ul>
      </div>
      <div className='dealer'>
        <h1>Поддержка</h1>
        <ul>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Частые вопросы</li>
          <li>Клиентский сервис</li>
          <li>Отследить заказ</li>
        </ul>
      </div>
    </div>
    <div className='syzyk2'></div>
    <ul className='u1'>
      <li>Политика конфиденциальности</li>
      <li>Пользовательское соглашение</li>
      <li>help@dealerclub</li>
      <li>info@dealermsk</li>
      <li>+7 (929) 555-00-04</li>
    </ul>
    </footer>
  )
}

export default FooterCom
