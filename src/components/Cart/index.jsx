import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateCart, toggleLike } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import "./Basket.scss";

function BasketPage() {
  const { ali } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(ali.map(() => 1));

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(updateCart(savedCart));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const calculateTotalPrice = () => {
    return ali.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const handleDelete = (id) => {
    dispatch(removeCart(id)); // Продуктту Redux store'дон жана LocalStorage'дан өчүрүү
  };

  const handleToggleLike = (id) => {
    dispatch(toggleLike(id)); // Лайк статусун өзгөртүү
  };

  // Корзина бош болсо билдирүүнү көрсөтүү
  if (ali.length === 0) {
    return (
      <section className="empty-basket">
        <h2>Ваша корзина пуста</h2>
        <Link to={"/"}>
          <button className="cart-btn">Добавьте товары в корзину</button>
        </Link>
      </section>
    );
  }

  return (
    <section className="basket-page">
      <div className="basket-container container">
        {ali.map((item, index) => (
          <div className="box-left" key={item.id}>
            <h3>{item.name}</h3>
            <p>{quantities[index]} product(s)</p>
            <div className="box1">
              <div className="inbox">
                <img
                  className="img-product"
                  src={item.avatar}
                  alt="product"
                  loading="lazy"
                />
                <div className="detile">
                  <span>25-october</span>
                  <div className="icons">
                    <div
                      className="like-icon"
                      onClick={() => handleToggleLike(item.id)}
                    >
                      {item.isLiked ? (
                        <FaHeart color="red" size={20} />
                      ) : (
                        <FaRegHeart color="gray" size={20} />
                      )}
                    </div>
                    <div
                      className="delete-icon"
                      onClick={() => handleDelete(item.id)}
                    >
                      🗑️
                    </div>
                  </div>
                </div>
              </div>
              <div className="box2">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <span className="price">{item.price}c</span>
            </div>
          </div>
        ))}
      </div>
      <div className="box-right">
        <h6>select delivery address</h6>
        <div className="info">
          <p>Товары шт.</p>
          <span>{quantities.reduce((a, b) => a + b, 0)} шт.</span>
        </div>
        <div className="info-2">
          <h3>Total</h3>
          <span>{calculateTotalPrice()}c</span>
        </div>
        <button>Order</button>
      </div>
      <div className="optioins container">
        <div className="optioin">
          <strong>Способ оплаты</strong>
          <p>Войти или зарегистрироваться, чтобы выбрать способ оплаты</p>
        </div>
        <div className="optioin">
          <strong>Мои данные</strong>
          <p>Войти или зарегистрироваться, чтобы оформить заказ</p>
        </div>
      </div>
    </section>
  );
}

export default BasketPage;
