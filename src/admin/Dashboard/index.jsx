import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Outlet, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaBoxOpen, 
  FaPlus, 
  FaBars, 
  FaTimes, 
  FaSignOutAlt,
  FaChartBar,
  FaUsers,
  FaShoppingCart,
  FaCog
} from "react-icons/fa";                    
import "./Sidebar.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [stats, setStats] = useState({
    totalProducts: 0,
    categories: {},
    totalCategories: 0
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setCollapsed(false);
      } else {
        setCollapsed(true); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("https://66dfd7322fb67ac16f2740dd.mockapi.io/product");
      if (response.ok) {
        const products = await response.json();
        
        // Calculate statistics
        const categories = {};
        products.forEach(product => {
          if (product.category) {
            categories[product.category] = (categories[product.category] || 0) + 1;
          }
        });

        setStats({
          totalProducts: products.length,
          categories,
          totalCategories: Object.keys(categories).length
        });
      }
    } catch (error) {
      console.error("Статистика алууда ката:", error);
    }
  };

  const confirmLogout = () => {
    if (window.confirm("Чынында чыгасыңбы?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userType");
      navigate("/adminlogin");
    }
  };

  const menuItems = [
    { name: "Дашборд", path: "/admin", icon: <FaHome /> },
    { name: "Продукттар", path: "/productlist", icon: <FaBoxOpen /> },
    { name: "Продукт кошуу", path: "/addproduct", icon: <FaPlus /> },
    { name: "Статистика", path: "/admin/stats", icon: <FaChartBar /> },
    { name: "Клиенттер", path: "/admin/users", icon: <FaUsers /> },
    { name: "Заказдар", path: "/admin/orders", icon: <FaShoppingCart /> },
    { name: "Сынактар", path: "/admin/settings", icon: <FaCog /> },
  ];

  const renderMainContent = () => {
    const currentPath = location.pathname;
    
    // If we're on a child route, render the Outlet
    if (currentPath !== "/admin") {
      return <Outlet />;
    }
    
    // Otherwise render dashboard main content
    return (
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Админ Дашборд</h1>
          <p>Системанын жалпы көрүнүшү</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FaBoxOpen />
            </div>
            <div className="stat-content">
              <h3>{stats.totalProducts}</h3>
              <p>Жалпы продукттар</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FaChartBar />
            </div>
            <div className="stat-content">
              <h3>{stats.totalCategories}</h3>
              <p>Категориялар</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <div className="stat-content">
              <h3>0</h3>
              <p>Клиенттер</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FaShoppingCart />
            </div>
            <div className="stat-content">
              <h3>0</h3>
              <p>Заказдар</p>
            </div>
          </div>
        </div>

        <div className="categories-section">
          <h2>Категориялар боюнча статистика</h2>
          <div className="categories-grid">
            {Object.entries(stats.categories).map(([category, count]) => (
              <div key={category} className="category-card">
                <h4>{category}</h4>
                <p>{count} продукт</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      {isMobile ? (
        <div className="mobile-header">
          <div className="mobile-admin-text">Admin</div>
          <button className="mobile-menu-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
          <div className={`sidebar mobile-sidebar ${collapsed ? "closed" : "open"}`}>
            <div className="top-section">
              <h2 className="sidebar-title">Admin Panel</h2>
              <button className="collapse-btn" onClick={() => setCollapsed(true)}>
                <FaTimes />
              </button>
            </div>

            <div className="user-info">
              <p>Welcome, Admin</p>
            </div>

            <nav className="menu">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                      onClick={() => setCollapsed(true)} 
                    >
                      <span className="icon">{item.icon}</span>
                      <span className="link-text">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="logout-btn" onClick={confirmLogout}>
              <FaSignOutAlt />
              <span>Чыгуу</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="top-section">
            <h2 className="sidebar-title">Admin Panel</h2>
          </div>

          <div className="user-info">
            <p>Welcome, Admin</p>
          </div>

          <nav className="menu">
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="link-text">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className="logout-btn" onClick={confirmLogout}>
            <FaSignOutAlt />
            <span>Чыгуу</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default Dashboard;
