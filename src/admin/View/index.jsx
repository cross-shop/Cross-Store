import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import "./style.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    setEditCategory(product.category); 
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (!editName || !editPrice || !editAvatar || !editCategory) return; 

    const updatedProduct = {
      ...editingProduct,
      name: editName,
      price: editPrice,
      avatar: editAvatar,
      category: editCategory, 
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

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(products.map(product => product.category))];

  if (loading) return (
    <div className="products-loading">
      <div className="loading-spinner"></div>
      <p>Продукттар жүктөлүүдө...</p>
    </div>
  );

  return (
    <>
      <div className="products-container">
        <div className="products-header">
          <div className="header-content">
            <h1>Продукттарды башкаруу</h1>
            <p>Бардык продукттарды көрүү, өзгөртүү жана өчүрүү</p>
          </div>
          <a href="/addproduct" className="add-product-btn">
            <FaPlus />
            Жаңы продукт
          </a>
        </div>

        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Продукт издөө..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Бардык категориялар</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-stats">
          <div className="stat-item">
            <span className="stat-number">{products.length}</span>
            <span className="stat-label">Жалпы продукттар</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{categories.length}</span>
            <span className="stat-label">Категориялар</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{filteredProducts.length}</span>
            <span className="stat-label">Көрсөтүлгөн</span>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.avatar} alt={product.name} />
                <div className="product-overlay">
                  <button
                    className="action-btn edit-btn"
                    onClick={() => startEditing(product)}
                    title="Өзгөртүү"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(product.id)}
                    title="Өчүрүү"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{parseInt(product.price).toLocaleString()} сом</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>Продукттар табылган жок</p>
          </div>
        )}

        {/* Негизги модал - түздөн-түз render */}
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: 'white',
              padding: 30,
              borderRadius: 16,
              minWidth: 400,
              maxWidth: 500
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20
              }}>
                <h2 style={{ margin: 0, color: '#1a365d' }}>Продукту өзгөртүү</h2>
                <button 
                  onClick={() => {
                    setEditingProduct(null);
                    setShowModal(false);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#718096'
                  }}
                >
                  ×
                </button>
              </div>
              
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Продукт аты</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Продукт аты"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Баасы</label>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  placeholder="Баасы (сом)"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Сүрөт URL</label>
                <input
                  type="text"
                  value={editAvatar}
                  onChange={(e) => setEditAvatar(e.target.value)}
                  placeholder="Сүрөт URL"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Категория</label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="nike">компонент1 nike</option>
                  <option value="puma">компонент2 puma</option>
                  <option value="jordan">компонент3 jordan</option>
                  <option value="adidas">компонент4 adidas</option>
                </select>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end'
              }}>
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowModal(false);
                  }}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    background: '#e2e8f0',
                    color: '#4a5568'
                  }}
                >
                  Жабуу
                </button>
                <button 
                  onClick={handleUpdate}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    background: '#3182ce',
                    color: 'white'
                  }}
                >
                  Сактоо
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Portal модалды убактылуу алып салайын */}
      {/* {showModal && createPortal(<ModalContent />, document.body)} */}
    </>
  );
};

export default ProductList;