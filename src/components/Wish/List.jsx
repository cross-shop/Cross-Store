import React, { useState, useEffect} from 'react'
import "./List.scss"
import wishlist from "../../assets/image/wishlist.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import Like from "../../assets/svg/Like.svg"
import { Link } from 'react-router-dom'
import search3 from "../../assets/svg/search3.svg"
import Like2 from "../../assets/svg/Like2.svg"
import kros3 from "../../assets/image/kros3.png"
import list1 from "../../assets/image/list1.png"
import list2 from "../../assets/image/list2.png"
import list3 from "../../assets/image/list3.png"


function List() {
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
       <header className='nurtilek container'>
          <img src={wishlist} alt="" />
          <div className='nur1709gg'>
          <div className='nur1709-left '>
            <ul>
              <li>
                <a href="">Одежда</a>
              </li>
              <li>
              <Link to={`/obuv`}>
                <a href="">Обувь</a>
                </Link>
              </li>
              <li>
                <a href="">Аксессуары</a>
              </li>
              <li>
                <a href="">Сумки</a>
              </li>
              <li>
              <Link to={`/0consignment`}>
                <a href="">Товары для спорта</a>
                </Link>              </li>
              <p>DEALER</p>
            </ul>
          </div>
          <div className='nur1709-img'>
            <img src={Like} alt="" />

          <img src={Magazin} alt="" />
          <Link to={`/search`}>
          <img src={search} alt="" />
          </Link>
          </div>
          </div>

          <div className='nur-center'>

            <h1>Custom</h1>
        
            
          </div>
          <div className='nur9'>
            <Link to={`/`}>
            <p>Главная//</p>        
            </Link>
            <h1>Поддержка//</h1>
          </div>
          <div className='nur-footer09'></div>

         
      
        </header>
        <div className='nurtilek09 container'>
            <h1>Создайте свои уникальные и стильные кроссовки благодаря <br /> нашей новой услуге — Dealer.Custom</h1>

            <p>Адаптируйте гардероб под вашу индивидуальность. Вы можете выбрать цвет, <br /> материал, детали и даже добавить персонализированную вышивку, принт или <br /> ручной рисунок, а если боитесь прогадать с дизайном, Вы всегда сможете <br />ознакомиться с готовыми решениями в каталоге.</p>
            <div className='nur09'>
                <img src={list1} alt="" />
                <div className='nur-img'>
                <div className='nur-img1'>

                <img src={list2} alt="" />       
                </div>
                <div className='nur-img2'>

                     <img src={list3} alt="" />
                </div>

                </div>
            </div>
            <div className='nur09-left'>
            <h3>Закастомизировать</h3>
            <h2>Галерея Custom</h2>

            </div>
        </div>
        <main className='nurtilek-main container'>

<div className='catalog-1'>

  <div className='catolog-1-1'>
    <div className='catolog-f1'>
    <h1>Категории</h1>
<ul>
  <li>
    <a href=""> <span>Одежда</span></a>
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

<div className='catolog-f2'>
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
<p>Цвет</p>

</div>
<div className='serach2-inpu2'>
<img src={search3} alt="" />
<input type="text" placeholder='Поиск цвета' />
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
<div className='search-brend'>
<img src={search3} alt="" />
<input type="text" placeholder='Поиск цвета' />
</div>
  </div>
</div>
<div className='catalog-2'>
  
<div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    {/* ,mnhggggghhhhhhh */}
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
    <div className='kros19'>
      <div className='mm9'>
    <img src={kros3} alt="" />

      </div>
      <div className='pp9'>NEW</div>
      <div className='pw19'>
        <img src={Like2} alt="" />
      </div> <br />

    <div className='main-top19'>
      <p>Сумка Jacquemus 
      </p>
      <p>Le Bambidou</p>
      <h5>21 999₽</h5>
    </div> 
    </div>
</div>

</main>
    </div>
  )
}

export default List
