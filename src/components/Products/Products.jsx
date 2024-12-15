import React, { useState, useEffect, useRef } from 'react';
import './Products.scss';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa"; // React Icons

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  // Лайкталган продукттардын ID'ларын localStorage'дан алуу
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        // LocalStorage'дан лайкталган ID'ларды алуу
        const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
        const updatedProducts = data.map((item) => ({
          ...item,
          isLiked: likedItems.includes(item.id), // Лайк абалын белгилөө
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleLike = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      );

      // Лайкталган продукттардын ID'ларын localStorage'га сактоо
      const likedItems = updatedProducts
        .filter((item) => item.isLiked)
        .map((item) => item.id);

      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      return updatedProducts;
    });
  };

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

  return (
    <div className='ali container'>
      <div className='main1-kros' ref={containerRef}>
        {products.slice(0, 24).map((item) => (
          <div key={item.id}>
            <div className='kros1'>
              <div className='mm'>
                <Link to={"/obuv"}>
                  <img
                    src={item.avatar}
                    alt=""
                  />
                </Link>
              </div>

              <div className='pp'>{item.isAvailable}</div>
              <div className='pw1'></div>
              <br />
              <div className='main-top1'>
                <p>{item.name}</p>
                <h5>{item.price}</h5>
              </div>
              <div className='product-bottom'>
                <button onClick={() => dispatch(addCart(item))}>Add to cart</button>

                {/* Лайк иконкасы */}
                <div className='icon-like' onClick={() => toggleLike(item.id)}>
                  {item.isLiked ? (
                    <FaHeart color="red" size={24} /> // Толтурулган жүрөк
                  ) : (
                    <FaRegHeart color="gray" size={24} /> // Бош жүрөк
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
