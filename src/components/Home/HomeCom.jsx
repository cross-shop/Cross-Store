
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish } from "../../redux/wish2/wishSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Home.scss";
import mixer1 from "../../assets/image/mixer1.png";
import mixer2 from "../../assets/image/mixer2.png";
import mixer3 from "../../assets/image/mixer3.png";
import spes from "../../assets/image/spes.png";
import custom1 from "../../assets/image/custom1.png";
import custom2 from "../../assets/image/custom2.png";
import catolog from "../../assets/image/3.png";
import catolog2 from "../../assets/image/catolog2.png";
import heart from "../../assets/svg/heart.svg";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishMessage, setWishMessage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data); // Сохраняем копию для фильтрации
      } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const handleFilterClick = () => {
    setFilteredProducts(
      products.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      )
    );
  };

  const handleAddToWish = (item) => {
    dispatch(addWish(item));
    setWishMessage("Товар добавлен в избранное");

    setTimeout(() => {
      setWishMessage("");
    }, 2000);
  };


  

  return (
      <div className="main">

        <div className="hot">
        <h1>Cамое популярное сейчас</h1>

        <div className="pereiti">Перейти</div></div>

        <div className="main-drops">
          {filteredProducts.map((item) => (
            <div key={item.id} className="drop">
              <img src={item.image || catolog} alt={item.name} />

              <div className="new">
                <p>HOT</p>
              </div>

              <div className="heart" onClick={() => handleAddToWish(item)}>
                {wishlist.some((fav) => fav.id === item.id) ? (
                  <FaHeart color="red" size={24} />
                ) : (
                  <FaRegHeart color="gray" size={24} />
                )}
              </div>

              <div className="drop-text">
                <p>{item.name}</p>
                <h4>${item.price}</h4>
              </div>
            </div>
          ))}
          
        </div>


        {/* Сообщение об избранном */}
        {wishMessage && <p className="wish-message">{wishMessage}</p>}


        
      </div>
  );
}

export default HomeCom;
