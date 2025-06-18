import React, { useState } from "react";
import "./List.css";
import { useSelector, useDispatch } from "react-redux";
import { removeWish } from "../../redux/wish2/wishSlice";
import close from "../../assets/svg/x.svg";

function List() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("newest");

  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    } else {
      return new Date(a.dateAdded) - new Date(b.dateAdded);
    }
  });

  return (
    <div className="wishlist-app container">
      <div className="app">
        <select
          className="sort-select"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="newest">По дате добавления ↓</option>
          <option value="oldest">По дате добавления ↑</option>
        </select>
      </div>
      <div className="merch">
        {sortedWishlist.length > 0 &&
          sortedWishlist.map((item) => (
            <div className="kard" key={item.id}>
              <div
                className="closeee"
                onClick={() => dispatch(removeWish(item.id))}
              >
                <img src={close} alt="Удалить" />
              </div>
              <img src={item.avatar} alt={item.name} />
              <div className="nike">
                <p>{item.name}</p>
                <h5>{item.price}$</h5>
                <button>SELECT SIZE</button>
              </div>
            </div>
          ))}
      </div>

      <div
        className="wish"
        style={{ display: sortedWishlist.length > 0 ? "none" : "block" }}
      >
        <h2>Вы еще не добавили товары в избранное.</h2>

        <a href="/">
          <button>Добавьте товары в избранное</button>
        </a>
      </div>
    </div>
  );
}
export default List;