import React, { useState, useEffect } from "react";
import "./obuv.scss";
import Like3 from "../../assets/svg/Like3.svg";
import { Link } from "react-router-dom";
import obuv1 from "../../assets/image/obuv1.png";
import Acardion2 from "../Acardion2/Acardion2";
import { useLocation } from "react-router-dom";
const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";
function ObuvCom() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const selectedProduct = location.state?.selectedProduct || null;
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct?.avatar || obuv1
  );
  const [currentView, setCurrentView] = useState("size");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const handleNextImage = () => {
    if (products.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      setSelectedImage(
        products[(currentIndex + 1) % products.length]?.avatar || obuv1
      );
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const toggleButton1 = (item) => {
    if (!item || !selectedSize) return;

    const productWithSize = { ...item, size: selectedSize };

    setSelectedProducts((prevSelected) => {
      if (prevSelected.some((selectedItem) => selectedItem.id === item.id)) {
        return prevSelected.filter(
          (selectedItem) => selectedItem.id !== item.id
        );
      }
      return [...prevSelected, productWithSize];
    });

    setIsModalVisible(true);
  };

  const sizeOptions = [
    {
      label: "size",
      sizes: [
        { size: "35.5", availability: "под заказ" },
        { size: "36", availability: "в наличии" },
        { size: "36.5", availability: "в наличии" },
        { size: "37", availability: "в наличии" },
        { size: "37.5", availability: "в наличии" },
        { size: "38", availability: "в наличии" },
        { size: "38.5", availability: "в наличии" },
        { size: "39", availability: "в наличии" },
        { size: "39.5", availability: "в наличии" },
        { size: "40", availability: "в наличии" },
        { size: "40.5", availability: "в наличии" },
        { size: "41", availability: "в наличии" },
        { size: "41.5", availability: "в наличии" },
        { size: "42", availability: "в наличии" },
        { size: "42.5", availability: "в наличии" },
        { size: "43", availability: "в наличии" },
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
            {products.map((product, index) => (
              <img
                key={index}
                src={product.avatar || obuv1}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(product.avatar || obuv1)}
              />
            ))}
          </div>
        </div>

        <div className="obuv-2">
          <div className="obuv-2-Nike">
            <div className="nike4">
              <Link to={`/`}>
                <p>Главная /</p>
              </Link>
              <Link to={"/catalog"}>
                <p>Каталог /</p>
              </Link>
              <Link to={"/obuv"}>
                <p>Обувь /</p>
              </Link>
              <p> Кроссовки</p>
            </div>

            <div className="nike3">
              <h1>Кроссовки Nike Milu Deer</h1>
              <img src={Like3} alt="Like icon" />
            </div>

            <div className="price">
              <p>$133</p>
              <span>Цвет</span>
            </div>

            <div className="nike-button">
              <Link to={`/oferzakaz`}>
                <button>Быстрая покупка</button>
              </Link>

              <Link to={"/basket"}>
                <button onClick={() => toggleButton1(selectedProduct)}>
                  Добавить в корзину
                </button>
              </Link>
            </div>
          </div>

          <div className="nike-razmer">
            <h1>Выберите размер</h1>
            <div className="razmer-button">
              <button onClick={() => setCurrentView("size")}>size</button>
            </div>
            <p>Таблица размеров</p>
          </div>

          <div className="nike-grid">
            {sizeOptions
              .find((option) => option.label === currentView)
              ?.sizes?.map((item, index) => (
                <div
                  className="grid1"
                  key={index}
                  onClick={() => handleSizeSelect(item.size)}
                >
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

      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={handleCloseClick}>
              <img src={x} alt="Закрыть" />
            </button>
            <h2>Товар добавлен в корзину!</h2>
            <p>
              {selectedProduct?.name} ({selectedSize})
            </p>
            <Link to="/cart">
              <button className="go-to-cart">Перейти в корзину</button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default ObuvCom;
