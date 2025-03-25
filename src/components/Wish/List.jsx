import React, { useState } from "react";
import "./List.css";
import close from "../../assets/svg/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeWish } from "../../redux/wish2/wishSlice";

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
    <div className="wishlist-app">
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
        {sortedWishlist.length > 0 ? (
          sortedWishlist.map((item) => (
            <div className="kard" key={item.id}>
              <div
                className="close"
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
          ))
        ) : (
          <p className="never">Вы еще не добавили товары в избранное.</p>
        )}
      </div>
    </div>
  );
}

export default List;
