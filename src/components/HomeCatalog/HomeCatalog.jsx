import React from 'react'
import './HomeCatalog.scss'
import { Link } from 'react-router-dom'
import acsess2 from '../../assets/image/odezda.png'
import acsess3 from '../../assets/image/odezda3.png'
import acsess4 from '../../assets/image/odezda4.png'
import acsess5 from '../../assets/image/odezda5.png'
import menuimg from '../../assets/image/menuimg.png'
function HomeCatalog() {
  return (
    <div>
        <section className='img'>
            <div className="clothes">
                <img src={acsess2} alt="" />
                <Link to={'/odejda'}>
                <p>одежда</p>
                </Link>
            </div>
            <div className="shoes">
                <img src={menuimg} alt=""  />
                <Link to={'/obuv'}>
                <p>обувь</p>
                </Link>
            </div>

            <div className="image">
                <div className="i1">
                <img src={acsess3} alt="" />
                <Link to={'/proleved'}>
                <p>Аксессуары</p>
                </Link>
                </div>

                <div className="i1">
                <img src={acsess4} alt="" />
                <Link to={'/obuv'}>
                <p>сумки</p>
                </Link>
                </div>

                <div className="i1">
                <img src={acsess5} alt="" />
                <Link to={'/obuv'}>
                <p> для спорты</p>
                </Link>
                </div>
            </div>

        </section>
      
    </div>
  )
}

export default HomeCatalog
