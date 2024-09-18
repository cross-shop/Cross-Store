import React from 'react'
import "./Found.scss"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"

function Found() {
  return (
    <div>
        <div className='header2gg'>
          <div className='header2-left container'>
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
          <div className='header2-img'>
          <img src={Magazin} alt="" />
          <img src={search} alt="" />
          </div>
          </div>
    </div>
  )
}

export default Found
