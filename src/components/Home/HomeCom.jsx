import React, { useState, useEffect } from 'react';
import "./Home.scss";
import Like2 from "../../assets/svg/Like2.svg";
import sleva1 from "../../assets/svg/sleva.svg";
import prava1 from "../../assets/svg/prava.svg";
import mixer1 from "../../assets/image/mixer1.png";
import mixer2 from "../../assets/image/mixer2.png";
import mixer3 from "../../assets/image/mixer3.png";
import spes from "../../assets/image/spes.png";
import custom1 from "../../assets/image/custom1.png";
import custom2 from "../../assets/image/custom2.png";
import catolog from "../../assets/image/catalog.png";
import catolog2 from "../../assets/image/catolog2.png";
import { useDispatch } from 'react-redux';
import { addWish } from '../../redux/wish2/wishSlice';
import { useNavigate } from 'react-router-dom';

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  const handleMinChange = (event) => setMinPrice(event.target.value);
  const handleMaxChange = (event) => setMaxPrice(event.target.value);

  const handleFilterClick = () => {
    const filtered = products.filter(item => item.price >= minPrice && item.price <= maxPrice);
    setProducts(filtered);
  };

  const handleAvatarClick = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const getProduct = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError("Продукцияны жүктөөдө ката кетти");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const toggleLike = (item) => {
    dispatch(addWish(item));
  };

  const handleCheckout = () => {
    const selectedQuantity = Object.keys(checkedItems).filter(itemId => checkedItems[itemId]).length;
    navigate('/checkout', { state: { quantity: selectedQuantity } });
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
  };

  const handleCloseModal = () => setModalVisible(false);

  return (
    <div>
      <main className='main1 container'>

        <div className='main1-Nike1'>
          <p>Взгляните на</p>
          <div className='Nike1'>
            <div className='Nike1-1'>
              <img src={sleva1} alt="Nike" />
            </div>
            <h1>NIKE</h1>
            <div className='Nike1-2'>
              <img src={prava1} alt="Nike" />
            </div>
          </div>
        </div>

        <div className='main-mixer'>
          <div className='mixer1'>
            <img src={mixer1} alt="mixer1" />
            <p>Brand Fr Mixer</p>
          </div>
          <div className='mixer2'>
            <img src={mixer2} alt="mixer2" />
            <p>Nike Air Jordan 1</p>
          </div>
          <div className='mixer1'>
            <img src={mixer3} alt="mixer3" />
            <p>Nike Air Maximus</p>
          </div>
        </div>

        <div className='main1-spes1'>
          <img src={spes} alt="special offer" />
          <p>Спецпредложения</p>
          <h1>Гарантия лучшей цены</h1>
        </div>

        <div className="main1-podbor1">
          <div className="price-range">
            <label>Цена</label>
            <div className="slider-container">
              <input
                type="range"
                id="rangeMin"
                min="0"
                max="100000"
                value={minPrice}
                step="100"
                onChange={handleMinChange}
              />
              <input
                type="range"
                id="rangeMax"
                min="0"
                max="100000"
                value={maxPrice}
                step="100"
                onChange={handleMaxChange}
              />
            </div>
            <div className="price-labels">
              <input
                type="text"
                id="minPrice"
                value={parseInt(minPrice).toLocaleString()}
                readOnly
              />
              <span>–</span>
              <input
                type="text"
                id="maxPrice"
                value={parseInt(maxPrice).toLocaleString()}
                readOnly
              />
              <span>₽</span>
            </div>
            <button onClick={handleFilterClick}>Подобрать</button>
          </div>
        </div>

        <div className='main1-custom1'>
          <h2>Особенные категории</h2>
          <div className='center-custom1'>
            <div className='custom-1'>
              <img src={custom1} alt="custom1" />
              <h4>Заказов для гардероба</h4>
              <h1>Dealer.custom</h1>
            </div>
            <div className='custom-1'>
              <img src={custom2} alt="custom2" />
              <h4>Для осознанного потребления</h4>
              <h1>Pre-loved by Dealer</h1>
            </div>
          </div>
        </div>

        <div className='main1-catolog'>
          <img src={catolog} alt="catalog" />
          <h1>Продай свою пару вместе с нами</h1>
          <button>В каталог</button>
        </div>

        <div className='main1-catolog2'>
          <img src={catolog2} alt="catalog2" />
          <h1>Скидка 7%</h1>
          <p>Получите скидку 7% на первую покупку при подписке на наши эксклюзивные акции, обновления и новости</p>
          <div className='catolog2-input1'>
            <input type="text" placeholder='Ваш E-mail' />
            <button>Подписаться</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeCom;
