import React, { useState, useEffect } from "react";
import "./Search.scss";
import Like2 from "../../assets/svg/Like2.svg";
import search3 from "../../assets/svg/search3.svg";
import { Link } from "react-router-dom";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function SearchCom() {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(32780);
  const [maxPrice, setMaxPrice] = useState(82780);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setSearchProducts(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchProducts();
  }, []);

  const clearSearch = () => setSearchTerm("");

  const handleMinChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxChange = (e) => setMaxPrice(Number(e.target.value));

  // Фильтрация по поиску жана цене
  const filteredProducts = searchProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.price >= minPrice &&
      item.price <= maxPrice
  );

  return (
    <div>
      <div className="main3-input3 container">
        <div className="input-3">
          <div className="input3-search">
            <img src={search3} alt="Search Icon" />
            <input
              type="text"
              placeholder="Мне повезёт"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={clearSearch}>Очистить</button>
        </div>
        <p className="close-btn">Закрыть</p>
      </div>

      <div className="search-two container">
        <div className="catalog-1">
          <h1>Фильтры</h1>
          <div className="price-range1">
            <label>Цена</label>
            <div className="slider-container1">
              <input
                type="range"
                min="0"
                max="100000"
                value={minPrice}
                step="100"
                onChange={handleMinChange}
              />
              <input
                type="range"
                min="0"
                max="100000"
                value={maxPrice}
                step="100"
                onChange={handleMaxChange}
              />
            </div>
            <div className="price-labels1">
              <input type="text" value={minPrice.toLocaleString()} readOnly />
              <span>–</span>
              <input type="text" value={maxPrice.toLocaleString()} readOnly />
              <span>₽</span>
            </div>
          </div>
        </div>

        <div className="catalog-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="kros19">
                <div className="mm9">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <div className="pp9">NEW</div>
                <div className="pw19">
                  <img src={Like2} alt="like" />
                </div>
                <div className="main-top19">
                  <p>{item.name}</p>
                  <h5>{item.price.toLocaleString()} ₽</h5>
                </div>
              </div>
            ))
          ) : (
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Ничего не найдено по вашему запросу.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCom;
