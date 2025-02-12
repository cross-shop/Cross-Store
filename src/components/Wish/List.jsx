import React from 'react';
import "./List.css"
import product from "../../assets/image/1.webp"
import product2 from "../../assets/image/1 (1).png"
import product3 from "../../assets/image/kampus.png"
import add from "../../assets/svg/add.svg"

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

      <div className='kard'>
        <img src={product} alt="" />
        <div className="item">
        <strong>2500 сом</strong>
            <del>3620</del>

            <div className="add">
          <img  src= {add}alt="" /></div>
        </div>

              <div className="brand">
        <h5>Nike</h5>
        <h4>/ Крoссовки Air Force 1 </h4>
              </div> 
              <div className="nike">
                <button>В корзине</button>
              </div>
          </div>




 
      <div className='kard'>
        <img src={product2} alt="" />
        <div className="item">
        <strong>3200 сом</strong>
            <del>5620</del>
            <div className="add">
          <img  src= {add}alt="" /></div>
        </div>
        
              <div className="brand">
        <h5>NB</h5>
        <h4>/ New Balance</h4>
              </div> 
          
              <div className="nike">
                <button>В корзине</button>
              </div>
          </div>


          <div className='kard'>
        <img src={product3} alt="" />
        <div className="item">
        <strong>3800 сом</strong>
            <del>6620</del>
            <div className="add">
          <img  src= {add}alt="" /></div>
        </div>
        
              <div className="brand">
        <h5>Adidas</h5>
        <h4>/ Campus</h4>
              </div> 
         
              <div className="nike">
                <button>В корзине</button>
                </div>
              </div>
          </div>
       </div>
   
  );
}

export default List;
