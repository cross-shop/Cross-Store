import React from 'react'
import './Fav.css'
import product from "../../assets/image/kros1.png"

function Fav() {
  return (
<div className="wishlist-app">
      <nav> 
         <ul>
        <li> <a href="/favorite">Избранное</a> </li>
      <li> <a href="/brand">Любимые бренды</a> </li>
          </ul>
      </nav>

      <div className='kart'>
        <img src={product} alt="" />
        <strong>123456</strong>
        <p>Asanakunova</p>
      </div>
    </div>
  )
}

export default Fav
