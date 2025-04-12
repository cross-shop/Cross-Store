import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null); 
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const apiUrl = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("Продукттар: ", data); 
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
  };

  const handleUpdate = async () => {
    if (!editName || !editPrice) return;

    const updatedProduct = {
      ...editingProduct,
      name: editName,
      price: editPrice,
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
        fetchProducts(); // кайра жүктөө
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
      <a href="/dashboard">dashboard</a>
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
            {editingProduct?.id === product.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <button onClick={handleUpdate}>Сактоо</button>
                <button onClick={() => setEditingProduct(null)}>Жабуу</button>
              </>
            ) : (
              <>
                <h3>{product.name}</h3>
                <img src={product.avatar} alt={product.name} width="150" />
                <p>Баасы: {product.price} сом</p>
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
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
