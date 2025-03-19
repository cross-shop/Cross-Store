import React, { useState, useEffect, useRef } from 'react';
import './Products.scss';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cart/cartSlice';
import { addWish,removeWish } from '../../redux/wish2/wishSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function Products() {
  const wishlist = useSelector((state)=>state.wishlist.wishlist)
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("")
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
        const updatedProducts = data.map((item) => ({
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



  const toggleLike = (item) => {
    if (wishlist.some((fav) => fav.id === item.id)) {
      dispatch(removeWish(item.id));
    } else {
      dispatch(addWish(item));
    }
  };

  // const toggleLike = (id) => {
  //   setProducts((prevProducts) => {
  //     const updatedProducts = prevProducts.map((item) =>
  //       item.id === id ? { ...item, isLiked: !item.isLiked } : item
  //     );

  //     const likedItems = updatedProducts
  //       .filter((item) => item.isLiked)
  //       .map((item) => item.id);

  //     localStorage.setItem("likedItems", JSON.stringify(likedItems));
  //     return updatedProducts;
  //   });
  // };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -900,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 900,
        behavior: 'smooth',
      });
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    setCartMessage("Товар добавлен в корзину");



    setTimeout(() => {
      setCartMessage("");
    }, 2000);
  };



    

  const handleAddToWish = (item) => {
    dispatch(addWish(item));
    setWishMessage("Товар добавлен в избранное");

    setTimeout(() => {
      setWishMessage("");
    }, 2000);
  };




  return (
    <div className='ali container'>
      {cartMessage && (
        <div className="cart-message">
          {cartMessage}
        </div>
      )}
      {wishMessage && (
        <div className="wish-message">
          {wishMessage}
        </div>
      )}

      <div className='main1-kros' ref={containerRef}>
        {products.slice(0, 24).map((item) => (
          <div key={item.id}>
            <div className='kros1'>
              <div className='mm'>
                <Link to={"/obuv"}>
                  <img src={item.avatar} alt="" />
                </Link>
              </div>

              <div className='pw1'></div>
              <br />
              <div className='main-top1'>
                <p>{item.name}</p>
                <h5>{item.price}c</h5>
              </div>
              <div className='product-bottom'>
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>

                <div className='icon-like' onClick={() => handleAddToWish(item)}> 
                  {wishlist.some((fav) => fav.id === item.id) ? (
                    <FaHeart color="red" size={24} />
                  ) : (
                    <FaRegHeart color="gray" size={24} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-arrow left-arrow" onClick={scrollLeft}>
        &#8592;
      </button>
      <button className="scroll-arrow right-arrow" onClick={scrollRight}>
        &#8594;
      </button>
    </div>
  );
}

export default Products;



