import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateCart, toggleLike } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import "./Basket.scss";
import { auth } from "../../firebase";
import { clearCart } from "../../redux/cart/cartSlice";

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
    dispatch(removeCart(id));
  };

  const handleToggleLike = (id) => {
    dispatch(toggleLike(id));
  };

  const handleWhatsAppOrder = () => {
    const user = auth.currentUser;

    if (!user) {
      alert(
        "Пожалуйста, войдите в систему или зарегистрируйтесь, чтобы разместить заказ."
      );
      return;
    }

    const phoneNumber = "996706237053";
    const message =
      `Здравствуйте! Я хотел бы сделать заказ.\n\n` +
      ali
        .map(
          (item, index) =>
            `• ${item.name} - ${quantities[index]} штук - ${
              item.price * quantities[index]
            }c`
        )
        .join("\n") +
      `\n\nОбщая сумма: ${calculateTotalPrice()}c`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleClearCart = () => {
    const confirmed = window.confirm(
      "Вы уверены, что хотите очистить корзину?"
    );
    if (confirmed) {
      dispatch(clearCart());
    }
  };

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
            <img
              className="img-product"
              src={item.avatar}
              alt="product"
              loading="lazy"
            />

            <div className="box1">
              <div className="cart-top">
                <h5>{item.name}</h5>
                <span className="price">{item.price}c</span>
              </div>
              <div className="cart-main">
                <p>{quantities[index]} product(s)</p>
                <div className="box2">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
              </div>
              <button
                className="delete-icon"
                onClick={() => handleDelete(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
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
          <button onClick={handleWhatsAppOrder} className="whatsapp-order-btn">
            заказать
          </button>
        </div>
      </div>

      <div className="clear container">
        <button className="clear-cart-btn" onClick={handleClearCart}>
          отчисть корзину
        </button>
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
