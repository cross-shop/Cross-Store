import React from "react";
import catalog2 from "../../assets/image/catolog2.png";
import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <div>
      <div className="skid container">
        <img src={catalog2} alt="" />
        <div className="skidban">
          <p>Скидка 7%</p>
          <span>
            Получите скидку 7% на первую покупку при подписке на наши
            эксклюзивные акции, обновления и новости
          </span>
          <div className="butinput">
            <input type="email" placeholder="Ваш E-mail" />
            <button>Подписаться</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;