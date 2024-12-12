import React from 'react'
import "./Basket.scss"
import { useSelector } from 'react-redux'

function BasketPage() {

    const { ali } = useSelector((state) => state.carts)

    return (
        <section className='basket-page'>
            <div className='basket-container container'>
                {
                    ali.map((item) => (
                        <div className='box-left'>
                            <h3>Basket</h3>
                            <p>1 product</p>
                            <div className='box1'>
                                <div className='inbox'>
                                    <img className='img-product' src={item.avatar} alt="product" loading='lazy' />
                                    <div className='detile'>
                                        <h5>{item.title}</h5>
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
                                                // onClick={deleteItem}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='box2'>
                                    <button onClick={decrement}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={increment}>+</button>
                                </div> */}
                                <span className='price'>{item.price} ₽</span>
                            </div>
                        </div>
                    ))}

            </div>
                <div className='box-right'>
                    <h6>select delivery address</h6>
                    <div className='info'>
                        {/* <p>Товары {quantity}шт.</p> */}
                        {/* <span>{totalPrice} ₽</span> */}
                    </div>
                    <div className='info-2'>
                        <h3>Total</h3>
                        {/* <span>{totalPrice} ₽</span> */}
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
    )
}

export default BasketPage
