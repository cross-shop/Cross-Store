import React from 'react';
import './Accessories.Com.scss';
import search from '../../assets/svg/search.svg';
import ass1 from '../../assets/image/ass1.png';

function Accessories() {
  return (
    <div className="acces">
      <div className="top-access">
        <div className="link">
          <a href="#">Мужской /</a>
          <a href="#">Акссесуары</a>
        </div>
        <div className="as-logo">
          <h2>Акссесуары</h2>
        </div>
      </div>
      <hr />
      <div className="middle-access">
        <div className="as-text">
          <div className="as-category">
            <div className="option-br">
              <select>
                <option value="">Бренд</option>
              </select>

              <div className="as-search">
                <input type="search" placeholder="Поиск" />
                <img src={search} alt="search" />
              </div>
            </div>

          </div>

          <div className="vid-o">
            <div className="vid">
              <select>
                <option value="">Вид</option>
              </select>
            </div>
            <div className="vid">
              <select>
                <option value="">Избранное</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
