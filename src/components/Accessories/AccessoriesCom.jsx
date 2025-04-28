import React from "react";
import "./Accessories.Com.scss";
import search from "../../assets/svg/search.svg";
import ass1 from "../../assets/image/ass1.png";
import BrandFilter from "../BrandFilter/BrandFilter";

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
      <div className="middle-access">
        <div className="as-text">
          <div className="as-category">
            <div className="option-br">
              <div className="brandfilter">
                <BrandFilter />
              </div>

              <select>
                <option value="">Отделение</option>
              </select>

              <select>
                <option value="">Цвет</option>
              </select>

              <select>
                <option value="">Размер одежды</option>
              </select>

              <select>
                <option value="">Цена</option>
              </select>
            </div>

            <div className="as-img">
              {[...Array(12)].map((_, i) => (
                <img key={i} src={ass1} alt={`ass${i}`} />
              ))}
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
