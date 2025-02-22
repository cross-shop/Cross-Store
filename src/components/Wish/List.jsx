import React from "react";
import "./List.css";
import product1 from "../../assets/image/1.png";
import product2 from "../../assets/image/2.png";
import product3 from "../../assets/image/3.png";
import close from "../../assets/image/x.png";

function List() {
  return (
    <div className="wishlist-app">
      <div className="app">
        <select className="sort-select">
          <option value="newest">По дате добавления ↓</option>
          <option value="oldest">По дате добавления ↑</option>
        </select>
      </div>
      <div className="merch">
        <div className="kard">
          <img src={product1} alt="" />
          <div className="close">
            <img src={close} alt="" />
          </div>

          <div className="nike">
            <p> (WMNS) Li-Ning Plus 'Black White' AGLR234-4 </p>
            <h5>89$</h5>
            <button>SELECT SIZE</button>
          </div>
        </div>

        <div className="kard">
          <div className="close">
            <img src={close} alt="" />
          </div>
          <img src={product2} alt="" />
          <div className="item"></div>
          <div className="nike">
            <p> (WMNS) Li-Ning Plus 'Black White' AGLR234-4 </p>
            <h5>89$</h5>
            <button>SELECT SIZE</button>
          </div>
        </div>

        <div className="kard">
          <div className="close">
            <img src={close} alt="" />
          </div>
          <img src={product3} alt="" />
          <div className="item"></div>
          <div className="nike">
            <p> (WMNS) Li-Ning Plus 'Black White' AGLR234-4 </p>
            <h5>89$</h5>
            <button>SELECT SIZE</button>
          </div>
        </div>

        <div className='kard'>
          <div className="close">
            <img src={close} alt="" />
          </div>
          <img src={product2} alt="" />
          <div className="item">
          </div>
          <div className="nike">
            <p>(WMNS) Air Jordan 1 Low 'Blue Coconut Milk' HQ4186-111</p>
            <h5>154$</h5>
            <button>SELECT SIZE</button>
          </div>
        </div>

        <div className='kard'>
          <div className="close">
            <img src={close} alt="" />
          </div>
          <img src={product3} alt="" />
          <div className="item">
          </div>
          <div className="nike">
            <p>  Nike x Supreme Air Force 1 Low 'Box Logo - Black' CU9225-001</p>
            <h5>116$</h5>
            <button>SELECT SIZE</button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default List;
