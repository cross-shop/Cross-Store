import React, { useState, useEffect } from "react";
import proleved from "../../assets/image/proleved.png";
import { Link } from "react-router-dom";
import search3 from "../../assets/svg/search3.svg";
import Like2 from "../../assets/svg/Like2.svg";
import kros3 from "../../assets/image/kros3.png";
import "./Leved.scss";

function Leved() {
  const [minPrice, setMinPrice] = useState(32780);
  const [maxPrice, setMaxPrice] = useState(82780);

  const [selectedColor, setSelectedColor] = useState("black");

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
      <header className="nurtilek container">
        <img className="foto" src={proleved} alt="" />
        <div className="nur-center">
          <h1>Custom</h1>
        </div>
        <div className="nur9">
          <Link to={`/`}>
            <p>Главная//</p>
          </Link>
          <h1>Поддержка//</h1>
        </div>
        <div className="nur-footer09"></div>
      </header>
      <div className="nurtilek09 container">
        <h1>
          Бывшая в употреблении лимитированная одежда, <br /> обувь и аксессуары
        </h1>
        <p>
          Комиссионные позиции в отличном состоянии по стоимости ниже, чем в
          бутике, к <br /> тому же отдавая предпочтение бывшим в употреблении
          лотам, мы проявляем <br /> осознанность и заботимся о нашей планете.
          При этом вещи выглядят практически <br /> как новые, и в свою
          коллекцию мы получаем настоящие сокровища, которые вряд ли <br />{" "}
          найдешь в обычном магазине.
        </p>
      </div>
      <main className="nurtilek-main container">
        <div className="catalog-1">
          <div className="catolog-1-1">
            <div className="catolog-f1">
              <h1>Категории</h1>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <span>Одежда</span>
                  </a>
                </li>
                <li>
                  <a href="">Свитера, трикотаж</a>
                </li>
                <li>
                  <a href="">Худи, свитшоты</a>
                </li>
                <li>
                  <a href="">Свитера, трик</a>
                </li>
                <li>
                  <a href="">Кофты на молнии</a>
                </li>
                <li>
                  <a href="">Лонгсливы</a>
                </li>
                <li>
                  <a href="">В наличии</a>
                </li>
              </ul>
            </div>

            <div className="catolog-f2">
              <ul>
                <li>
                  <a href="">Верхняя одежда</a>
                </li>
                <li>
                  <a href="">Обувь</a>
                </li>
                <li>
                  <a href="">Аксессуары</a>
                </li>
                <li>
                  <a href="">Сумки</a>
                </li>
                <li>
                  <a href="">Товары для спорта</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="catolog-1-2">
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
                <span>с</span>
              </div>
              <p>Цвет</p>
            </div>

            <div className="serach2-inpu2">
              <img src={search3} alt="" />
              <input type="text" placeholder="Поиск цвета" />
            </div>

            <div className="color-options">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="white"
                  checked={selectedColor === "white"}
                  onChange={handleColorChange}
                />
                <span className="custom-radio white"></span> Белый
              </label>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="red"
                  checked={selectedColor === "red"}
                  onChange={handleColorChange}
                />
                <span className="custom-radio red"></span> Красный
              </label>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={selectedColor === "black"}
                  onChange={handleColorChange}
                />
                <span className="custom-radio black"></span> Чёрный
              </label>
              <p>Бренд</p>
            </div>
            <div className="search-brend">
              <img src={search3} alt="" />
              <input type="text" placeholder="Поиск цвета" />
            </div>
          </div>
        </div>
        <div className="catalog-2">
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
          <div className="kros19">
            <div className="mm9">
              <img src={kros3} alt="" />
            </div>
            <div className="pp9">NEW</div>
            <div className="pw19">
              <img src={Like2} alt="" />
            </div>{" "}
            <br />
            <div className="main-top19">
              <p>Сумка Jacquemus</p>
              <p>Le Bambidou</p>
              <h5>21 999с</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Leved;
