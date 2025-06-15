import React, { useState } from "react";
import "./style.css";

const AddProduct = () => {
  const [name, setProductName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      avatar,
      price,
      category,
      id: Date.now().toString(),
    };

    try {
      const response = await fetch(
        "https://66dfd7322fb67ac16f2740dd.mockapi.io/product",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        setMessage("Товар ийгиликтүү кошулду!");
        setTimeout(() => setMessage(""), 5000);
        window.location.href = "/productlist";
      } else {
        setMessage("Товарды кошууда ката болду!");
      }
    } catch (error) {
      setMessage("Товарды кошууда ката болду!");
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Продукт аты"
        value={name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Сүрөт URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <input
        type="number"
        placeholder="Баасы"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select
        value={category}  
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Категорияны тандаңыз</option>
        <option value="nike">компонент1 nike</option>
        <option value="puma">компонент2 puma</option>
        <option value="jordan">компонент3 jordan</option>
        <option value="lining">компонент4 lining</option>
      </select>
      <button type="submit">Продукт кошуу</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddProduct;
