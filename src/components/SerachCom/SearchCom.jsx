import React from 'react'
import "./Search.scss"
import Like3 from "../../assets/svg/Like3.svg"
import Magazin2 from "../../assets/svg/magazin2.svg"
import search2 from "../../assets/svg/search2.svg"
import search3 from "../../assets/svg/search3.svg"
import kros1 from "../../assets/image/kros1.png"
import kros2 from "../../assets/image/kros2.png"
import kros3 from "../../assets/image/kros3.png"
import kros4 from "../../assets/image/kros4.png"
import Like2 from "../../assets/svg/Like2.svg"
import { Link } from 'react-router-dom'


function SearchCom() {
  return (
    <div>
         <header className='header39  '>
          <div className='header39gg'>
          <div className='header39-left container'>
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
          <div className='header39-img'>
            <Link to={`/wishlist`}>
          <img src={Like3} alt="" />
            </Link>
          <img src={Magazin2} alt="" />
          <img src={search2} alt="" />
          
          </div>
          </div>

         

       
      
        </header>

        <div className='main3-input3 container'>
            <div className='input-3'>
                <div className='input3-search'>
            <img src={search3} alt="" />
            <input type="text" placeholder='Мне повезёт' />

                </div>
            <button>очистить</button>

            </div>
            <p>закрыть</p>
        </div>

        <div className='recomen1 container'>
            <p>Рекомендации</p>
            <div className='recomen1-1'>
                <button className='recomen1-button-1'>мужская одежда</button>
                <button className='recomen1-button-2'>женская одежда</button>
                <button className='recomen1-button-3'>зимняя одежда</button>
                <button className='recomen1-button-4'>одежда custom</button>
                <button className='recomen1-button-5'>футболки</button>
                <button className='recomen1-button-6'>лонгсливы</button>
                <button className='recomen1-button-7'>на вечер</button>
            </div>
        </div>

        <div className='main11-kros container'>
            <div className='kros11'>
              <div className='mm1'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp-11'>pre-loved</div>
              <div className='pw11'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top11'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* .... */}
            <div className='kros11'>
              <div className='mm1'>
            <img src={kros2} alt="" />
    
              </div>
              <div className='pp-21'>NEW</div>
              <div className='pw11'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top11'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros11'>
              <div className='mm1'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pp-21'>-40%</div>
              <div className='pw11'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top11'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
            {/* // */}
            <div className='kros11'>
              <div className='mm1'>
            <img src={kros4} alt="" />
    
              </div>
              <div className='pw11'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top11'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>

</div>
      
    </div>
  )
}

export default SearchCom
