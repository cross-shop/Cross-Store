import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [editCategory, setEditCategory] = useState(""); // Категорияны сактоо
  const [showModal, setShowModal] = useState(false);

  const apiUrl = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Маалымат алууда ката болду");
      }
    } catch (error) {
      console.error("Fetch ката:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Бул продукту өчүрүүгө ишенесизби?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts(products.filter((product) => product.id !== id));
      } else {
        console.error("Өчүрүүдө ката чыкты");
      }
    } catch (error) {
      console.error("Өчүрүү ката:", error);
    }
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditAvatar(product.avatar);
    setEditCategory(product.category); // Категорияны да тандап алуу
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (!editName || !editPrice || !editAvatar || !editCategory) return; // Категорияны текшерүү

    const updatedProduct = {
      ...editingProduct,
      name: editName,
      price: editPrice,
      avatar: editAvatar,
      category: editCategory, // Категорияны дагы жаңыртуу
    };

    try {
      const response = await fetch(`${apiUrl}/${editingProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        setEditingProduct(null);
        setShowModal(false);
        fetchProducts();
      } else {
        console.error("Өзгөртүүдө ката болду");
      }
    } catch (error) {
      console.error("Өзгөртүү ката:", error);
    }
  };

  if (loading) return <p>Жүктөлүүдө...</p>;

  return (
    <div>
      <a href="/admin">dashboard</a>
      <h2>Продуктылар тизмеси</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{product.name}</h3>
            <img src={product.avatar} alt={product.name} width="150" />
            <p>Баасы: {product.price} сом</p>
            <p>Категория: {product.category}</p> 
            <button
              onClick={() => startEditing(product)}
              style={{ marginRight: "10px" }}
            >
              Өзгөртүү
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Өчүрүү
            </button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Продукту өзгөртүү</h2>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Аты"
              style={styles.input}
            />
            <input
              type="number"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Баасы"
              style={styles.input}
            />
            <input
              type="text"
              value={editAvatar}
              onChange={(e) => setEditAvatar(e.target.value)}
              placeholder="Сүрөт URL"
              style={styles.input}
            />
            <select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              style={styles.input}
            >
              <option value="food">экинчи компонентке</option>
              <option value="clothing">биринчи компонентке</option>
            </select>
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleUpdate} style={styles.saveBtn}>
                Сактоо
              </button>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setShowModal(false);
                }}
                style={styles.cancelBtn}
              >
                Жабуу
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Стили
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
  },
  saveBtn: {
    marginRight: "10px",
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  cancelBtn: {
    padding: "8px 12px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "5px",
  },
};

export default ProductList;
