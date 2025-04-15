import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addCart } from "../../redux/cart/cartSlice";
import { addWish, removeWish } from "../../redux/wish2/wishSlice";
import { Link } from "react-router-dom";
import "./Home.scss";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("");
  const containerRef = useRef(null);

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    setCartMessage("Товар добавлен в корзину");
    setTimeout(() => setCartMessage(""), 2000);
  };

  const handleToggleWish = (item) => {
    if (wishlist.some((w) => w.id === item.id)) {
      dispatch(removeWish(item.id));
    } else {
      dispatch(addWish(item));
      setWishMessage("Добавлено в избранное");
      setTimeout(() => setWishMessage(""), 2000);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
      {wishMessage && <div className="wish-message">{wishMessage}</div>}

      <div className="hot">
        <h1>Самое популярное сейчас</h1>
        <div className="pereiti">Перейти</div>
      </div>

      <div className="main-drops" ref={containerRef}>
        {products.slice(0, 24).map((item) => (
          <div className="drop" key={item.id}>
            <Link to="/obuv">
              <img src={item.avatar} alt={item.name} />
            </Link>
            <div className="new">
              <p>HOT</p>
            </div>
            <div className="heart" onClick={() => handleToggleWish(item)}>
              {wishlist.some((fav) => fav.id === item.id) ? (
                <FaHeart color="red" size={24} />
              ) : (
                <FaRegHeart color="gray" size={24} />
              )}
            </div>
            <div className="drop-text">
              <p>{item.price}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>


      <div className="hot">
        <h1>Новинки</h1>
        <div className="pereiti">Перейти</div>
      </div>

      <div className="main-drops" ref={containerRef}>
        {products.slice(0, 24).map((item) => (
          <div className="drop" key={item.id}>
            <Link to="/obuv">
              <img src={item.avatar} alt={item.name} />
            </Link>
            <div className="new">
              <p>HOT</p>
            </div>
            <div className="heart" onClick={() => handleToggleWish(item)}>
              {wishlist.some((fav) => fav.id === item.id) ? (
                <FaHeart color="red" size={24} />
              ) : (
                <FaRegHeart color="gray" size={24} />
              )}
            </div>
            <div className="drop-text">
            <p>{item.price}</p>
            <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCom;
