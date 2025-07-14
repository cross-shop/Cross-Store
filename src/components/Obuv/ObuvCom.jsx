import React, { useState, useEffect } from "react";
import "./obuv.scss";
import { Link, useParams, useLocation } from "react-router-dom";
import Acardion2 from "../Acardion2/Acardion2";

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function ObuvCom() {
  const { id } = useParams();
  const location = useLocation();
  const locationProduct = location.state?.selectedProduct || null;

  const [sameCategoryProducts, setSameCategoryProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(locationProduct);
  const [selectedImage, setSelectedImage] = useState(
    locationProduct?.avatar || null
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setProducts(data); 

        let product;

        if (!locationProduct) {
          product = data.find((item) => item.id === id);
          setSelectedProduct(product);
          setSelectedImage(product?.avatar || null);
        } else {
          product = locationProduct;
          setSelectedProduct(locationProduct);
          setSelectedImage(locationProduct.avatar);
        }

        if (product) {
          const sameCategory = data
            .filter(
              (item) =>
                item.category === product.category && item.id !== product.id
            )
            .slice(0, 8);
          setSameCategoryProducts(sameCategory);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProducts();
  }, [id, locationProduct]);

  if (!selectedProduct) {
    return <p>Продукт табылган жок...</p>;
  }

  const sizeOptions = [
    {
      label: "size",
      sizes: [
        { size: "36", availability: "под заказ" },
        { size: "38", availability: "в наличии" },
        { size: "40", availability: "в наличии" },
        { size: "42", availability: "в наличии" },
      ],
    },
  ];

  return (
    <main className="main-obuv container">
      <div className="obuv-div">
        <div className="obuv-1">
          <div className="obuv-1img">
            <img src={selectedImage} alt="Main product" />
          </div>
          <div className="obuv-2img">
            {sameCategoryProducts.map((product, index) => (
              <img
                key={index}
                src={product.avatar}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(product.avatar)}
              />
            ))}
          </div>
        </div>

        <div className="obuv-2">
          <div className="obuv-2-Nike">
            <div className="nike3">
              <h1>{selectedProduct.name}</h1>
            </div>

            <div className="price">
              <p>{selectedProduct.price}с</p>
            </div>

            <div className="nike-button">
              <Link to={`/payment`}>
                <button>Быстрая покупка</button>
              </Link>
              <button>Добавить в корзину</button>
            </div>
          </div>

          <div className="nike-razmer">
            <h1>Выберите размер</h1>
          </div>

          <div className="nike-grid">
            {sizeOptions[0].sizes.map((item, index) => (
              <div className="grid1" key={index}>
                <h1>{item.size}</h1>
                <p>{item.availability}</p>
              </div>
            ))}
          </div>

          <div className="guarantee">
            <Acardion2 />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ObuvCom;
