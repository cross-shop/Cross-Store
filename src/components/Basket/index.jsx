import React, { useState } from 'react';
import "./Basket.scss";
import { useSelector } from 'react-redux';

function BasketPage() {
    const { ali } = useSelector((state) => state.carts);
    
    const [quantities, setQuantities] = useState(ali.map(() => 1)); 
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

    return (
        <section className='basket-page'>
            <div className='basket-container container'>
                {ali.map((item, index) => (
                    <div className='box-left' key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{quantities[index]} product(s)</p>
                        <div className='box1'>
                            <div className='inbox'>
                                <img className='img-product' src={item.avatar} alt="product" loading='lazy' />
                                <div className='detile'>
                                    <span>25-october</span>
                                    <div className='icons'>
                                        <img
                                            src="https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png"
                                            alt="like-icon"
                                            loading='lazy'
                                        />
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                                            alt="delete-icon"
                                            loading='lazy'
                                        />
                                    </div>
                                </div>      
                            </div>
                            <div className='box2'>
                                <button onClick={() => decreaseQuantity(index)}>-</button>
                                <span>{quantities[index]}</span>
                                <button onClick={() => increaseQuantity(index)}>+</button>
                            </div>
                            <span className='price'>{item.price * quantities[index]}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='box-right'>
                <h6>select delivery address</h6>
                <div className='info'>
                    <p>Товары шт.</p>
                    <span>{quantities.reduce((a, b) => a + b, 0)} шт.</span>
                </div>
                <div className='info-2'>
                    <h3>Total</h3>
                    <span>{calculateTotalPrice()}</span>
                </div>
                <button>Order</button>
            </div>
            <div className='optioins container'>
                <div className='optioin'>
                    <strong>Способ оплаты</strong>
                    <p>Войти или зарегистрироваться, чтобы выбрать способ оплаты</p>
                </div>
                <div className='optioin'>
                    <strong>Мои данные</strong>
                    <p>Войти или зарегистрироваться, чтобы оформить заказ</p>
                </div>
            </div>
        </section>
    );
}


export default BasketPage;
