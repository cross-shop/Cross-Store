import React from 'react'
import "./Found.scss"
import { Link } from 'react-router-dom'

function Found() {
  return (
       <div className='eror1'>
          <div className='eror2'>
            <h1>404</h1>
            <h6>кажется, такой страницы нет</h6>
            <div className='buttons'>
              <button>Назад</button>
              <Link to={"/"}>
              <button>На главную</button>
              </Link>
            </div>
          </div>
       </div>
  )
}

export default Found
