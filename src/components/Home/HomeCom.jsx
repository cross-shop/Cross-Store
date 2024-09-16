import React from 'react'
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




function HomeCom() {
  return (
    <div>
      <div className='top1'>
      <div className='top11'>
            <img src={sleva} alt="" />
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
          <img src={Magazin} alt="" />
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
              <div className='pp'>NOT</div>
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
              <div className='pp'>NOT</div>
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
              <div className='pp'>NOT</div>
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
<div className='main1-brend1-2'>
    <h1>Новинки</h1>
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
          

        </main>
    </div>
  )
}

export default HomeCom
