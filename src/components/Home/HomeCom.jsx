import React, { useState, useEffect } from 'react'; 
import "./Home.scss"; 
import mainimage from "../../assets/image/mainimage.png"; 
import Like from "../../assets/svg/Like.svg"; 
import Like2 from "../../assets/svg/Like2.svg"; 
import Magazin from "../../assets/svg/magazin.svg"; 
import search from "../../assets/svg/search.svg"; 
import x from "../../assets/svg/delete.svg"; 
import { Link } from 'react-router-dom'; 

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Функция для получения данных
  const getProduct = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data); 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleMagazinClick = () => {
    setModalVisible(true);
  };

  const handleCloseClick = () => {
    setModalVisible(false);
  };

  const toggleLike = (item) => {
    setSelectedProducts((prevSelected) => {
      // Убираем продукт, если он уже в списке
      if (prevSelected.includes(item)) {
        return prevSelected.filter(selectedItem => selectedItem !== item);
      }
      // Добавляем продукт в список
      return [...prevSelected, item];
    });
  };

  return (
    <div>
      <header className='header1 container'>
        <img src={mainimage} alt="" />
        <div className='header1gg'>
          <div className='header1-img'>
            <Link to={`/wishlist`}>
              <img src={Like} alt="" />
            </Link>
            <img src={Magazin} alt="" onClick={handleMagazinClick} />

            {isModalVisible && (
              <div className='icon2'>
                <div className='modal-nur'>
                  <div className='modal2-nur'>
                    <h2>Корзина</h2>
                    <img src={x} alt="" onClick={handleCloseClick} />
                  </div>
                  <div className='m3-nur'>
                    <h5>{selectedProducts.length} товара</h5>
                    <h5>Очистить</h5>
                  </div>
                  <div className='bm-nur'>
                    <div className='bm2-nur'>
                      <h2>Итого</h2>
                      <h2 style={{display: "flex", gap: "10px"}}>{selectedProducts.reduce((total, product) => total + product.price, 0)}</h2>
                    </div>
                    <div className='btn-nur'>
                      <button>Оформить</button>
                    </div>
                  </div>
                  <div className='selected-items'>
                    {selectedProducts.map((item) => (
                      <div key={item.id} className='selected-item'>
                        <img src={item.avatar} alt={item.name} style={{ height: "200px", width: "200px" }} />
                        <div>
                          <p>{item.name}</p>
                          <h5>{item.price}₽</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <Link to={`/search`}>
              <img src={search} alt="" />
            </Link>
          </div>
        </div>

      </header>

      <main className='main1 container'>
        <div className='main1-kros'>
          {
            products.slice(0, 4).map((item) => (
              <div key={item.id} data={item}>
                <div className='kros1'>
                  <div className='mm'>
                    <img src={item.avatar} alt="" style={{ height: "248px", marginTop: "-60px" }} />
                  </div>
                  <div className='pp'>NOT</div>
                  <div className='pw1' onClick={() => toggleLike(item)}>
                    <img src={Like2} alt="" />
                  </div> 
                  <br />
                  <div className='main-top1'>
                    <p>{item.name}</p>
                    <p>Le Bambidou</p>
                    <h5>{item.price}₽</h5>
                  </div> 
                </div>
              </div>
            ))   
          }
        </div>
      </main>
    </div>
  );
}

export default HomeCom;
