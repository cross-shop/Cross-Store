import React, { useState, useEffect } from 'react';
import "./Home.scss"
import Banner from '../Banner/Banner'
import sleva from "../../assets/svg/1.svg"
import prava from "../../assets/svg/2.svg"
import mainimage from "../../assets/image/mainimage.png"
import Like from "../../assets/svg/Like.svg"
import Like2 from "../../assets/svg/Like2.svg"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import status1 from "../../assets/image/status1.png"
import status2 from "../../assets/image/status2.png"
import status3 from "../../assets/image/status3.png"
import status4 from "../../assets/image/status4.png"
import status5 from "../../assets/image/status5.png"
import status6 from "../../assets/image/status6.png"
import kros1 from "../../assets/image/kros1.png"
import kros2 from "../../assets/image/kros2.png"
import kros3 from "../../assets/image/kros3.png"
import kros4 from "../../assets/image/kros4.png"
import odezda from "../../assets/image/odezda.png"
import odezda2 from "../../assets/image/odezda2.png"
import odezda3 from "../../assets/image/odezda3.png"
import odezda4 from "../../assets/image/odezda4.png"
import odezda5 from "../../assets/image/odezda5.png"
import sleva1 from "../../assets/svg/sleva.svg"
import prava1 from "../../assets/svg/prava.svg"
import mixer1 from "../../assets/image/mixer1.png"
import mixer2 from "../../assets/image/mixer2.png"
import mixer3 from "../../assets/image/mixer3.png"
import spes from "../../assets/image/spes.png"
import custom1 from "../../assets/image/custom1.png"
import custom2 from "../../assets/image/custom2.png"
import catolog from "../../assets/image/catalog.png"
import catolog2 from "../../assets/image/catolog2.png"
import x from "../../assets/svg/delete.svg"
import { Link } from 'react-router-dom';
import udalit from "../../assets/svg/udalen.svg"

// const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product"

// const API2 = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product"


function HomeCom() {
  const [products, setProducts] = useState([])
  const [products2, setProducts2] = useState([]) 
 

  // async function getProduct() {
  //   try {
  //     const res = await fetch(API);
  //     const data = await res.json();
  //     setProducts(data); 
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getProduct2() {
  //   try {
  //     const res = await fetch(API2);
  //     const data = await res.json();
  //     setProducts2(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // useEffect(() => {
    // getProduct()
    // getProduct2()
  // }, [])

  const [minPrice, setMinPrice] = useState(32780);
  const [maxPrice, setMaxPrice] = useState(82780);

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
  };
  


  return (
    <div>
      <div className='top1'>
      <div className='top11'>
        <Link to={`/menuexpansion`}>
            <img src={sleva} alt="" />
        
        </Link>
            <p>Гарантия лучшей цены</p>
            <img src={prava} alt="" />  
        </div>

      </div>
       
        <header className='header1'>
          <img src={mainimage} alt="" />
          <div className='header1gg'>
          <div className='header1-left container'>
            <ul>
              <li>
                <a href="">Одежда</a>
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
              <p>DEALER</p>
            </ul>
          </div>
          <div className='header1-img'>
          <img src={Like} alt="" />

{/* ----------------------------------------------------------------------------- */}
          <div className='icon2'>
          <img src={Magazin} alt="" />  
          <div className='modal'>

            <div className='modal2'>
            <h2>Корзина</h2>
            <img src={x} alt="" />
            </div>
            <div className='m3'>
               <h5>2 товара</h5>
              <h5>Очистить</h5>
            </div>

            <div className='cart'>

              <div className='incart1'>
              <img src={kros1} alt="" />
              </div>

              <div className='incart2'>
                <div className='box'>
                 <h6>Кроссовки Nike
                Le Bambidou</h6>
                <img src={Like2} alt="" /> 
                </div>
              <div className='c3'>
                <button>PRE-LOVED</button>
                <p>размер</p>
                <h5>41 RU</h5>
              </div>
              <div className='c4'>
              <p>цвет</p>
              <h5>Red</h5>
              </div>
              <div className='c5'>
                <h3>21 999₽</h3>
                <img src={udalit} alt="" />
              </div>
                 </div>      

              </div>
              {/* --------------------------------------------------------------- */}
              <div className='cart'>

              <div className='incart1'>
              <img src={kros1} alt="" />
              </div>

              <div className='incart2'>
                <div className='box'>
                 <h6>Кроссовки Nike
                Le Bambidou</h6>
                <img src={Like2} alt="" /> 
                </div>
              <div className='c3'>
                <button>PRE-LOVED</button>
                <p>размер</p>
                <h5>41 RU</h5>
              </div>
              <div className='c4'>
              <p>цвет</p>
              <h5>Red</h5>
              </div>
              <div className='c5'>
                <h3>21 999₽</h3>
                <img src={udalit} alt="" />
              </div>
                 </div>      

                </div>

                <div className='bm'>
                  <div className='bm2'>
                    <h2>Итого</h2>
                    <h2>43 998₽</h2>
                  </div>
                  <div className='btn'>
                    <button>Оформить</button>
                  </div>

                </div>

            </div>   
        </div>
{/* -------------------------------------------------------------------------------- */}

          <img src={search} alt="" />
          </div>
          </div>

          <div className='header1-center'>
            <h1>распродажа <br />
            товаров для неё</h1>
            <button>Перейти в каталог</button>
          </div>

          <div className='main1-status'>
          <div className='status'>
        <div className='status1'>
              <img src={status1} alt="" />
              <p>покупка</p>
            </div> <div className='status1'>
              <img src={status2} alt="" />
              <p>покупка</p>
            </div> <div className='status1'>
              <img src={status3} alt="" />
              <p>покупка</p>
            </div> <div className='status1'>
              <img src={status4} alt="" />
              <p>покупка</p>
            </div> <div className='status1'>
              <img src={status5} alt="" />
              <p>покупка</p>
            </div> <div className='status1'>
              <img src={status6} alt="" />
              <p>покупка</p>
            </div>
            </div>

          </div>
      
        </header>

        <main className='main1 container'>
          <div className='main1-brend1'>
    <h1>Cамое популярное сейчас</h1>
    <button>Перейти</button>
          </div>
          <div className='main1-kros'>
         
<div className='kros1'>
  <div className='mm'>
<img src={kros1} alt="" />

  </div>
  <div className='pp'>NOT</div>
  <div className='pw1'>
    <img src={Like2} alt="" />
  </div> <br />

<div className='main-top1'>
  <p>Сумка Jacquemus</p>
  <p>Le Bambidou</p>
  <h5>21 999₽</h5>
</div> 
  

</div>

<div className='kros1'>
  <div className='mm'>
<img src={kros2} alt="" />

  </div>
  <div className='pp'>NOT</div>
  <div className='pw1'>
    <img src={Like2} alt="" />
  </div> <br />

<div className='main-top1'>
  <p>Сумка Jacquemus</p>
  <p>Le Bambidou</p>
  <h5>21 999₽</h5>
</div> 
  

</div>

<div className='kros1'>
  <div className='mm'>
<img src={kros1} alt="" />

  </div>
  <div className='pp'>NOT</div>
  <div className='pw1'>
    <img src={Like2} alt="" />
  </div> <br />

<div className='main-top1'>
  <p>Сумка Jacquemus</p>
  <p>Le Bambidou</p>
  <h5>21 999₽</h5>
</div> 
  

</div>

<div className='kros1'>
  <div className='mm'>
<img src={kros2} alt="" />

  </div>
  <div className='pp'>NOT</div>
  <div className='pw1'>
    <img src={Like2} alt="" />
  </div> <br />

<div className='main-top1'>
  <p>Сумка Jacquemus</p>
  <p>Le Bambidou</p>
  <h5>21 999₽</h5>
</div> 
  

</div>

            
          </div>
         
            {/* .... */}

<div className='main1-brend1-2'>
    <h1>Новинки</h1>
    <button>Перейти</button>
          </div>
          <div className='main1-kros'>
           
                  <div className='kros1'>
                    <div className='mm'>
                  <img src={kros3} alt="" />
                  
                    </div>
                    <div className='pp'>NOT</div>
                    <div className='pw1'>
                      <img src={Like2} alt="" />
                    </div> <br />
                  
                  <div className='main-top1'>
                    <p>Сумка Jacquemus</p>
                    <p>Le Bambidou</p>
                    <h5>21 999₽</h5>
                  </div> 
                    
                  
                  </div>

                  <div className='kros1'>
                    <div className='mm'>
                  <img src={kros1} alt="" />
                  
                    </div>
                    <div className='pp'>NOT</div>
                    <div className='pw1'>
                      <img src={Like2} alt="" />
                    </div> <br />
                  
                  <div className='main-top1'>
                    <p>Сумка Jacquemus</p>
                    <p>Le Bambidou</p>
                    <h5>21 999₽</h5>
                  </div> 
                    
                  
                  </div>

                  <div className='kros1'>
                    <div className='mm'>
                  <img src={kros2} alt="" />
                  
                    </div>
                    <div className='pp'>NOT</div>
                    <div className='pw1'>
                      <img src={Like2} alt="" />
                    </div> <br />
                  
                  <div className='main-top1'>
                    <p>Сумка Jacquemus</p>
                    <p>Le Bambidou</p>
                    <h5>21 999₽</h5>
                  </div> 
                    
                  
                  </div>

                  <div className='kros1'>
                    <div className='mm'>
                  <img src={kros4} alt="" />
                  
                    </div>
                    <div className='pp'>NOT</div>
                    <div className='pw1'>
                      <img src={Like2} alt="" />
                    </div> <br />
                  
                  <div className='main-top1'>
                    <p>Сумка Jacquemus</p>
                    <p>Le Bambidou</p>
                    <h5>21 999₽</h5>
                  </div> 
                    
                  
                  </div>
                  

          
          

</div>

      <div className='main1-odezda1'>
      <div className='odezda-1'>
        <img src={odezda} alt="" />
        <p>одежда</p>
      </div>
      <div className='odezda-1'>
        <img src={odezda2} alt="" />
        <p>обувь</p>
      </div>
      <div className='odezda-3'>
        <div className='odezda-3-1'>
          <img src={odezda3} alt="" />
          <p>аксессуары</p>
        </div>
        <div className='odezda-3-1'>
          <img src={odezda4} alt="" />
          <p>сумки</p>
        </div>
        <div className='odezda-3-1'>
          <img src={odezda5} alt="" />
          <p>для спорта</p>
        </div>
      </div>
      </div>

      <div className='main1-brend1-3'>
    <h1>Для вечерних прогулок</h1>
    <button>Перейти</button>
          </div>
          <div className='main1-kros'>
            <div className='kros1'>
              <div className='mm'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp-1'>pre-loved</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* .... */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros2} alt="" />
    
              </div>
              <div className='pp-2'>NEW</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pp-2'>-40%</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros4} alt="" />
    
              </div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>

</div>

      <div className='main1-Nike1'>
        <p>Взгляните на</p>
        <div className='Nike1'>
          <div className='Nike1-1'>
            <h2></h2>
            <img src={sleva1} alt="" />

          </div>
          <h1>NIKE</h1>


          <div className='Nike1-2'>
            <img src={prava1} alt="" />
            <h2></h2>

          </div>
        </div>
      </div>

      <div className='main-mixer'>

<div className='mixer1'>
  <img src={mixer1} alt="" />
  <p>bred Fr <br /> mixer </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

<div className='mixer2'>
  <img src={mixer2} alt="" />
  <p>nike air <br /> jordan 1 </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

<div className='mixer1'>
  <img src={mixer3} alt="" />
  <p> nike air <br /> Maximus </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

      </div>

      <div className='main1-spes1'>
        <img src={spes} alt="" />
        <p>спецпредложения</p>
        <h1>Гарантия лучшей <br /> цены</h1>
      </div>

 <div className='main1-podbor1'>
  <div className='podbor1-top'>
    <h1>Подберем пару по бюджету</h1>
  
 
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
    <button>Подобрать</button>
    </div>
    </div>


    <div className='main1-krros'>
            <div className='krros1'>
              <div className='mmm'>
            <img src={kros3} alt="" />
    
              </div>

              <div className='pww1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-topp1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* .... */}
            <div className='krros1'>
              <div className='mmm'>
            <img src={kros2} alt="" />
    
              </div>
              <div className='pww1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-topp1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='krros1'>
              <div className='mmm'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pww1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-topp1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='krros1'>
              <div className='mmm'>
            <img src={kros4} alt="" />
    
              </div>
              <div className='pww1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-topp1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>

</div>
    

</div>
<div className='main1-custom1'>
  <h2>Особенные категории</h2>
      <div className='center-custom1'> 
      <div className='custom-1'>
        <img src={custom1} alt="" />
        <h4>закастомизируем ваш <br /> гардероб</h4>
        <h1>dealer.custom</h1>
        <p>смотреть</p>
      </div>
      <div className='custom-1'>
      <img src={custom2} alt="" />
        <h4>для тех, кто ценит <br /> осознанное потребление</h4>
        <h1>pre-loved by dealer</h1>
        <p>смотреть</p>
      </div>
      </div>
      </div>
   
      <div className='main1-brend1-new'>
    <h1>В наличии</h1>
    <button>Перейти</button>
          </div>

          <div className='main1-kros'>
            <div className='kros1'>
              <div className='mm'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp'>NEW</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* .... */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pp'>NEW</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros2} alt="" />
    
              </div>
              <div className='pp'>NEW</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros1'>
              <div className='mm'>
            <img src={kros4} alt="" />
    
              </div>
              <div className='pp'>NEW</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>

</div>

<div className='main1-catolog'>
  <img src={catolog} alt="" /> 
  <h1>Продай свою пару <br />
  вместе с нами</h1>
  <p>Реализуем позиции, которые <br /> потеряли актуальность в вашем гардеробе</p>
  <button>В каталог</button>
  </div>

  <div className='main1-catolog2'>
  <img src={catolog2} alt="" /> 
  <h1>Скидка 7%</h1>
  <p>Получите скидку 7% на первую покупку при подписке <br /> на наши эксклюзивные акции, обновления и новости</p>
  <div className='catolog2-input1'>
    <input type="text" placeholder='Ваш E-mail' />
  <button>Подписаться</button>
  </div>
  </div>

          

        </main>
    </div>
  )
}

export default HomeCom