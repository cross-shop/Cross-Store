import React from 'react'
import "./Oform.scss"
import otsledit from "../../assets/image/otsledit.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import Like2 from "../../assets/svg/Like.svg"
import kros3 from "../../assets/image/kros3.png"
import alibek from "../../assets/image/alibek.png"
import { Link } from 'react-router-dom'


function Oform() {
  return (
    <div>

      <main className='alinur container'>
        <div className='marlish'>
          <div className='list'>
            <h1>Ваш заказ:</h1>
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
          </div>
          <div className='last'>
            <div className='radio1'>
              <input type="radio" />
              <p>Прибыл в транспортировочный центр</p>

            </div>   <div className='radio1'>
              <input type="radio" />
              <p>Подготовка к отправке в транзитный пункт</p>

            </div>   <div className='radio1'>
              <input type="radio" />
              <p>Заказ направлен в логистический центр</p>

            </div>   <div className='radio1'>
              <input type="radio" />
              <p>Прибыл в таможенный орган вашей страны</p>

            </div>   <div className='radio1'>
              <input type="radio" />
              <p>Заказ прибыл на склад, скоро получите</p>

            </div>
          </div>
          <div className='last-img'>
            <img src={alibek} alt="" />
            <p>Перейти к новым покупкам</p>
            <button>В каталог</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Oform
