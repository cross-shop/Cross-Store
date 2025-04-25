import React from "react";
import "./Hoomedvchp.scss";
import catolog from "../../assets/image/1.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function Homedvchp() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Для вечерних прогулок</h1>
        <div className="home-navigate">Перейти</div>
      </div>

      <div className="home-products">
        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>

        <div className="home-product-card">
          <img src={catolog} alt="Product" />
          <div className="home-badge">
            <p>HOT</p>
          </div>
          <div className="home-favorite">
            <FaRegHeart color="gray" size={24} />
          </div>
          <div className="home-product-info">
            <p>Product Name</p>
            <h4>$Price</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homedvchp;
