import React, { useState, useEffect } from 'react';
import "./Search.scss";
import Like3 from "../../assets/svg/Like3.svg";
import Magazin2 from "../../assets/svg/magazin2.svg";
import search2 from "../../assets/svg/search2.svg";
import search3 from "../../assets/svg/search3.svg";
import Like2 from "../../assets/svg/Like2.svg";
import { Link } from 'react-router-dom';
import kros3 from "../../assets/image/kros3.png"
import { div } from 'framer-motion/m';

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function SearchCom() {
  const [searchproducts, setproductsSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(32780);
  const [maxPrice, setMaxPrice] = useState(82780);

  const [selectedColor, setSelectedColor] = useState("black");

  const getproductSearch = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setproductsSearch(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproductSearch();
  }, []);

  // Функция для очистки поля ввода
  const clearSearch = () => {
    setSearchTerm("");
  };



  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div>
      
      <div className='main3-input3 container'>
        <div className='input-3'>
          <div className='input3-search'>
            <img src={search3} alt="" />
            <input
              type="text"
              placeholder='Мне повезёт'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={clearSearch}>очистить</button>
        </div>
        <p>закрыть</p>
      </div>

      <div className='main11-kros container'>
        {searchproducts
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Фильтрация по названию
          .slice(0, 20)
          .map((item) => (
            <div key={item.id} data={item}>
              <div className='kros11'>
                <div className='mm1'>
                  <img src={item.avatar} alt="" />
                </div>
                <div className='pp-11'>pre-loved</div>
                <div className='pw11'>
                  <img src={Like2} alt="" />
                </div><br />
                <div className='main-top11'>
                  <p>{item.name}</p>
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='search-two container'>
      <div className='catalog-1'>


<div className='catolog-1-2'>
  <h1>Фильтры</h1>
  <div className="price-range1">
<label>Цена</label>
<div className="slider-container1">
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
<div className="price-labels1">
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

</div>



</div>
</div>
<div className='catalog-2'>
  {
    searchproducts
      .filter(item => item.price >= minPrice && item.price <= maxPrice)  // Фильтрация по цене
      .map((item) => (
        <div key={item.id} data={item}>
          <div className='kros19'>
            <div className='mm9'>
              <img src={item.avatar} alt="" />
            </div>
            <div className='pp9'>NEW</div>
            <div className='pw19'>
              <img src={Like2} alt="" />
            </div> <br />
            <div className='main-top19'>
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>{item.price}</h5>
            </div>
          </div>
        </div>
      ))
  }
</div>

      </div>
    </div>
  );
}

export default SearchCom;
