import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cart/cartSlice";
import { addWish, removeWish } from "../../redux/wish2/wishSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function Products3() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("");
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const wishlistIds = useMemo(
    () => new Set(wishlist.map((item) => item.id)),
    [wishlist]
  );

  const handleToggleWish = (item) => {
    if (wishlistIds.has(item.id)) {
      dispatch(removeWish(item.id));
    } else {
      dispatch(addWish(item));
      setWishMessage("Товар добавлен в избранное");
      setTimeout(() => setWishMessage(""), 2000);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

        const filtered = data.filter((item) => item.category === "jordan");

        const updatedProducts = filtered.map((item) => ({
          ...item,
          isLiked: likedItems.includes(item.id),
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setCartMessage("Товар уже в корзине");
      setTimeout(() => setCartMessage(""), 2000);
      return;
    }

    dispatch(addCart(item));
    setCartMessage("Товар добавлен в корзину");
    setTimeout(() => setCartMessage(""), 2000);
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
    <div className="container-wrapper container">
      <h1>Component Jordan</h1>
      {cartMessage && <div className="alert-cart">{cartMessage}</div>}
      {wishMessage && <div className="alert-wish">{wishMessage}</div>}

      <div className="carousel-wrapper" ref={containerRef}>
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="image-box">
                <Link to={`/obuv/${item.id}`} state={{ selectedProduct: item }}>
                  <img src={item.avatar} alt={item.name} />
                </Link>
              </div>
              <div className="product-info">
                <p>{item.name}</p>
                <h5>{item.price}c</h5>
              </div>
              <div className="card-footer">
                <button
                  className="action-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
                <div
                  className="icon-like"
                  onClick={() => handleToggleWish(item)}
                >
                  {wishlistIds.has(item.id) ? (
                    <FaHeart color="red" size={24} />
                  ) : (
                    <FaRegHeart color="gray" size={24} />
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Продукты табылган жок же жүктөлүүдө...</p>
        )}
      </div>

      <button className="scroll-button scroll-left" onClick={scrollLeft}>
        &#8592;
      </button>
      <button className="scroll-button scroll-right" onClick={scrollRight}>
        &#8594;
      </button>
      <hr />
    </div>
  );
}

export default Products3;
