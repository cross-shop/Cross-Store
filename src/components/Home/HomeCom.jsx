import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { addWish } from "../../redux/wish2/wishSlice";
import { useNavigate } from "react-router-dom";
import mixer1 from "../../assets/image/mixer1.png";
import mixer2 from "../../assets/image/mixer2.png";
import mixer3 from "../../assets/image/mixer3.png";
import spes from "../../assets/image/spes.png";
import custom1 from "../../assets/image/custom1.png";
import custom2 from "../../assets/image/custom2.png";
import catolog from "../../assets/image/catalog.png";
import catolog2 from "../../assets/image/catolog2.png";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Продукцияны жүктөөдө ката кетти", error);
      }
    };
    getProduct();
  }, []);

  const handleFilterClick = () => {
    setProducts(
      products.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      )
    );
  };

  const toggleLike = (item) => {
    dispatch(addWish(item));
  };

  return (
    <div>
      <main className="main1 container">
        <div className="main1-Nike2">
          <p>Взгляните на</p>
        </div>

        <div className="main-mixer ">
          {[mixer1, mixer2, mixer3].map((mixer, index) => (
            <div key={index} className="mixer">
              <img src={mixer} alt={`mixer${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="main1-spes1">
          <img src={spes} alt="special offer" />
          <h1>Гарантия лучшей цены</h1>
        </div>

        <div className="main1-podbor1">
          <label>Цена</label>
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="100000"
              value={minPrice}
              step="100"
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="100000"
              value={maxPrice}
              step="100"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button onClick={handleFilterClick}>Подобрать</button>
        </div>

        <div className="main1-custom1">
          <h2>Особенные категории</h2>
          <div className="center-custom1">
            {[custom1, custom2].map((custom, index) => (
              <div key={index} className="custom-1">
                <img src={custom} alt={`custom${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="main1-catolog">
          <img src={catolog} alt="catalog" />
          <button>В каталог</button>
        </div>

        <div className="main1-catolog2">
          <img src={catolog2} alt="catalog2" />
          <p>Скидка 7% на первую покупку при подписке</p>
          <input type="text" placeholder="Ваш E-mail" />
          <button>Подписаться</button>
        </div>
      </main>
    </div>
  );
}

export default HomeCom;
