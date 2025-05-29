import React from "react";
import catolog from "../../assets/image/3.png";
import { FaRegHeart } from "react-icons/fa";
import catalog2 from "../../assets/image/catolog2.png";
import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <div>
      {/* <div className="item-content container">
        <div className="item-hot">
          <h1>Компонент4</h1>
          <div className="item-pereiti">Перейти</div>
        </div>
        <div className="item-drops">
          {Array(9).fill().map((_, i) => (
            <div className="item" key={i}>
              <img src={catolog} alt="Product" />
              <div className="item-new">
                <p>HOT</p>
              </div>
              <div className="item-heart">
                <FaRegHeart color="gray" size={24} />
              </div>
              <div className="item-text">
                <p>Product Name</p>
                <h4>$Price</h4>
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
