import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cart/cartSlice";
import { addWish, removeWish } from "../../redux/wish2/wishSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Search.scss";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function SearchCom() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const [sortOrder, setSortOrder] = useState("asc");

  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const wishlistIds = useMemo(
    () => new Set(wishlist.map((item) => item.id)),
    [wishlist]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        setSearchProducts(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleMinChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxChange = (e) => setMaxPrice(Number(e.target.value));
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    setCartMessage("Товар добавлен в корзину");
    setTimeout(() => setCartMessage(""), 2000);
  };

  const handleToggleWish = (item) => {
    if (wishlistIds.has(item.id)) {
      dispatch(removeWish(item.id));
    } else {
      dispatch(addWish(item));
      setWishMessage("Товар добавлен в избранное");
      setTimeout(() => setWishMessage(""), 2000);
    }
  };

  const filteredSortedProducts = searchProducts
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.price >= minPrice &&
        item.price <= maxPrice
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div>
      <div className="main3-input3 container"></div>

      {cartMessage && <div className="alert-cart">{cartMessage}</div>}
      {wishMessage && <div className="alert-wish">{wishMessage}</div>}

      <div className="search-two container">
        <div className="catalog-1">
          <h1>Фильтры</h1>
          <div className="price-range1">
            <label>Цена</label>
            <div className="slider-container1">
              <input
                type="range"
                min="0"
                max="100000"
                value={minPrice}
                step="100"
                onChange={handleMinChange}
              />
              <input
                type="range"
                min="0"
                max="100000"
                value={maxPrice}
                step="100"
                onChange={handleMaxChange}
              />
            </div>
            <div className="price-labels1">
              <input type="text" value={minPrice.toLocaleString()} readOnly />
              <span>–</span>
              <input type="text" value={maxPrice.toLocaleString()} readOnly />
              <span></span>
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Сортировка по цене:</label>
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="asc">По возрастанию</option>
              <option value="desc">По убыванию</option>
            </select>
          </div>
        </div>

        <div className="catalog-2">
          {filteredSortedProducts.length > 0 ? (
            filteredSortedProducts.map((item) => (
              <div key={item.id} className="product-card">
                <div className="image-box">
                  <Link
                    to={`/obuv/${item.id}`}
                    state={{ selectedProduct: item }}
                  >
                    <img src={item.avatar} alt={item.name} />
                  </Link>
                </div>
                <div className="product-info">
                  <p>{item.name}</p>
                  <h5>{item.price.toLocaleString()}с</h5>
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
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Ничего не найдено по вашему запросу.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCom;