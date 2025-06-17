import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBoxOpen, FaPlus, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";                    
import "./Sidebar.css";

const Sidebar = ({ userName }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

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

  const confirmLogout = () => {
    if (window.confirm("Чынында чыгасыңбы?")) {
      localStorage.removeItem("token");
      navigate("/adminlogin");
    }
  };

  const menuItems = [
    { name: "Башкы бет", path: "/", icon: <FaHome /> },
    { name: "Продукттар", path: "/productlist", icon: <FaBoxOpen /> },
    { name: "Продукт кошуу", path: "/addproduct", icon: <FaPlus /> },
  ];

  return (
    <div className="fonnn">
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

            <div className="user-info"><p>Welcome, {userName}</p></div>

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

          <div className="user-info"><p>Welcome, {userName}</p></div>

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
    </div>
  );
};

export default Sidebar;
