import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CatalogCom.scss";
import { Link } from "react-router-dom";

function CatalogCom() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://66dfd7322fb67ac16f2740dd.mockapi.io/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("APIден маалымат алууда ката:", err);
      });
  }, []);

  return (
    <div className="catalog-container">
      <h1>Каталог товаров</h1>
      <div className="product-grid">
        {products.map((item) => (
          <Link to={`/obuv/${item.id}`} state={{ selectedProduct: item }}
          style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card" key={item.id}>
              <img src={item.avatar} alt={item.name} className="product-img" />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">
                  {parseInt(item.price).toLocaleString()} с
                </span>
              </div>
            </div>
          </Link> 
        ))}
      </div>
    </div>
  );
}

export default CatalogCom;