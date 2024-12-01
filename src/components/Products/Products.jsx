import React, { useState, useEffect, useRef } from 'react';
import './Products.scss';
import Like2 from '../../assets/svg/Like3.svg';
import { Link } from 'react-router-dom';

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function Products() {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);  // Скролл контейнерине жетүү үчүн

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const handleAvatarClick = (item) => {
    console.log("Avatar clicked", item);
  };

  const toggleButton = (item) => {
    console.log("Button clicked", item);
  };

  const toggleLike = (item) => {
    console.log("Like clicked", item);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -900, // Сколько пикселей прокручиваем
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 900, // Сколько пикселей прокручиваем
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Продуктыларды көрсөтүүчү контейнер */}
      <div className='main1-kros' ref={containerRef}>
        {products.slice(0, 24).map((item) => (
          <div key={item.id}>
            <div className='kros1'>
              <div className='mm'>
                <Link to={"/obuv"}>
                  <img 
                    src={item.avatar} 
                    alt="" 
                    onClick={() => handleAvatarClick(item)} // Обработчик клика
                  />
                </Link>
              </div>
              <div>
                <button onClick={() => toggleButton(item)}>Add to cart</button>
                <img className='icon-like'
                  src={Like2} 
                  onClick={() => toggleLike(item)} 
                  alt="" 
                />
              </div>
              <div className='pp'>{item.isAvailable ? "In stock" : "Out of stock"}</div>
              <div className='pw1'></div>
              <br />
              <div className='main-top1'>
                <p>{item.name}</p>
                <h5>{item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Стрелки для прокрутки */}
      <button className="scroll-arrow left-arrow" onClick={scrollLeft}>
        &#8592; {/* Стрелка влево */}
      </button>
      <button className="scroll-arrow right-arrow" onClick={scrollRight}>
        &#8594; {/* Стрелка вправо */}
      </button>
    </div>
  );
}

export default Products;
