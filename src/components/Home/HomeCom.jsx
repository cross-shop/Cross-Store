import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addWish, removeWish } from "../../redux/wish2/wishSlice";
import { Link } from "react-router-dom";
import "./Home.scss";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function HomeCom() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistIds = useMemo(
    () => new Set(wishlist.map((item) => item.id)),
    [wishlist]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Ошибка при загрузке продуктов:", err);
        setError("Не удалось загрузить продукты.");
      }
    };

    fetchProducts();
  }, []);

  const handleToggleWish = (item) => {
    if (wishlistIds.has(item.id)) {
      dispatch(removeWish(item.id));
    } else {
      dispatch(addWish(item));
      setMessage("Добавлено в избранное");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -900 : 900,
        behavior: "smooth",
      });
    }
  };

  const foodProducts = products.filter((item) => item.category === "food");

  return (
    <div className="main container">
      {message && <div className="wish-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="hot">
        <h1>Самое популярное сейчас</h1>
        <Link to="/popular" className="pereiti">
          Перейти
        </Link>
      </div>

      <div className="main-drops" ref={containerRef}>
        {foodProducts.map((item) => (
          <div className="drop" key={item.id}>
            <Link to="/obuv">
              <img src={item.avatar} alt={item.name} />
            </Link>
            <div className="new">
              <p>HOT</p>
            </div>
            <div className="heart" onClick={() => handleToggleWish(item)}>
              {wishlistIds.has(item.id) ? (
                <FaHeart color="red" size={24} />
              ) : (
                <FaRegHeart color="gray" size={24} />
              )}
            </div>
            <div className="drop-text">
              <p>{item.name}</p>
              <h4>{item.price}c</h4>
            </div>
          </div>
        ))}
        {foodProducts.length === 0 && (
          <p style={{ textAlign: "center", width: "100%", marginTop: "2rem" }}>
            Азырынча продуктылар жок...
          </p>
        )}
      </div>

      <button
        className="scroll-arrow left-arrow"
        onClick={() => scrollContainer("left")}
      >
        &#8592;
      </button>
      <button
        className="scroll-arrow right-arrow"
        onClick={() => scrollContainer("right")}
      >
        &#8594;
      </button>
    </div>
  );
}

export default HomeCom;