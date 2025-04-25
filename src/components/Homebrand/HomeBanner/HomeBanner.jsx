import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mainimage from "../../../assets/image/homebanner.png";
import table from "../../../assets/image/spes.png";
import image3 from "../../../assets/image/banner.png";
import custom1 from "../../../assets/image/custom1.png";
import custom2 from "../../../assets/image/custom2.png";
import catolog from "../../../assets/image/3.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import catalog from "../../../assets/image/catalog.png";
import catalog2 from "../../../assets/image/catolog2.png";
import { Link } from "react-router-dom";
import "./HomeBanner.scss";
function HomeBanner() {
  return (
    <div>
      <div className="home-carousel ">
        <Carousel>
          <Carousel.Item>
            <img className="home-image" src={table} alt="" />
            <h6>спецпредложения</h6>
            <p>Гарантия лучшей цены </p>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="home-image" src={mainimage} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Main banner image" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="dealer">
        <h2>Особенные категории</h2>
        <div className="dlr">
          <div className="dealer-img1">
            <img src={custom1} alt="" />
            <p>закастомизируем ваш гардероб</p>
            <div className="ss">
              <span>dealer.custom</span>
              <Link>смотреть</Link>
            </div>
          </div>
          <div className="dealer-img2">
            <img src={custom2} alt="" />
            <p>для тех, кто ценит осознанное потребление</p>
            <div className="ss">
              <span>pre-loved by dealer</span>
              <Link to={"/proleved"}>смотреть</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="item-content">
        <div className="item-hot">
          <h1>В наличии</h1>
          <div className="item-pereiti">Перейти</div>
        </div>
        <div className="item-drops">
          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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
        </div>
      </div>

      <div className="catalog-banner">
        <img src={catalog} alt="" />
        <div className="infbanner">
          <p>Продай свою пару вместе с нами</p>
          <span>
            Реализуем позиции, которые потеряли актуальность в вашем гардеробе
          </span>
          <Link to={"/catalog"}>
            <button>В каталог</button>
          </Link>
        </div>
      </div>

      <div className="skid">
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
