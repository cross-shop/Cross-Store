import React, { useState } from "react";

const AddProduct = () => {
  const [name, setProductName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: name,
      avatar: avatar,
      price: price,
      id: Date.now().toString(),
    };

    try {
      const response = await fetch(
        "https://66dfd7322fb67ac16f2740dd.mockapi.io/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Продукт ийгиликтүү кошулду:", result);

        setMessage("Товар ийгиликтүү кошулду!");

        setTimeout(() => {
          setMessage("");
        }, 5000);

        window.location.href = "/productlist";
      } else {
        console.error("Жүктөөдө каталар болду");
        setMessage("Товарды кошууда ката болду!");
      }
    } catch (error) {
      console.error("Жүктөөдө каталар:", error);
      setMessage("Товарды кошууда ката болду!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Продукт кошуу</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default AddProduct;
